/* VerkRadar MVP single-page app.
   No backend required. Uses localStorage and mock data.
   Later: replace storage functions with Supabase queries.
*/

const SUPABASE_URL = "https://asojxjbsgqbfpbepojzh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0";

const supabaseClient =
  window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== "PASTE_MY_ANON_PUBLIC_KEY_HERE"
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

const STORAGE_KEYS = {
  profile: "verkradar_profile",
  saved: "verkradar_saved_opportunities",
  ignored: "verkradar_ignored_opportunities"
};

const defaultProfile = {
  companyName: "RafFix ehf.",
  contactEmail: "owner@raffix.is",
  website: "https://raffix.is",
  industry: "Electrical",
  services: ["electrical installation", "maintenance", "fire alarm systems", "EV chargers"],
  includeKeywords: ["charging", "inspection", "public buildings"],
  excludeKeywords: ["telecom", "snow removal"],
  locations: ["Reykjavík", "Capital Area", "Suðurnes", "Remote / Online"],
  minProjectValue: 500000,
  maxProjectValue: 30000000,
  allowUnknownValue: true,
  reportFrequency: "weekly",
  reportDay: "monday",
  deadlineReminders: true,
  includeLowConfidence: false
};

const PROFILE_LOAD_TIMEOUT_MS = 12000;

function getEmptyProfile() {
  return {
    companyName: "",
    contactEmail: state.user?.email || "",
    website: "",
    industry: "",
    services: [],
    includeKeywords: [],
    excludeKeywords: [],
    locations: [],
    baseLocation: "",
    serviceAreas: [],
    willingToTravel: false,
    nationalProjects: false,
    remoteProjects: false,
    minimumProjectValueForTravel: "",
    minProjectValue: "",
    maxProjectValue: "",
    allowUnknownValue: true,
    reportFrequency: "weekly",
    reportDay: "monday",
    deadlineReminders: true,
    includeLowConfidence: false
  };
}

let state = {
  route: location.hash.replace("#", "") || "/",
  user: null,
  currentUser: null,
  isAdmin: false,
  authLoading: true,
  isBooting: true,
  authLoaded: false,
  profileLoaded: false,
  adminLoaded: false,
  bootError: null,
  authMessage: null,
  authForm: {
    email: "",
    password: ""
  },
  authSubmitting: false,
  isSavingProfile: false,
  profileSaved: false,
  profileSaveMessage: null,
  profileSaveError: null,
  profile: null,
  profileDraft: null,
  profileDraftDirty: false,
  profileLoading: false,
  profileLoadError: null,
  companyId: null,
  opportunities: [],
  storedMatches: [],
  saved: loadArray(STORAGE_KEYS.saved),
  ignored: loadArray(STORAGE_KEYS.ignored),
  filters: {
    search: "",
    label: "recommended",
    category: "all",
    location: "all",
    type: "all",
    savedOnly: false
  },
  tedImportMode: "nordic",
  dropdown: {
    openKey: null,
    focusedIndex: 0
  },
  importStatus: null,
  importLoading: false,
  connectorImportStatus: null,
  connectorImportLoading: false,
  connectorTestingSourceId: null,
  importedTedOpportunities: [],
  importedTedOpportunitiesLoading: false,
  importedTedOpportunitiesLoaded: false,
  importedTedOpportunitiesError: null,
  importRuns: [],
  importRunsLoading: false,
  importRunsLoaded: false,
  importRunsError: null,
  adminReports: [],
  adminReportsLoading: false,
  adminReportsLoaded: false,
  adminReportsError: null,
  sourceCoverage: [],
  sourceCoverageLoading: false,
  sourceCoverageLoaded: false,
  sourceCoverageError: null,
  adminCompanies: [],
  adminCompaniesLoading: false,
  adminCompaniesLoaded: false,
  adminCompaniesError: null,
  selectedAdminCompanyId: null,
  adminActiveTab: "overview",
  adminCompanyFilters: {
    search: "",
    industry: "all",
    profileStatus: "all",
    plan: "all"
  },
  adminOpportunityFilters: {
    source: "all",
    status: "all",
    country: "all",
    search: "",
    tedOnly: false,
    manualOnly: false,
    showDemoTest: true
  },
  matchStatus: null,
  matchingLoading: false,
  lastMatchedAt: null,
  reports: [],
  reportsLoaded: false,
  reportsLoadError: null,
  reportArchiveLoading: false,
  reportSaveLoading: false,
  reportMessage: null,
  selectedReportId: null,
  adminMessage: null,
  adminSubmitting: false,
  adminDeletingId: null,
  adminUpdatingId: null,
  isLoadingOpportunities: false,
  opportunityLoadError: null,
  isMobileMenuOpen: false,
  profileMenuOpen: false,
  selectedOpportunityId: null,
  toast: null
};

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function clearLocalProfileState() {
  localStorage.removeItem("verkradar_profile");
  localStorage.removeItem("verkradar_local_user_id");
  localStorage.removeItem("verkradar_saved_opportunities");
  localStorage.removeItem("verkradar_ignored_opportunities");
  state.profile = null;
  state.profileDraft = null;
  state.profileDraftDirty = false;
  state.currentUser = null;
  state.companyId = null;
  state.storedMatches = [];
  state.reports = [];
  state.reportsLoaded = false;
  state.reportsLoadError = null;
  state.reportMessage = null;
  state.selectedReportId = null;
  state.profileSaved = false;
  state.profileSaveMessage = null;
  state.profileSaveError = null;
  state.saved = [];
  state.ignored = [];
  state.importRuns = [];
  state.importRunsLoading = false;
  state.importRunsLoaded = false;
  state.importRunsError = null;
  state.importedTedOpportunities = [];
  state.importedTedOpportunitiesLoading = false;
  state.importedTedOpportunitiesLoaded = false;
  state.importedTedOpportunitiesError = null;
  state.adminReports = [];
  state.adminReportsLoading = false;
  state.adminReportsLoaded = false;
  state.adminReportsError = null;
  state.sourceCoverage = [];
  state.sourceCoverageLoading = false;
  state.sourceCoverageLoaded = false;
  state.sourceCoverageError = null;
  state.adminCompanies = [];
  state.adminCompaniesLoading = false;
  state.adminCompaniesLoaded = false;
  state.adminCompaniesError = null;
  state.selectedAdminCompanyId = null;
  state.lastMatchedAt = null;
}

let suppressNextHashChange = false;

window.addEventListener("hashchange", () => {
  const nextRoute = location.hash.replace("#", "") || "/";

  if (suppressNextHashChange && nextRoute === state.route) {
    suppressNextHashChange = false;
    return;
  }
  suppressNextHashChange = false;

  if (["/login", "/signup"].includes(nextRoute) && nextRoute !== state.route) {
    state.authMessage = null;
    state.authSubmitting = false;
  }

  state.route = nextRoute;
  state.isMobileMenuOpen = false;
  state.profileMenuOpen = false;
  document.body.classList.remove("mobile-menu-active");
  render();
  scrollToPageTop();
  afterRouteRender();
});

document.addEventListener("click", (event) => {
  if (state.dropdown.openKey && !event.target.closest?.(".custom-select")) {
    closeDropdown();
  }

  if (state.profileMenuOpen && !event.target.closest?.(".profile-menu")) {
    state.profileMenuOpen = false;
    render();
  }

  if (event.target.classList?.contains("modal-backdrop")) {
    event.preventDefault();
    if (state.selectedAdminCompanyId) {
      state.selectedAdminCompanyId = null;
      render();
      return;
    }
    closeDetails();
    return;
  }

  if (state.isMobileMenuOpen && !event.target.closest?.(".site-header")) {
    closeMobileMenu();
    return;
  }

  const action = event.target.closest?.("[data-action]");
  if (!action) return;

  const name = action.dataset.action;
  const id = action.dataset.id;

  if (name === "close-modal") {
    event.preventDefault();
    event.stopPropagation();
    if (state.selectedAdminCompanyId) {
      state.selectedAdminCompanyId = null;
      render();
      return;
    }
    closeDetails();
    return;
  }

  if (name === "toggle-mobile-menu") {
    event.preventDefault();
    if (state.isMobileMenuOpen) closeMobileMenu();
    else openMobileMenu();
    return;
  }

  if (name === "mobile-nav") {
    event.preventDefault();
    mobileNavigate(action.dataset.href);
    return;
  }

  if (name === "mobile-scroll-to") {
    event.preventDefault();
    mobileScrollTo(action.dataset.target);
    return;
  }

  if (name === "toggle-profile-menu") {
    event.preventDefault();
    if (state.isMobileMenuOpen || isMobileViewport()) {
      state.profileMenuOpen = false;
      render();
      return;
    }
    state.profileMenuOpen = !state.profileMenuOpen;
    render();
    return;
  }

  if (name === "toggle-dropdown") {
    event.preventDefault();
    const key = action.dataset.key;
    const isOpen = state.dropdown.openKey === key;
    state.dropdown.openKey = isOpen ? null : key;
    state.dropdown.focusedIndex = getSelectedFilterIndex(key);
    render();
    if (!isOpen) focusDropdownOption();
    return;
  }

  if (name === "select-filter") {
    event.preventDefault();
    const key = action.dataset.key;
    const value = action.dataset.value;
    if (action.dataset.profileField) {
      initializeProfileDraft();
      state.profileDraft[action.dataset.profileField] = value;
      markProfileDraftDirty();
    } else {
      state.filters[key] = value;
    }
    state.dropdown.openKey = null;
    state.dropdown.focusedIndex = 0;
    render();
    return;
  }

  if (name === "toggle-profile-suggestion") {
    event.preventDefault();
    toggleProfileSuggestion(action.dataset.field, action.dataset.value);
    return;
  }

  if (name === "scroll-to") {
    event.preventDefault();
    state.isMobileMenuOpen = false;
    state.profileMenuOpen = false;
    document.body.classList.remove("mobile-menu-active");
    const targetId = action.dataset.target;
    if (!targetId) return;
    if (state.route !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(targetId), 50);
    } else {
      render();
      setTimeout(() => scrollToSection(targetId), 0);
    }
    return;
  }

  if (name === "go") {
    event.preventDefault();
    state.isMobileMenuOpen = false;
    state.profileMenuOpen = false;
    document.body.classList.remove("mobile-menu-active");
    navigate(action.dataset.href);
    return;
  }
  if (name === "save") toggleSave(id);
  if (name === "ignore") ignoreOpportunity(id);
  if (name === "unignore") unignoreOpportunity(id);
  if (name === "details") openDetails(id);
  if (name === "copy-report") copyReport();
  if (name === "save-report") saveCurrentReport();
  if (name === "view-report") {
    state.selectedReportId = id;
    render();
  }
  if (name === "close-archive-report") {
    state.selectedReportId = null;
    render();
  }
  if (name === "admin-tab") {
    state.adminActiveTab = action.dataset.tab || "overview";
    state.selectedAdminCompanyId = null;
    render();
  }
  if (name === "view-admin-company") {
    state.selectedAdminCompanyId = id;
    render();
  }
  if (name === "close-admin-company") {
    state.selectedAdminCompanyId = null;
    render();
  }
  if (name === "admin-refresh-company-matches") {
    state.adminMessage = { type: "success", text: "Company matching refresh is handled by the automatic pipeline. Use source imports or profile save to refresh matches." };
    render();
  }
  if (name === "admin-generate-company-report") {
    state.adminMessage = { type: "success", text: "Report generation is handled by the automatic weekly report pipeline. Manual per-company generation is not enabled yet." };
    render();
  }
  if (name === "import-ted") importTedNotices();
  if (name === "import-source-connectors") importSourceConnectors();
  if (name === "test-source-connector") importSourceConnectors(id);
  if (name === "refresh-admin-status") refreshAdminOperationsData();
  if (name === "hide-imported-opportunity") updateOpportunityStatus(id, "hidden");
  if (name === "mark-imported-relevant") updateOpportunityStatus(id, "open");
  if (name === "run-matching") runMatchingForCurrentCompany();
  if (name === "retry-settings-profile") retrySettingsProfileLoad();
  if (name === "show-all-matches") {
    state.filters.label = "all";
    render();
  }
  if (name === "show-all-opportunities") {
    state.filters.label = "all_opportunities";
    render();
  }
  if (name === "include-national-opportunities") {
    initializeProfileDraft();
    state.profileDraft.nationalProjects = true;
    if (!state.profileDraft.locations.includes("All Iceland")) {
      state.profileDraft.locations = [...state.profileDraft.locations, "All Iceland"];
    }
    markProfileDraftDirty();
    navigate("/settings");
  }
  if (name === "delete-opportunity") deleteOpportunity(id);
  if (name === "logout") {
    state.profileMenuOpen = false;
    if (state.isMobileMenuOpen) {
      closeMobileMenu(() => signOut());
      return;
    }
    signOut();
  }
  if (name === "load-demo") {
    if (state.user) {
      saveCompanyProfile(defaultProfile)
        .then(() => navigate("/dashboard"))
        .catch((error) => {
          console.error("Failed to load demo profile:", error);
          state.profileSaveError = formatSupabaseError(error);
          render();
        });
    } else {
      saveProfile(defaultProfile);
      state.profile = defaultProfile;
      navigate("/dashboard");
    }
  }
  if (name === "reset") {
    clearLocalProfileState();
    navigate("/");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.isMobileMenuOpen) {
    event.preventDefault();
    closeMobileMenu();
    return;
  }

  if (event.key === "Escape" && state.profileMenuOpen) {
    event.preventDefault();
    state.profileMenuOpen = false;
    render();
    return;
  }

  if (event.key === "Escape" && state.selectedOpportunityId) {
    event.preventDefault();
    closeDetails();
    return;
  }

  if (event.key === "Escape" && state.selectedAdminCompanyId) {
    event.preventDefault();
    state.selectedAdminCompanyId = null;
    render();
    return;
  }

  const dropdownRoot = event.target.closest?.(".custom-select");
  const activeKey = dropdownRoot?.dataset.key || state.dropdown.openKey;
  if (!activeKey) return;

  const options = getFilterOptions(activeKey);
  const isOpen = state.dropdown.openKey === activeKey;

  if (event.key === "Escape" && isOpen) {
    event.preventDefault();
    closeDropdown();
    focusDropdownTrigger(activeKey);
    return;
  }

  if ((event.key === "ArrowDown" || event.key === "ArrowUp") && !isOpen) {
    event.preventDefault();
    state.dropdown.openKey = activeKey;
    state.dropdown.focusedIndex = getSelectedFilterIndex(activeKey);
    render();
    focusDropdownOption();
    return;
  }

  if (!isOpen) return;

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    state.dropdown.focusedIndex = (state.dropdown.focusedIndex + direction + options.length) % options.length;
    render();
    focusDropdownOption();
    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    const option = options[state.dropdown.focusedIndex];
    if (!option) return;
    const profileField = dropdownRoot?.querySelector?.("[data-profile-field]")?.dataset.profileField;
    if (profileField) {
      initializeProfileDraft();
      state.profileDraft[profileField] = option.value;
      markProfileDraftDirty();
    } else {
      state.filters[activeKey] = option.value;
    }
    state.dropdown.openKey = null;
    state.dropdown.focusedIndex = 0;
    render();
    focusDropdownTrigger(activeKey);
  }
});

document.addEventListener("input", (event) => {
  const authField = event.target.closest?.("[data-auth-field]");
  if (authField) {
    state.authForm[authField.dataset.authField] = authField.value;
    return;
  }

  const field = event.target.closest?.("[data-profile-field]");
  if (field) {
    initializeProfileDraft();
    const key = field.dataset.profileField;
    if (field.type === "checkbox") {
      state.profileDraft[key] = field.checked;
    } else if (field.dataset.profileArray === "true") {
      state.profileDraft[key] = splitInput(field.value);
    } else if (field.dataset.profileNumber === "true") {
      state.profileDraft[key] = field.value;
    } else {
      state.profileDraft[key] = field.value;
    }
    markProfileDraftDirty();
    return;
  }

  if (event.target.matches("[data-filter]")) {
    const key = event.target.dataset.filter;
    if (event.target.type === "checkbox") {
      state.filters[key] = event.target.checked;
    } else {
      state.filters[key] = event.target.value;
    }
    render();
  }

  if (event.target.matches("[data-admin-filter]")) {
    const key = event.target.dataset.adminFilter;
    if (event.target.type === "checkbox") {
      state.adminOpportunityFilters[key] = event.target.checked;
      if (key === "tedOnly" && event.target.checked) state.adminOpportunityFilters.manualOnly = false;
      if (key === "manualOnly" && event.target.checked) state.adminOpportunityFilters.tedOnly = false;
    } else {
      state.adminOpportunityFilters[key] = event.target.value;
    }
    render();
  }

  if (event.target.matches("[data-admin-company-filter]")) {
    const key = event.target.dataset.adminCompanyFilter;
    state.adminCompanyFilters[key] = event.target.value;
    render();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-import-mode]")) {
    state.tedImportMode = event.target.value;
    render();
    return;
  }

  if (event.target.matches("[data-profile-location]")) {
    initializeProfileDraft();
    state.profileDraft.locations = Array.from(document.querySelectorAll("[data-profile-location]:checked"))
      .map((input) => input.value);
    markProfileDraftDirty();
    return;
  }

  const field = event.target.closest?.("[data-profile-field]");
  if (!field) return;
  initializeProfileDraft();
  const key = field.dataset.profileField;
  state.profileDraft[key] = field.type === "checkbox" ? field.checked : field.value;
  markProfileDraftDirty();
});

document.addEventListener("submit", async (event) => {
  if (event.target.id === "login-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    signIn(form.get("email"), form.get("password"));
    return;
  }

  if (event.target.id === "signup-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    signUp(form.get("email"), form.get("password"));
    return;
  }

  if (event.target.id === "admin-opportunity-form") {
    event.preventDefault();
    addOpportunity(new FormData(event.target), event.target);
    return;
  }

  if (event.target.id === "profile-form") {
    event.preventDefault();
    state.profileSaved = false;
    updateProfileDraftFromForm(event.target);
    const profile = normalizeProfileDraftForSave();

    if (!profile.companyName || !profile.contactEmail || !profile.industry) {
      showToast("Please fill in company name, email and industry.", "error");
      return;
    }

    state.isSavingProfile = true;
    state.profileSaved = false;
    state.profileSaveMessage = null;
    state.profileSaveError = null;
    render();

    const shouldRedirect = state.route !== "/settings";
    try {
      await saveCompanyProfile(profile);
      await loadProfileFromSupabase({ overwriteDraft: true });
      if (state.profileLoadError) {
        throw new Error(`Profile saved, but the saved profile could not be reloaded. ${state.profileLoadError}`);
      }
      state.profileSaveMessage = "Refreshing matches...";
      state.profileSaveError = null;
      render();
      const matchedCount = await runMatchingForCurrentCompany();
      if (state.matchStatus?.type === "error") {
        state.profileSaveMessage = "Profile saved, but matching could not be refreshed. Try Run matching.";
      } else {
        const plural = matchedCount === 1 ? "opportunity" : "opportunities";
        state.profileSaveMessage = shouldRedirect
          ? `Profile saved — ${matchedCount} relevant ${plural} found. Redirecting...`
          : `Profile saved — ${matchedCount} relevant ${plural} found.`;
      }
      state.profileSaved = true;
      render();
      clearTimeout(window.__profileSavedTimeout);
      window.__profileSavedTimeout = setTimeout(() => {
        state.profileSaved = false;
        render();
      }, 1800);
      if (shouldRedirect) {
        setTimeout(() => navigate("/dashboard"), 800);
      }
    } catch (error) {
      console.error("Failed to save company profile:", error);
      state.profileSaveError = formatSupabaseError(error);
      state.profileSaveMessage = null;
      state.profileSaved = false;
    } finally {
      state.isSavingProfile = false;
      render();
    }
  }
});

window.addEventListener("focus", handleAppFocusReturn);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") handleAppFocusReturn();
});

function handleAppFocusReturn() {
  if (state.route !== "/settings") return;
  if (state.profileDraftDirty) {
    state.profileLoading = false;
    state.profileLoaded = true;
    render();
  }
}

function openMobileMenu() {
  updateMobileMenuOffset();
  state.isMobileMenuOpen = true;
  state.profileMenuOpen = false;
  document.body.classList.add("mobile-menu-active");
  render();
}

function closeMobileMenu(callback) {
  if (!state.isMobileMenuOpen) {
    if (typeof callback === "function") callback();
    return;
  }

  state.isMobileMenuOpen = false;
  state.profileMenuOpen = false;
  document.body.classList.remove("mobile-menu-active");
  render();

  if (typeof callback === "function") {
    setTimeout(callback, 260);
  }
}

function mobileNavigate(route) {
  if (!route) return;
  if (!state.isMobileMenuOpen) {
    navigate(route);
    return;
  }
  closeMobileMenu(() => navigate(route));
}

function mobileScrollTo(targetId) {
  if (!targetId) return;
  const scrollAfterClose = () => {
    if (state.route !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(targetId), 50);
    } else {
      render();
      setTimeout(() => scrollToSection(targetId), 0);
    }
  };

  if (!state.isMobileMenuOpen) {
    scrollAfterClose();
    return;
  }
  closeMobileMenu(scrollAfterClose);
}

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia?.("(max-width: 920px)").matches;
}

function updateMobileMenuOffset() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  document.documentElement.style.setProperty("--header-height", `${Math.ceil(header.getBoundingClientRect().height)}px`);
}

function navigate(route) {
  route = route || "/";
  const authRoutes = ["/login", "/signup"];

  if (authRoutes.includes(route) && route !== state.route) {
    state.authMessage = null;
    state.authSubmitting = false;
  }

  state.isMobileMenuOpen = false;
  state.profileMenuOpen = false;
  document.body.classList.remove("mobile-menu-active");

  if (state.route === route) {
    render();
    scrollToPageTop();
    afterRouteRender();
    return;
  }

  state.route = route;
  suppressNextHashChange = true;
  location.hash = route;
  render();
  scrollToPageTop();
  afterRouteRender();
}

function getPostAuthRoute() {
  if (!state.user && !state.currentUser) return "/";
  return state.profile ? "/dashboard" : "/onboarding";
}

function isPublicAuthEntryRoute(route = state.route) {
  const normalized = String(route || "");
  return ["/", "/login", "/signup"].includes(normalized) ||
    normalized.startsWith("access_token=") ||
    normalized.startsWith("code=") ||
    normalized.includes("type=signup") ||
    normalized.includes("type=email_change") ||
    normalized.includes("type=recovery");
}

function replaceHashRoute(route) {
  state.route = route;
  if (location.hash.replace("#", "") !== route) {
    history.replaceState(null, "", `#${route}`);
  }
}

function redirectAuthenticatedPublicRoute({ replace = false } = {}) {
  if (!state.user && !state.currentUser) return false;
  if (!isPublicAuthEntryRoute()) return false;
  const targetRoute = getPostAuthRoute();
  state.authMessage = null;
  if (replace) replaceHashRoute(targetRoute);
  else navigate(targetRoute);
  return true;
}

function afterRouteRender() {
  if (state.route === "/report" && state.companyId && !state.reportsLoaded && !state.reportArchiveLoading) {
    loadReportsForCurrentCompany();
  }
  if (state.route === "/admin" && state.isAdmin) {
    if (!state.importRunsLoaded && !state.importRunsLoading) loadImportRunsForAdmin();
    if (!state.adminReportsLoaded && !state.adminReportsLoading) loadAdminReports();
    if (!state.sourceCoverageLoaded && !state.sourceCoverageLoading) loadSourceCoverageForAdmin();
    if (!state.adminCompaniesLoaded && !state.adminCompaniesLoading) loadAdminCompanies();
    if (!state.importedTedOpportunitiesLoaded && !state.importedTedOpportunitiesLoading) loadNewestImportedTedOpportunities().then(render).catch((error) => {
      console.error("Failed to load latest TED opportunities:", error);
    });
  }
}

function scrollToPageTop() {
  window.scrollTo(0, 0);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function loadOpportunities() {
  state.isLoadingOpportunities = true;
  state.opportunityLoadError = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client not configured");
    }

    const { data, error } = await supabaseClient
      .from("opportunities")
      .select("*, sources(name, source_type)")
      .eq("status", "open")
      .order("deadline", { ascending: true });

    if (error) throw error;

    if (!data || data.length === 0) {
      state.opportunities = window.VERKRADAR_OPPORTUNITIES || [];
      state.storedMatches = [];
      state.opportunityLoadError = "Using demo data. Supabase has no opportunities yet.";
    } else {
      state.opportunities = data.map(mapSupabaseOpportunity);
      state.opportunityLoadError = null;
      if (state.companyId) await loadStoredMatchesForCurrentCompany();
    }
  } catch (err) {
    console.error("Failed to load Supabase opportunities:", err);
    state.opportunities = window.VERKRADAR_OPPORTUNITIES || [];
    state.storedMatches = [];
    state.opportunityLoadError = "Using demo data. Supabase connection failed.";
  } finally {
    state.isLoadingOpportunities = false;
    render();
  }
}

async function loadImportRunsForAdmin() {
  if (!supabaseClient || !state.isAdmin) {
    state.importRuns = [];
    state.importRunsLoaded = true;
    return;
  }

  state.importRunsLoading = true;
  state.importRunsError = null;
  render();

  try {
    const { data, error } = await supabaseClient
      .from("import_runs")
      .select("*")
      .order("started_at", { ascending: false })
      .limit(10);

    if (error) throw error;
    state.importRuns = data || [];
    state.importRunsLoaded = true;
  } catch (error) {
    console.error("Failed to load import runs:", error);
    state.importRuns = [];
    state.importRunsError = formatSupabaseError(error);
  } finally {
    state.importRunsLoading = false;
    state.importRunsLoaded = true;
    render();
  }
}

async function loadAdminReports() {
  if (!supabaseClient || !state.isAdmin) {
    state.adminReports = [];
    state.adminReportsLoaded = true;
    return;
  }

  state.adminReportsLoading = true;
  state.adminReportsError = null;
  render();

  try {
    const { data, error } = await supabaseClient
      .from("reports")
      .select(`
        id,
        title,
        company_id,
        period_start,
        period_end,
        status,
        created_at,
        companies (
          company_name
        ),
        report_items (
          id
        )
      `)
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) throw error;
    state.adminReports = data || [];
    state.adminReportsLoaded = true;
  } catch (error) {
    console.error("Failed to load admin reports:", error);
    state.adminReports = [];
    state.adminReportsError = formatSupabaseError(error);
  } finally {
    state.adminReportsLoading = false;
    state.adminReportsLoaded = true;
    render();
  }
}

async function loadSourceCoverageForAdmin() {
  if (!supabaseClient || !state.isAdmin) {
    state.sourceCoverage = [];
    state.sourceCoverageLoaded = true;
    return;
  }

  state.sourceCoverageLoading = true;
  state.sourceCoverageError = null;
  render();

  try {
    const { data, error } = await supabaseClient
      .from("sources")
      .select(`
        id,
        name,
        source_type,
        base_url,
        is_active,
        notes,
        source_status (
          status,
          last_checked_at,
          last_success_at,
          last_error,
          fetched_count,
          inserted_count,
          updated_count,
          active_opportunities_count
        ),
        source_connectors (
          connector_type,
          endpoint_url,
          enabled,
          include_keywords,
          exclude_keywords,
          require_any_keyword,
          status,
          last_checked_at,
          last_success_at,
          last_error,
          notes
        )
      `)
      .order("name", { ascending: true });

    if (error) throw error;
    state.sourceCoverage = (data || []).map((source) => ({
      ...source,
      source_status: Array.isArray(source.source_status) ? source.source_status[0] : source.source_status,
      source_connectors: Array.isArray(source.source_connectors) ? source.source_connectors[0] : source.source_connectors
    }));
    state.sourceCoverageLoaded = true;
  } catch (error) {
    console.error("Failed to load source coverage:", error);
    state.sourceCoverage = [];
    state.sourceCoverageError = formatSupabaseError(error);
  } finally {
    state.sourceCoverageLoading = false;
    state.sourceCoverageLoaded = true;
    render();
  }
}

async function loadAdminCompanies() {
  if (!supabaseClient || !state.isAdmin) {
    state.adminCompanies = [];
    state.adminCompaniesLoaded = true;
    return;
  }

  state.adminCompaniesLoading = true;
  state.adminCompaniesError = null;
  render();

  try {
    const { data: companies, error } = await supabaseClient
      .from("companies")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const companyRows = companies || [];
    const companyIds = companyRows.map((company) => company.id).filter(Boolean);
    let services = [];
    let locations = [];
    let keywords = [];
    let matches = [];
    let reports = [];

    if (companyIds.length) {
      const [servicesResult, locationsResult, keywordsResult, matchesResult, reportsResult] = await Promise.all([
        supabaseClient.from("company_services").select("company_id, service").in("company_id", companyIds),
        supabaseClient.from("company_locations").select("company_id, location").in("company_id", companyIds),
        supabaseClient.from("company_keywords").select("company_id, keyword, type").in("company_id", companyIds),
        supabaseClient.from("opportunity_matches").select("company_id, opportunity_id, match_score, match_label, opportunities(title, buyer, source_id, sources(name))").in("company_id", companyIds),
        supabaseClient.from("reports").select("id, company_id, title, created_at, period_start, period_end, status").in("company_id", companyIds).order("created_at", { ascending: false })
      ]);

      services = servicesResult.error ? [] : servicesResult.data || [];
      locations = locationsResult.error ? [] : locationsResult.data || [];
      keywords = keywordsResult.error ? [] : keywordsResult.data || [];
      matches = matchesResult.error ? [] : matchesResult.data || [];
      reports = reportsResult.error ? [] : reportsResult.data || [];
    }

    state.adminCompanies = companyRows.map((company) => mapAdminCompany(company, {
      services: services.filter((row) => row.company_id === company.id),
      locations: locations.filter((row) => row.company_id === company.id),
      keywords: keywords.filter((row) => row.company_id === company.id),
      matches: matches.filter((row) => row.company_id === company.id),
      reports: reports.filter((row) => row.company_id === company.id)
    }));
    state.adminCompaniesLoaded = true;
  } catch (error) {
    console.error("Failed to load admin companies:", error);
    state.adminCompanies = [];
    state.adminCompaniesError = formatSupabaseError(error);
  } finally {
    state.adminCompaniesLoading = false;
    state.adminCompaniesLoaded = true;
    render();
  }
}

function mapAdminCompany(company, related) {
  const services = cleanStringArray((related.services || []).map((row) => row.service));
  const locations = cleanStringArray((related.locations || []).map((row) => row.location));
  const includeKeywords = cleanStringArray((related.keywords || []).filter((row) => row.type === "include").map((row) => row.keyword));
  const excludeKeywords = cleanStringArray((related.keywords || []).filter((row) => row.type === "exclude").map((row) => row.keyword));
  const reports = related.reports || [];
  const matches = related.matches || [];
  const complete = Boolean(company.company_name && company.contact_email && company.industry && services.length && (locations.length || company.base_location || cleanStringArray(company.service_areas).length));

  return {
    id: company.id,
    ownerId: company.owner_id || "",
    companyName: company.company_name || "Unnamed company",
    contactEmail: company.contact_email || "",
    website: company.website || "",
    industry: company.industry || "",
    plan: company.plan || company.subscription_plan || "Demo",
    profileStatus: complete ? "Complete" : "Incomplete",
    createdAt: company.created_at,
    services,
    locations,
    includeKeywords,
    excludeKeywords,
    baseLocation: company.base_location || "",
    serviceAreas: cleanStringArray(company.service_areas),
    willingToTravel: Boolean(company.willing_to_travel),
    nationalProjects: Boolean(company.national_projects),
    remoteProjects: Boolean(company.remote_projects),
    minimumProjectValueForTravel: company.minimum_project_value_for_travel,
    minProjectValue: company.min_project_value,
    maxProjectValue: company.max_project_value,
    allowUnknownValue: Boolean(company.allow_unknown_value),
    includeLowConfidence: Boolean(company.include_low_confidence),
    reportFrequency: company.report_frequency || "weekly",
    reportDay: company.report_day || "monday",
    deadlineReminders: Boolean(company.deadline_reminders),
    matchCount: matches.length,
    savedCount: 0,
    latestReportDate: reports[0]?.created_at || "",
    latestMatches: matches.slice(0, 8),
    latestReports: reports.slice(0, 5)
  };
}

async function refreshAdminOperationsData() {
  if (!state.isAdmin) return;
  await Promise.all([
    loadImportRunsForAdmin(),
    loadNewestImportedTedOpportunities(),
    loadAdminReports(),
    loadSourceCoverageForAdmin(),
    loadAdminCompanies()
  ]);
  showToast("Automation status refreshed", "success");
  render();
}

function mapSupabaseOpportunity(row) {
  const rawPayload = row.raw_payload && typeof row.raw_payload === "object" ? row.raw_payload : {};
  const qualityStatus = normalizeOpportunityQualityStatus(rawPayload.quality_status || rawPayload.qualityStatus, {
    source: row.sources?.name || "",
    sourceType: row.sources?.source_type || "",
    title: row.title || "",
    description: row.description || ""
  });
  return {
    id: row.id,
    externalId: row.external_id || "",
    countryCode: row.country_code || "",
    title: row.title,
    buyer: row.buyer || "Unknown buyer",
    source: row.sources?.name || "Supabase",
    sourceType: row.sources?.source_type || "",
    category: row.category || "Other",
    type: row.type || "tender",
    description: row.description || "",
    deadline: row.deadline,
    publishedDate: row.published_date,
    createdAt: row.created_at,
    location: row.location || "Unknown",
    estimatedValue: row.estimated_value,
    currency: row.currency || "ISK",
    url: row.url || "",
    cpvCode: row.cpv_code || "",
    requirements: Array.isArray(row.requirements) ? row.requirements : [],
    keywords: Array.isArray(row.keywords) ? row.keywords : [],
    difficulty: row.difficulty || "medium",
    status: row.status || "open",
    qualityStatus,
    rawPayload
  };
}

function mapStoredMatch(row) {
  const opp = mapSupabaseOpportunity(row.opportunities || {});
  return {
    ...opp,
    matchScore: Number(row.match_score || 0),
    matchLabel: row.match_label || getMatchLabel(Number(row.match_score || 0)),
    matchReasons: sanitizeMatchReasons(opp, Array.isArray(row.match_reasons) ? row.match_reasons : []),
    risks: Array.isArray(row.risks) ? row.risks : [],
    nextSteps: Array.isArray(row.next_steps) ? row.next_steps : []
  };
}

function isDashboardVisibleOpportunity(opp) {
  if (!opp || opp.status !== "open") return false;
  if (!opp.url || opp.url === "#") return false;
  if (daysUntilDeadline(opp.deadline) < 0) return false;
  if (isDemoTestOpportunity(opp)) return false;
  if (!isTedOpportunity(opp)) return true;
  const country = getOpportunityCountryCode(opp);
  return ["IS", "NO", "DK", "SE", "FI"].includes(country);
}

function isDemoTestOpportunity(opp) {
  const source = normalizeLocationText(opp?.source || "");
  const title = normalizeLocationText(opp?.title || "");
  const externalId = normalizeLocationText(opp?.externalId || "");
  const sourceType = normalizeLocationText(opp?.sourceType || "");
  const haystack = `${source} ${title} ${externalId} ${sourceType}`;

  if (source === "manual test") return true;
  if (source.includes("manual test")) return true;
  if (/\b(demo|test|sample|mock|fake)\b/.test(haystack)) return true;
  if (title.includes("manual test")) return true;
  if (title.includes("municipal websites example")) return true;
  if (externalId.includes("demo") || externalId.includes("test")) return true;
  return false;
}

function normalizeOpportunityQualityStatus(status, opp = {}) {
  const value = String(status || "").toLowerCase();
  if (value === "confirmed_tender" || value === "early_signal" || value === "needs_review") return value;
  if (value === "likely_opportunity" || value === "verified") return "confirmed_tender";

  const text = getOpportunityQualityText(opp);
  if (containsConfirmedTenderIntent(text)) return "confirmed_tender";
  if (containsEarlySignalIntent(text)) return "early_signal";
  if (containsObviousNewsIntent(text)) return "needs_review";
  if (isTedOpportunity(opp)) return "confirmed_tender";
  return "confirmed_tender";
}

function getOpportunityQualityText(opp) {
  return normalizeLocationText([
    opp?.title,
    opp?.description,
    opp?.category,
    opp?.source,
    ...(Array.isArray(opp?.keywords) ? opp.keywords : [])
  ].filter(Boolean).join(" "));
}

function containsAnyNormalizedPhrase(text, phrases) {
  const normalized = normalizeLocationText(text);
  return phrases.some((phrase) => normalized.includes(normalizeLocationText(phrase)));
}

function containsConfirmedTenderIntent(text) {
  return containsAnyNormalizedPhrase(text, [
    "útboð",
    "utbod",
    "senn í útboð",
    "senn i utbod",
    "tilboð",
    "tilboðum",
    "tilbod",
    "tilbodum",
    "óskað eftir tilboðum",
    "oskad eftir tilbodum",
    "verðfyrirspurn",
    "verdfyrirspurn",
    "innkaup",
    "rammasamningur",
    "útboðsauglýsing"
  ]);
}

function containsEarlySignalIntent(text) {
  return containsAnyNormalizedPhrase(text, [
    "áætlaðar framkvæmdir",
    "aaetladar framkvaemdir",
    "fyrirhugaðar framkvæmdir",
    "fyrirhugadar framkvaemdir",
    "framkvæmdir hefjast",
    "framkvaemdir hefjast",
    "malbikunarframkvæmdir",
    "malbikunarframkvaemdir",
    "vegaframkvæmdir",
    "vegaframkvaemdir",
    "framkvæmdir við",
    "framkvaemdir vid",
    "senn"
  ]);
}

function containsObviousNewsIntent(text) {
  return containsAnyNormalizedPhrase(text, [
    "lokun",
    "lokanir",
    "umferð",
    "umferd",
    "dagskrá",
    "dagskra",
    "skráning",
    "skraning",
    "myndband",
    "ráðstefna",
    "radstefna",
    "kynnt",
    "styrkur",
    "frétt",
    "frett",
    "viðburður",
    "vidburdur"
  ]);
}

function getOpportunityCountryCode(opp) {
  const direct = normalizeCountryCode(opp.countryCode);
  if (direct) return direct;

  const location = String(opp.location || "");
  const normalized = normalizeLocationText(location);
  if (
    normalized.includes("iceland") ||
    normalized.includes("island") ||
    normalized.includes("reykjavik") ||
    normalized.includes("capital area") ||
    normalized.includes("hofudborgarsvaedid") ||
    normalized.includes("east iceland") ||
    normalized.includes("west iceland") ||
    normalized.includes("north iceland") ||
    normalized.includes("south iceland") ||
    normalized.includes("sudurnes")
  ) return "IS";
  if (normalized.includes("norway")) return "NO";
  if (normalized.includes("denmark")) return "DK";
  if (normalized.includes("sweden")) return "SE";
  if (normalized.includes("finland")) return "FI";
  return "";
}

function normalizeCountryCode(value) {
  const normalized = String(value || "").trim().toUpperCase();
  const aliases = {
    IS: "IS",
    ISL: "IS",
    ICELAND: "IS",
    ÍSLAND: "IS",
    NO: "NO",
    NOR: "NO",
    NORWAY: "NO",
    DK: "DK",
    DNK: "DK",
    DENMARK: "DK",
    SE: "SE",
    SWE: "SE",
    SWEDEN: "SE",
    FI: "FI",
    FIN: "FI",
    FINLAND: "FI",
  };
  return aliases[normalized] || "";
}

function sanitizeMatchReasons(opp, reasons) {
  if (isIcelandicOpportunity(opp)) return reasons;
  return reasons.filter((reason) => !/^Located in your selected region:/i.test(String(reason || "")));
}

function clearAuthForm() {
  state.authForm = {
    email: "",
    password: ""
  };
}

function getTedImportEndpoint() {
  if (window.VERKRADAR_TED_IMPORT_URL) return window.VERKRADAR_TED_IMPORT_URL;
  if (window.VERKRADAR_SUPABASE_URL) return `${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-ted`;
  if (SUPABASE_URL) return `${SUPABASE_URL}/functions/v1/import-ted`;
  return null;
}

function getSourceConnectorImportEndpoint() {
  if (window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL) return window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL;
  if (window.VERKRADAR_SUPABASE_URL) return `${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-source-connectors`;
  if (SUPABASE_URL) return `${SUPABASE_URL}/functions/v1/import-source-connectors`;
  return null;
}

async function importTedNotices() {
  if (!state.isAdmin) {
    state.importStatus = { errors: ["You do not have access to import TED notices."] };
    render();
    return;
  }

  const endpoint = getTedImportEndpoint();
  if (!endpoint) {
    state.importStatus = {
      errors: ["TED importer is not configured. Set window.VERKRADAR_TED_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment."],
    };
    render();
    return;
  }

  state.importLoading = true;
  state.importStatus = null;
  state.importedTedOpportunities = [];
  render();

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: await getTedImportHeaders(),
      body: JSON.stringify({ limit: 50, importMode: state.tedImportMode }),
    });
    const payload = await response.json();
    state.importStatus = response.ok ? payload : { ...payload, errors: payload.errors || [`Import failed with status ${response.status}`] };
    if (response.ok) {
      await loadOpportunities();
      const matchedCount = state.companyId ? await runMatchingForCurrentCompany() : Number(payload.matched || 0);
      await loadNewestImportedTedOpportunities();
      if (state.isAdmin) {
        await loadImportRunsForAdmin();
        await loadAdminReports();
      }
      state.importStatus = { ...state.importStatus, matched: matchedCount };
      showToast("TED import completed", "success");
    }
  } catch (error) {
    state.importStatus = { errors: [error instanceof Error ? error.message : String(error)] };
  } finally {
    state.importLoading = false;
    render();
  }
}

async function importSourceConnectors(sourceId = "") {
  if (!state.isAdmin) {
    state.connectorImportStatus = { errors: ["You do not have access to run source imports."] };
    render();
    return;
  }

  const endpoint = getSourceConnectorImportEndpoint();
  if (!endpoint) {
    state.connectorImportStatus = {
      errors: ["Source connector importer is not configured. Set window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment."],
    };
    render();
    return;
  }

  state.connectorImportLoading = !sourceId;
  state.connectorTestingSourceId = sourceId || null;
  state.connectorImportStatus = null;
  render();

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: await getTedImportHeaders(),
      body: JSON.stringify({ limit: 50, sourceId: sourceId || undefined }),
    });
    const payload = await response.json();
    state.connectorImportStatus = response.ok ? payload : { ...payload, errors: payload.errors || [`Source import failed with status ${response.status}`] };
    if (response.ok) {
      await loadOpportunities();
      await refreshAdminOperationsData();
      showToast(sourceId ? "Source test completed" : "Automatic source imports completed", "success");
    }
  } catch (error) {
    state.connectorImportStatus = { errors: [error instanceof Error ? error.message : String(error)] };
  } finally {
    state.connectorImportLoading = false;
    state.connectorTestingSourceId = null;
    render();
  }
}

async function loadNewestImportedTedOpportunities() {
  if (!supabaseClient) {
    state.importedTedOpportunities = [];
    state.importedTedOpportunitiesLoaded = true;
    return;
  }

  state.importedTedOpportunitiesLoading = true;
  state.importedTedOpportunitiesError = null;

  try {
    const { data: sources, error: sourceError } = await supabaseClient
      .from("sources")
      .select("id, name")
      .in("name", ["TED Iceland/Nordic", "EU TED", "Tenders Electronic Daily"]);

    if (sourceError) throw sourceError;

    const sourceIds = (sources || []).map((source) => source.id).filter(Boolean);
    if (!sourceIds.length) {
      state.importedTedOpportunities = [];
      return;
    }

    const { data, error } = await supabaseClient
      .from("opportunities")
      .select("*, sources(name, source_type)")
      .in("source_id", sourceIds)
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) throw error;
    state.importedTedOpportunities = (data || []).map(mapSupabaseOpportunity);
  } catch (error) {
    console.error("Failed to load latest TED opportunities:", error);
    state.importedTedOpportunities = [];
    state.importedTedOpportunitiesError = formatSupabaseError(error);
  } finally {
    state.importedTedOpportunitiesLoading = false;
    state.importedTedOpportunitiesLoaded = true;
  }
}

async function getTedImportHeaders() {
  const headers = { "content-type": "application/json" };
  const anonKey = window.VERKRADAR_SUPABASE_ANON_KEY || SUPABASE_ANON_KEY;
  if (anonKey && anonKey !== "PASTE_MY_ANON_PUBLIC_KEY_HERE") {
    headers.apikey = anonKey;
  }

  const { data, error } = supabaseClient
    ? await supabaseClient.auth.getSession()
    : { data: { session: null }, error: null };
  if (error) throw error;
  const accessToken = data.session?.access_token;
  if (!accessToken) {
    throw new Error("You must be logged in to import TED notices.");
  }

  headers.authorization = `Bearer ${accessToken}`;
  return headers;
}

function getAuthRedirectUrl() {
  return window.location.origin;
}

async function signUp(email, password) {
  state.authSubmitting = true;
  state.authMessage = null;
  render();

  try {
    if (!supabaseClient) throw new Error("Supabase client is not configured.");
    const { data, error } = await supabaseClient.auth.signUp({
      email: String(email || "").trim(),
      password: String(password || ""),
      options: {
        emailRedirectTo: getAuthRedirectUrl()
      }
    });
    if (error) throw error;
    clearLocalProfileState();
    if (!data.session?.user) {
      state.user = null;
      state.authMessage = { type: "success", text: "Account created. Check your email to confirm your account." };
      clearAuthForm();
      render();
      return;
    }
    state.user = data.session.user;
    state.currentUser = state.user;
    state.profileDraft = null;
    state.profileDraftDirty = false;
    await checkAdminAccess(state.user);
    state.authMessage = { type: "success", text: "Account created." };
    await loadProfileFromSupabase({ overwriteDraft: true });
    clearAuthForm();
    navigate(getPostAuthRoute());
  } catch (error) {
    console.error("Signup failed:", error);
    state.authMessage = { type: "error", text: formatAuthError(error, "signup") };
    render();
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function signIn(email, password) {
  state.authSubmitting = true;
  state.authMessage = null;
  render();

  try {
    if (!supabaseClient) throw new Error("Supabase client is not configured.");
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: String(email || "").trim(),
      password: String(password || "")
    });
    if (error) throw error;
    state.user = data.user || await getCurrentUser();
    state.currentUser = state.user;
    state.profileDraft = null;
    state.profileDraftDirty = false;
    await checkAdminAccess(state.user);
    await loadProfileFromSupabase({ overwriteDraft: true });
    clearAuthForm();
    navigate(getPostAuthRoute());
  } catch (error) {
    console.error("Login failed:", error);
    state.authMessage = { type: "error", text: formatAuthError(error, "login") };
    render();
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function signOut() {
  try {
    if (supabaseClient) {
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;
    }
  } catch (error) {
    console.error("Logout failed:", error);
  } finally {
    state.user = null;
    state.currentUser = null;
    state.isAdmin = false;
    state.authLoaded = true;
    state.adminLoaded = true;
    state.profileLoaded = true;
    clearLocalProfileState();
    navigate("/");
    render();
  }
}

async function getCurrentUser() {
  if (!supabaseClient) return null;
  const { data, error } = await supabaseClient.auth.getUser();
  if (error) {
    console.error("Failed to get current user:", error);
    return null;
  }
  return data.user || null;
}

async function checkAdminAccess(user = state.user) {
  if (!supabaseClient || !user) {
    state.isAdmin = false;
    return false;
  }

  try {
    const { data, error } = await supabaseClient
      .from("admin_users")
      .select("user_id")
      .eq("user_id", user.id)
      .maybeSingle();

    if (error) throw error;
    state.isAdmin = Boolean(data?.user_id);
    return state.isAdmin;
  } catch (error) {
    console.error("Failed to check admin access:", error);
    state.isAdmin = false;
    return false;
  }
}

function requireAuthPage() {
  return renderShell(`
    <section class="empty-state">
      <h1>Log in to continue</h1>
      <p>This page is available after you sign in.</p>
      <button class="btn btn-primary" data-action="go" data-href="/login">Login</button>
      <button class="btn btn-secondary" data-action="go" data-href="/signup">Create account</button>
    </section>
  `);
}

function requireAdminPage() {
  return renderShell(`
    <section class="empty-state">
      <h1>You do not have access to this page.</h1>
      <p>Admin access is limited to approved VerkRadar admin users.</p>
    </section>
  `);
}

let hasBooted = false;
let authListenerRegistered = false;

async function loadCurrentSession() {
  if (!supabaseClient) {
    state.user = null;
    state.currentUser = null;
    return null;
  }

  const { data, error } = await supabaseClient.auth.getSession();
  if (error) throw error;
  state.user = data.session?.user || null;
  state.currentUser = state.user;
  return state.user;
}

async function checkAdminStatus() {
  state.adminLoaded = false;
  await checkAdminAccess(state.currentUser || state.user);
  state.adminLoaded = true;
}

async function loadProfileFromSupabase(options = {}) {
  const { overwriteDraft = false, showGlobalLoading = false } = options;
  const shouldShowGlobalLoading = showGlobalLoading || (!state.profile && !state.profileDraftDirty);
  if (shouldShowGlobalLoading) state.profileLoaded = false;
  state.profileLoading = true;
  state.profileLoadError = null;

  try {
    await withTimeout(
      loadCompanyProfile({ overwriteDraft }),
      PROFILE_LOAD_TIMEOUT_MS,
      "Profile loading took too long. Please retry."
    );
  } catch (error) {
    console.error("Failed to load profile from Supabase:", error);
    state.profileLoadError = formatSupabaseError(error);
  } finally {
    state.profileLoading = false;
    state.profileLoaded = true;
  }
}

function withTimeout(promise, timeoutMs, message) {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error(message)), timeoutMs);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timeoutId));
}

async function retrySettingsProfileLoad() {
  if (state.isSavingProfile) return;
  state.profileLoadError = null;
  state.profileLoading = true;
  render();
  try {
    await loadProfileFromSupabase({ overwriteDraft: true });
  } catch (error) {
    console.error("Settings profile retry failed:", error);
    state.profileLoadError = formatSupabaseError(error);
  } finally {
    state.profileLoading = false;
    state.profileLoaded = true;
    render();
    afterRouteRender();
  }
}

function registerAuthListener() {
  if (!supabaseClient || authListenerRegistered) return;
  authListenerRegistered = true;

  supabaseClient.auth.onAuthStateChange(async (event, session) => {
    if (!hasBooted) return;

    state.user = session?.user || null;
    state.currentUser = state.user;

    if (state.user) {
      try {
        await checkAdminStatus();
        if (!(state.route === "/settings" && state.profileDraftDirty)) {
          await loadProfileFromSupabase();
        } else {
          state.profileLoaded = true;
        }
      } catch (error) {
        console.error("Auth profile refresh failed:", error);
        state.profileLoadError = formatSupabaseError(error);
        state.adminLoaded = true;
        state.profileLoaded = true;
      }
      if (redirectAuthenticatedPublicRoute()) return;
      render();
      afterRouteRender();
      return;
    }

    state.isAdmin = false;
    state.profile = null;
    state.profileDraft = null;
    state.profileDraftDirty = false;
    state.profileLoading = false;
    state.profileLoadError = null;
    state.companyId = null;
    state.storedMatches = [];
    state.reports = [];
    state.reportsLoaded = false;
    state.reportsLoadError = null;
    state.selectedReportId = null;
    state.authLoaded = true;
    state.adminLoaded = true;
    state.profileLoaded = true;
    if (event === "SIGNED_OUT") navigate("/");
    render();
    afterRouteRender();
  });
}

async function bootApp() {
  state.isBooting = true;
  state.authLoaded = false;
  state.profileLoaded = false;
  state.adminLoaded = false;
  state.bootError = null;
  render();

  try {
    registerAuthListener();
    await loadCurrentSession();
    state.authLoaded = true;

    if (state.currentUser) {
      await checkAdminStatus();
      await loadProfileFromSupabase({ overwriteDraft: true, showGlobalLoading: true });
    } else {
      state.profile = null;
      state.profileDraft = null;
      state.profileDraftDirty = false;
      state.profileLoading = false;
      state.profileLoadError = null;
      state.companyId = null;
      state.isAdmin = false;
      state.adminLoaded = true;
      state.profileLoaded = true;
    }
  } catch (error) {
    console.error("Boot failed:", error);
    state.bootError = formatSupabaseError(error);
    state.authLoaded = true;
    state.adminLoaded = true;
    state.profileLoaded = true;
  } finally {
    state.authLoading = false;
    state.isBooting = false;
    hasBooted = true;
    redirectAuthenticatedPublicRoute({ replace: true });
    render();
    afterRouteRender();
  }
}

async function loadCompanyProfile(options = {}) {
  const { overwriteDraft = false } = options;
  if (!supabaseClient || !state.user) {
    state.profile = null;
    if (overwriteDraft || !state.profileDraftDirty) state.profileDraft = null;
    render();
    return;
  }

  try {
    const { data: company, error } = await supabaseClient
      .from("companies")
      .select("*")
      .eq("owner_id", state.user.id)
      .maybeSingle();

    if (error) throw error;
    if (!company) {
      state.companyId = null;
      state.storedMatches = [];
      state.reports = [];
      state.reportsLoaded = false;
      state.reportsLoadError = null;
      state.selectedReportId = null;
      state.profile = null;
      if (overwriteDraft || !state.profileDraftDirty) state.profileDraft = null;
      state.profileLoadError = null;
      render();
      afterRouteRender();
      return;
    }

    if (state.profileDraftDirty && state.companyId && state.companyId !== company.id && !overwriteDraft) {
      const shouldSwitch = window.confirm("You have unsaved profile changes. Switch company profile and discard those edits?");
      if (!shouldSwitch) {
        state.profileLoadError = "Unsaved changes were kept. Save or reload before switching company profiles.";
        render();
        afterRouteRender();
        return;
      }
      state.profileDraftDirty = false;
    }

    const [servicesResult, locationsResult, keywordsResult] = await Promise.all([
      supabaseClient.from("company_services").select("service").eq("company_id", company.id),
      supabaseClient.from("company_locations").select("location").eq("company_id", company.id),
      supabaseClient.from("company_keywords").select("keyword, type").eq("company_id", company.id)
    ]);

    if (servicesResult.error) throw servicesResult.error;
    if (locationsResult.error) throw locationsResult.error;
    if (keywordsResult.error) throw keywordsResult.error;

    if (state.companyId !== company.id) {
      state.reports = [];
      state.reportsLoaded = false;
      state.reportsLoadError = null;
      state.selectedReportId = null;
    }
    state.companyId = company.id;
    const loadedProfile = mapSupabaseCompanyProfile(
      company,
      servicesResult.data || [],
      locationsResult.data || [],
      keywordsResult.data || []
    );
    state.profile = loadedProfile;
    if (overwriteDraft || !state.profileDraftDirty) {
      replaceProfileDraftFromProfile(loadedProfile);
    }
    state.profileLoadError = null;
    saveProfile(state.profile);
    await loadStoredMatchesForCurrentCompany();
    render();
    afterRouteRender();
  } catch (error) {
    console.error("Failed to load Supabase company profile:", error);
    state.profileLoadError = formatSupabaseError(error);
    if (!state.profileDraftDirty) {
      state.companyId = null;
      state.storedMatches = [];
      state.reports = [];
      state.reportsLoaded = false;
      state.reportsLoadError = null;
      state.selectedReportId = null;
      state.profile = null;
    }
    if (!state.profileDraftDirty) state.profileDraft = null;
    render();
    afterRouteRender();
  }
}

async function saveCompanyProfile(profile) {
  if (!supabaseClient) {
    throw new Error("Supabase client is not configured.");
  }
  const cleanProfile = {
    ...profile,
    companyName: String(profile.companyName || "").trim(),
    contactEmail: String(profile.contactEmail || "").trim(),
    website: String(profile.website || "").trim(),
    industry: String(profile.industry || "").trim(),
    services: cleanStringArray(profile.services),
    locations: cleanStringArray(profile.locations),
    includeKeywords: cleanStringArray(profile.includeKeywords),
    excludeKeywords: cleanStringArray(profile.excludeKeywords),
    baseLocation: String(profile.baseLocation || "").trim(),
    serviceAreas: cleanStringArray(profile.serviceAreas),
    willingToTravel: Boolean(profile.willingToTravel),
    nationalProjects: Boolean(profile.nationalProjects),
    remoteProjects: Boolean(profile.remoteProjects),
    minimumProjectValueForTravel: nullableNumber(profile.minimumProjectValueForTravel),
    minProjectValue: nullableNumber(profile.minProjectValue),
    maxProjectValue: nullableNumber(profile.maxProjectValue),
    allowUnknownValue: Boolean(profile.allowUnknownValue),
    reportFrequency: profile.reportFrequency || "weekly",
    reportDay: profile.reportDay || "monday",
    deadlineReminders: Boolean(profile.deadlineReminders),
    includeLowConfidence: Boolean(profile.includeLowConfidence)
  };
  const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
  if (userError) throw userError;
  if (!user) {
    throw new Error("You must be logged in to save a company profile.");
  }
  state.user = user;

  const { data: company, error: companyError } = await supabaseClient
    .from("companies")
    .upsert({
      owner_id: user.id,
      company_name: cleanProfile.companyName,
      contact_email: cleanProfile.contactEmail || user.email,
      website: cleanProfile.website || null,
      industry: cleanProfile.industry,
      base_location: cleanProfile.baseLocation || null,
      service_areas: cleanProfile.serviceAreas,
      willing_to_travel: cleanProfile.willingToTravel,
      national_projects: cleanProfile.nationalProjects,
      remote_projects: cleanProfile.remoteProjects,
      minimum_project_value_for_travel: cleanProfile.minimumProjectValueForTravel,
      min_project_value: cleanProfile.minProjectValue,
      max_project_value: cleanProfile.maxProjectValue,
      allow_unknown_value: cleanProfile.allowUnknownValue,
      report_frequency: cleanProfile.reportFrequency,
      report_day: cleanProfile.reportDay,
      deadline_reminders: cleanProfile.deadlineReminders,
      include_low_confidence: cleanProfile.includeLowConfidence
    }, { onConflict: "owner_id" })
    .select()
    .single();

  if (companyError) {
    console.error("Company upsert error:", companyError);
    throw companyError;
  }
  if (state.companyId !== company.id) {
    state.reports = [];
    state.reportsLoaded = false;
    state.reportsLoadError = null;
    state.selectedReportId = null;
  }
  state.companyId = company.id;

  const deleteResults = await Promise.all([
    supabaseClient.from("company_services").delete().eq("company_id", company.id),
    supabaseClient.from("company_locations").delete().eq("company_id", company.id),
    supabaseClient.from("company_keywords").delete().eq("company_id", company.id)
  ]);
  const deleteError = deleteResults.find((result) => result.error)?.error;
  if (deleteError) throw deleteError;

  const serviceRows = cleanProfile.services
    .map((service) => ({
      company_id: company.id,
      service
    }));
  const locationRows = cleanProfile.locations
    .map((location) => ({
      company_id: company.id,
      location
    }));
  const keywordRows = [
    ...cleanProfile.includeKeywords.map((keyword) => ({
      company_id: company.id,
      keyword,
      type: "include"
    })),
    ...cleanProfile.excludeKeywords.map((keyword) => ({
      company_id: company.id,
      keyword,
      type: "exclude"
    }))
  ];

  if (serviceRows.length) {
    const { error } = await supabaseClient.from("company_services").insert(serviceRows);
    if (error) throw error;
  }
  if (locationRows.length) {
    const { error } = await supabaseClient.from("company_locations").insert(locationRows);
    if (error) throw error;
  }
  if (keywordRows.length) {
    const { error } = await supabaseClient.from("company_keywords").insert(keywordRows);
    if (error) throw error;
  }

  state.profile = cleanProfile;
  saveProfile(cleanProfile);
}

function mapSupabaseCompanyProfile(company, services, locations, keywords) {
  return {
    companyName: company.company_name || "",
    contactEmail: company.contact_email || "",
    website: company.website || "",
    industry: company.industry || "",
    services: cleanStringArray(services.map((row) => row.service)),
    includeKeywords: cleanStringArray(keywords.filter((row) => row.type === "include").map((row) => row.keyword)),
    excludeKeywords: cleanStringArray(keywords.filter((row) => row.type === "exclude").map((row) => row.keyword)),
    locations: cleanStringArray(locations.map((row) => row.location)),
    baseLocation: company.base_location || "",
    serviceAreas: cleanStringArray(company.service_areas),
    willingToTravel: Boolean(company.willing_to_travel),
    nationalProjects: Boolean(company.national_projects),
    remoteProjects: Boolean(company.remote_projects),
    minimumProjectValueForTravel: company.minimum_project_value_for_travel == null ? null : Number(company.minimum_project_value_for_travel),
    minProjectValue: company.min_project_value == null ? null : Number(company.min_project_value),
    maxProjectValue: company.max_project_value == null ? null : Number(company.max_project_value),
    allowUnknownValue: Boolean(company.allow_unknown_value),
    reportFrequency: company.report_frequency || "weekly",
    reportDay: company.report_day || "monday",
    deadlineReminders: Boolean(company.deadline_reminders),
    includeLowConfidence: Boolean(company.include_low_confidence)
  };
}

async function loadStoredMatchesForCurrentCompany() {
  if (!supabaseClient || !state.companyId) {
    state.storedMatches = [];
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from("opportunity_matches")
      .select("*, opportunities(*, sources(name, source_type))")
      .eq("company_id", state.companyId)
      .order("match_score", { ascending: false });

    if (error) throw error;
    const matchedAtValues = (data || [])
      .map((row) => row.calculated_at || row.updated_at || row.created_at)
      .filter(Boolean)
      .map((value) => new Date(value).getTime())
      .filter((value) => !Number.isNaN(value));
    state.lastMatchedAt = matchedAtValues.length
      ? new Date(Math.max(...matchedAtValues)).toISOString()
      : null;
    state.storedMatches = (data || [])
      .filter((row) => row.opportunities)
      .map(mapStoredMatch)
      .filter(isDashboardVisibleOpportunity);
  } catch (error) {
    console.error("Failed to load stored opportunity matches. Falling back to frontend matching:", error);
    state.storedMatches = [];
    state.lastMatchedAt = null;
  }
}

async function loadReportsForCurrentCompany() {
  if (!state.companyId) return;
  if (state.reportArchiveLoading) return;

  state.reportArchiveLoading = true;
  state.reportsLoadError = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client is not configured.");
    }

    const { data, error } = await supabaseClient
      .from("reports")
      .select(`
        *,
        report_items (
          id,
          opportunity_id,
          match_score,
          sort_order
        )
      `)
      .eq("company_id", state.companyId)
      .order("created_at", { ascending: false });

    if (error) throw error;
    state.reports = data || [];
    state.reportsLoaded = true;
  } catch (error) {
    console.error("Failed to load reports:", error);
    state.reportsLoadError = formatSupabaseError(error);
    state.reports = [];
    state.reportsLoaded = true;
  } finally {
    state.reportArchiveLoading = false;
    render();
  }
}

async function saveCurrentReport() {
  if (!state.user) {
    state.reportMessage = { type: "error", text: "Log in to save reports." };
    render();
    return;
  }
  if (!state.companyId) {
    state.reportMessage = { type: "error", text: "Create a company profile before saving reports." };
    render();
    return;
  }

  const matches = getReportMatches();
  if (!matches.length) {
    state.reportMessage = { type: "error", text: "No useful matches above the report threshold yet." };
    render();
    return;
  }
  const report = buildReportContent(state.profile, matches);
  state.reportSaveLoading = true;
  state.reportMessage = null;
  render();

  try {
    const { data: savedReport, error: reportError } = await supabaseClient
      .from("reports")
      .insert({
        company_id: state.companyId,
        title: report.title,
        period_start: report.periodStart,
        period_end: report.periodEnd,
        summary: report.summary,
        text_content: report.textContent,
        html_content: report.htmlContent,
        status: "draft"
      })
      .select("id")
      .single();

    if (reportError) throw reportError;

    const itemRows = matches
      .filter((opp) => isUuid(opp.id))
      .map((opp, index) => ({
        report_id: savedReport.id,
        opportunity_id: opp.id,
        match_score: opp.matchScore,
        sort_order: index + 1
      }));

    if (itemRows.length) {
      const { error: itemsError } = await supabaseClient.from("report_items").insert(itemRows);
      if (itemsError) throw itemsError;
    }

    state.reportMessage = { type: "success", text: "Report saved" };
    await loadReportsForCurrentCompany();
    showToast("Report saved", "success");
  } catch (error) {
    console.error("Failed to save report:", error);
    state.reportMessage = { type: "error", text: `Failed to save report. ${formatSupabaseError(error)}` };
  } finally {
    state.reportSaveLoading = false;
    render();
  }
}

async function runMatchingForCurrentCompany() {
  state.matchingLoading = true;
  state.matchStatus = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client is not configured.");
    }

    const user = state.user || await getCurrentUser();
    if (!user) throw new Error("You must be logged in to run matching.");
    state.user = user;
    const { data: company, error: companyError } = await supabaseClient
      .from("companies")
      .select("*")
      .eq("owner_id", user.id)
      .maybeSingle();
    if (companyError) throw companyError;
    if (!company) throw new Error("No Supabase company profile found. Save onboarding first.");

    state.companyId = company.id;
    const [servicesResult, locationsResult, keywordsResult, opportunitiesResult] = await Promise.all([
      supabaseClient.from("company_services").select("service").eq("company_id", company.id),
      supabaseClient.from("company_locations").select("location").eq("company_id", company.id),
      supabaseClient.from("company_keywords").select("keyword, type").eq("company_id", company.id),
      supabaseClient.from("opportunities").select("*, sources(name, source_type)").eq("status", "open")
    ]);

    if (servicesResult.error) throw servicesResult.error;
    if (locationsResult.error) throw locationsResult.error;
    if (keywordsResult.error) throw keywordsResult.error;
    if (opportunitiesResult.error) throw opportunitiesResult.error;

    const profile = mapSupabaseCompanyProfile(
      company,
      servicesResult.data || [],
      locationsResult.data || [],
      keywordsResult.data || []
    );
    const wasDraftDirty = state.profileDraftDirty;
    const matched = (opportunitiesResult.data || [])
      .map(mapSupabaseOpportunity)
      .filter(isDashboardVisibleOpportunity)
      .map((opportunity) => calculateMatch(profile, opportunity))
      .filter((match) => match.matchScore >= 50);

    const rows = matched.map((match) => ({
      company_id: company.id,
      opportunity_id: match.id,
      match_score: match.matchScore,
      match_label: match.matchLabel,
      match_reasons: match.matchReasons,
      risks: match.risks,
      next_steps: match.nextSteps,
      calculated_at: new Date().toISOString()
    }));

    const { error: deleteError } = await supabaseClient
      .from("opportunity_matches")
      .delete()
      .eq("company_id", company.id);
    if (deleteError) throw deleteError;

    if (rows.length) {
      const { error: insertError } = await supabaseClient
        .from("opportunity_matches")
        .insert(rows);
      if (insertError) throw insertError;
    }

    state.profile = profile;
    saveProfile(profile);
    if (!wasDraftDirty) {
      replaceProfileDraftFromProfile(profile);
    }
    const plural = rows.length === 1 ? "match" : "matches";
    state.matchStatus = { type: "success", text: `Matching complete — ${rows.length} stored ${plural} found.` };
    await loadOpportunities();
    await loadStoredMatchesForCurrentCompany();
    return rows.length;
  } catch (error) {
    console.error("Failed to run matching:", error);
    state.matchStatus = { type: "error", text: `Failed to run matching. ${formatSupabaseError(error)}` };
    return 0;
  } finally {
    state.matchingLoading = false;
    render();
  }
}

async function addOpportunity(formData, formElement) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this page." };
    render();
    return;
  }

  state.adminSubmitting = true;
  state.adminMessage = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client is not configured.");
    }

    const values = Object.fromEntries(formData.entries());
    const sourceName = String(values.sourceName || values.source || "Manual").trim() || "Manual";
    const title = String(values.title || "").trim();
    if (!title) throw new Error("Title is required.");

    const sourceId = await getOrCreateSource(sourceName);
    const insertPayload = {
      source_id: sourceId,
      external_id: `manual-${Date.now()}`,
      title: title,
      buyer: String(values.buyer || "").trim() || null,
      category: String(values.category || "").trim() || null,
      type: String(values.type || "").trim() || "tender",
      description: String(values.description || "").trim() || null,
      deadline: values.deadline || null,
      published_date: values.publishedDate || values.published_date || null,
      location: String(values.location || "").trim() || null,
      estimated_value: values.estimatedValue || values.estimated_value ? Number(values.estimatedValue || values.estimated_value) : null,
      currency: "ISK",
      url: values.url || null,
      cpv_code: values.cpvCode || values.cpv_code || null,
      requirements: parseCommaList(values.requirements),
      keywords: parseCommaList(values.keywords),
      difficulty: String(values.difficulty || "").trim() || "medium",
      status: String(values.status || "").trim() || "open",
      raw_payload: {
        created_from: "admin",
        source_name: sourceName
      }
    };

    const { error } = await supabaseClient
      .from("opportunities")
      .insert(insertPayload)
      .select()
      .single();
    if (error) {
      console.error("Supabase insert error:", error);
      throw new Error(`${error.message} (${error.code})`);
    }

    state.adminMessage = { type: "success", text: "Opportunity saved to Supabase." };
    formElement?.reset();
    await loadOpportunities();
    if (state.companyId) await runMatchingForCurrentCompany();
    showToast("Opportunity added", "success");
  } catch (error) {
    const message = formatSupabaseError(error);
    console.error("Failed to add opportunity. If this is an RLS error, allow anon insert/select during development:", error);
    state.adminMessage = { type: "error", text: `Failed to save opportunity. ${message}` };
    render();
  } finally {
    state.adminSubmitting = false;
    render();
  }
}

async function deleteOpportunity(id) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this page." };
    render();
    return;
  }

  state.adminDeletingId = id;
  state.adminMessage = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client is not configured.");
    }

    const { error } = await supabaseClient.from("opportunities").delete().eq("id", id);
    if (error) throw error;

    state.saved = state.saved.filter((savedId) => savedId !== id);
    state.ignored = state.ignored.filter((ignoredId) => ignoredId !== id);
    saveArray(STORAGE_KEYS.saved, state.saved);
    saveArray(STORAGE_KEYS.ignored, state.ignored);
    state.adminMessage = { type: "success", text: "Opportunity deleted from Supabase." };
    await loadOpportunities();
    await loadNewestImportedTedOpportunities();
    showToast("Opportunity deleted", "success");
  } catch (error) {
    const message = formatSupabaseError(error);
    console.error("Failed to delete opportunity. If this is an RLS error, allow anon delete/select during development:", error);
    state.adminMessage = { type: "error", text: `Failed to delete opportunity. ${message}` };
    render();
  } finally {
    state.adminDeletingId = null;
    render();
  }
}

async function updateOpportunityStatus(id, status) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this page." };
    render();
    return;
  }

  state.adminUpdatingId = id;
  state.adminMessage = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client is not configured.");
    }

    const { error } = await supabaseClient
      .from("opportunities")
      .update({ status })
      .eq("id", id);
    if (error) throw error;

    state.adminMessage = { type: "success", text: status === "open" ? "Opportunity marked relevant." : "Opportunity hidden." };
    await loadOpportunities();
    await loadNewestImportedTedOpportunities();
    showToast(status === "open" ? "Marked relevant" : "Opportunity hidden", "success");
  } catch (error) {
    const message = formatSupabaseError(error);
    console.error("Failed to update opportunity status:", error);
    state.adminMessage = { type: "error", text: `Failed to update opportunity. ${message}` };
    render();
  } finally {
    state.adminUpdatingId = null;
    render();
  }
}

async function getOrCreateSource(sourceName) {
  if (!supabaseClient) {
    throw new Error("Supabase client is not configured");
  }

  const cleanName = sourceName && sourceName.trim()
    ? sourceName.trim()
    : "Manual";

  const { data: existing, error: selectError } = await supabaseClient
    .from("sources")
    .select("id")
    .eq("name", cleanName)
    .maybeSingle();

  if (selectError) {
    console.error("Source select error:", selectError);
    throw selectError;
  }

  if (existing && existing.id) {
    return existing.id;
  }

  const { data: created, error: insertError } = await supabaseClient
    .from("sources")
    .insert({
      name: cleanName,
      source_type: "manual",
      is_active: true,
      notes: "Created from VerkRadar admin page"
    })
    .select("id")
    .single();

  if (insertError) {
    console.error("Source insert error:", insertError);
    throw insertError;
  }

  return created.id;
}

function parseCommaList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatSupabaseError(error) {
  if (!error) return "Unknown error";
  if (typeof error === "string") return error;
  return [
    error.message,
    error.details,
    error.hint,
    error.code
  ].filter(Boolean).join(" ");
}

function formatAuthError(error, mode = "login") {
  const message = String(error?.message || error || "").toLowerCase();
  const code = String(error?.code || error?.status || "").toLowerCase();

  if (
    message.includes("invalid login credentials") ||
    message.includes("invalid_credentials") ||
    code.includes("invalid_credentials")
  ) {
    return "Email or password is incorrect.";
  }

  if (message.includes("email not confirmed")) {
    return "Please confirm your email before logging in.";
  }

  if (message.includes("user already registered") || message.includes("already registered")) {
    return "An account with this email already exists. Try logging in instead.";
  }

  if (message.includes("password") && message.includes("characters")) {
    return "Password must be at least 6 characters.";
  }

  if (message.includes("rate limit") || message.includes("too many")) {
    return "Too many attempts. Please wait a moment and try again.";
  }

  if (mode === "signup") {
    return "Could not create account. Please check your email and password.";
  }

  return "Could not log in. Please try again.";
}

function showToast(message, type = "success") {
  state.toast = {
    message,
    type
  };
  render();

  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    state.toast = null;
    render();
  }, 2500);
}

function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.profile);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveProfile(profile) {
  localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
}

function loadArray(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveArray(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function splitInput(value) {
  return String(value || "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function cleanStringArray(value) {
  const values = Array.isArray(value) ? value : splitInput(value);
  return Array.from(new Set(
    values
      .map((item) => String(item || "").trim())
      .filter(Boolean)
  ));
}

function arrayFieldText(value) {
  return cleanStringArray(value).join(", ");
}

function nullableNumber(value) {
  if (value == null || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

const PROFILE_SUGGESTIONS = {
  services: {
    Electrical: [
      "raflagnir",
      "rafvirki",
      "brunakerfi",
      "öryggiskerfi",
      "lýsing",
      "viðhald",
      "þjónusta",
      "hleðslustöðvar",
      "töflusmíði",
      "rafmagnseftirlit"
    ],
    "IT / Web / Software": [
      "vefsíðugerð",
      "vefhönnun",
      "hugbúnaðarþróun",
      "kerfisþróun",
      "vefverslun",
      "aðgengi",
      "CMS",
      "gagnagrunnar",
      "viðhald",
      "ráðgjöf"
    ],
    Cleaning: [
      "Office cleaning",
      "School cleaning",
      "Facility cleaning",
      "Window cleaning",
      "Deep cleaning",
      "Floor care",
      "Municipal cleaning",
      "Regular cleaning contracts"
    ],
    Transport: [
      "Passenger transport",
      "Goods transport",
      "Healthcare transport",
      "School transport",
      "Shuttle services",
      "Delivery services",
      "Framework transport services"
    ],
    Construction: [
      "jarðvinna",
      "gatnagerð",
      "vegagerð",
      "malbikun",
      "brúargerð",
      "lagnavinna",
      "framkvæmdir",
      "viðhald",
      "steypa",
      "húsbyggingar",
      "þakvinna"
    ]
  },
  includeKeywords: {
    Electrical: [
      "rafmagn",
      "rafvirki",
      "brunakerfi",
      "hleðslustöð",
      "öryggiskerfi",
      "myndavélakerfi",
      "lýsing",
      "viðhald",
      "lagnir",
      "neyðarlýsing"
    ]
  }
};

function normalizeSuggestionValue(value) {
  return String(value || "").trim().toLowerCase();
}

function getProfileSuggestions(field, industry = state.profileDraft?.industry) {
  return PROFILE_SUGGESTIONS[field]?.[industry] || [];
}

function toggleProfileSuggestion(field, value) {
  if (!["services", "includeKeywords", "excludeKeywords"].includes(field) || !value) return;
  initializeProfileDraft();
  const currentValues = Array.isArray(state.profileDraft[field]) ? state.profileDraft[field] : [];
  const normalized = normalizeSuggestionValue(value);
  const exists = currentValues.some((item) => normalizeSuggestionValue(item) === normalized);
  state.profileDraft[field] = exists
    ? currentValues.filter((item) => normalizeSuggestionValue(item) !== normalized)
    : [...currentValues, value];
  markProfileDraftDirty();
  render();
}

function renderSuggestionChips({ field, title, values, selectedValues }) {
  if (!values.length) return "";
  const selected = Array.isArray(selectedValues) ? selectedValues : [];
  return `
    <div class="suggestion-group">
      <div class="suggestion-group-head">
        <span>${escapeHtml(title)}</span>
      </div>
      <div class="suggestion-chips">
        ${values.map((value) => {
          const isSelected = selected.some((item) => normalizeSuggestionValue(item) === normalizeSuggestionValue(value));
          return `
            <button
              type="button"
              class="suggestion-chip ${isSelected ? "is-selected" : ""}"
              data-action="toggle-profile-suggestion"
              data-field="${escapeHtml(field)}"
              data-value="${escapeHtml(value)}"
              aria-pressed="${isSelected ? "true" : "false"}"
            >${escapeHtml(value)}</button>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function initializeProfileDraft() {
  if (state.profileDraft) return;

  if (state.profile) {
    state.profileDraft = cloneProfileForDraft(state.profile);
    return;
  }

  state.profileDraft = getEmptyProfile();
}

function cloneProfileForDraft(profile) {
  return {
    ...profile,
    services: cleanStringArray(profile.services),
    includeKeywords: cleanStringArray(profile.includeKeywords),
    excludeKeywords: cleanStringArray(profile.excludeKeywords),
    locations: cleanStringArray(profile.locations),
    serviceAreas: cleanStringArray(profile.serviceAreas)
  };
}

function markProfileDraftDirty() {
  state.profileDraftDirty = true;
  state.profileSaved = false;
  state.profileSaveMessage = null;
  state.profileSaveError = null;
}

function replaceProfileDraftFromProfile(profile) {
  state.profileDraft = cloneProfileForDraft(profile || getEmptyProfile());
  state.profileDraftDirty = false;
}

function updateProfileDraftFromForm(formElement) {
  initializeProfileDraft();
  const form = new FormData(formElement);
  const nextDraft = { ...state.profileDraft };
  if (hasFormControl(formElement, "companyName")) nextDraft.companyName = String(form.get("companyName") || "").trim();
  if (hasFormControl(formElement, "contactEmail")) nextDraft.contactEmail = String(form.get("contactEmail") || "").trim();
  if (hasFormControl(formElement, "website")) nextDraft.website = String(form.get("website") || "").trim();
  if (hasFormControl(formElement, "industry")) nextDraft.industry = String(form.get("industry") || "");
  if (hasFormControl(formElement, "services")) nextDraft.services = splitInput(form.get("services"));
  if (hasFormControl(formElement, "includeKeywords")) nextDraft.includeKeywords = splitInput(form.get("includeKeywords"));
  if (hasFormControl(formElement, "excludeKeywords")) nextDraft.excludeKeywords = splitInput(form.get("excludeKeywords"));
  if (hasFormControl(formElement, "locations")) nextDraft.locations = form.getAll("locations");
  if (hasFormControl(formElement, "baseLocation")) nextDraft.baseLocation = String(form.get("baseLocation") || "");
  if (hasFormControl(formElement, "serviceAreas")) nextDraft.serviceAreas = splitInput(form.get("serviceAreas"));
  if (hasFormControl(formElement, "willingToTravel")) nextDraft.willingToTravel = form.get("willingToTravel") === "on";
  if (hasFormControl(formElement, "nationalProjects")) nextDraft.nationalProjects = form.get("nationalProjects") === "on";
  if (hasFormControl(formElement, "remoteProjects")) nextDraft.remoteProjects = form.get("remoteProjects") === "on";
  if (hasFormControl(formElement, "minimumProjectValueForTravel")) nextDraft.minimumProjectValueForTravel = String(form.get("minimumProjectValueForTravel") || "");
  if (hasFormControl(formElement, "minProjectValue")) nextDraft.minProjectValue = String(form.get("minProjectValue") || "");
  if (hasFormControl(formElement, "maxProjectValue")) nextDraft.maxProjectValue = String(form.get("maxProjectValue") || "");
  if (hasFormControl(formElement, "allowUnknownValue")) nextDraft.allowUnknownValue = form.get("allowUnknownValue") === "on";
  if (hasFormControl(formElement, "reportFrequency")) nextDraft.reportFrequency = String(form.get("reportFrequency") || "weekly");
  if (hasFormControl(formElement, "reportDay")) nextDraft.reportDay = String(form.get("reportDay") || "monday");
  if (hasFormControl(formElement, "deadlineReminders")) nextDraft.deadlineReminders = form.get("deadlineReminders") === "on";
  if (hasFormControl(formElement, "includeLowConfidence")) nextDraft.includeLowConfidence = form.get("includeLowConfidence") === "on";
  state.profileDraft = nextDraft;
  markProfileDraftDirty();
}

function hasFormControl(formElement, name) {
  return Boolean(formElement.querySelector(`[name="${CSS.escape(name)}"]`));
}

function normalizeProfileDraftForSave() {
  initializeProfileDraft();
  return {
    ...state.profileDraft,
    companyName: String(state.profileDraft.companyName || "").trim(),
    contactEmail: String(state.profileDraft.contactEmail || "").trim(),
    website: String(state.profileDraft.website || "").trim(),
    industry: String(state.profileDraft.industry || ""),
    services: cleanStringArray(state.profileDraft.services),
    includeKeywords: cleanStringArray(state.profileDraft.includeKeywords),
    excludeKeywords: cleanStringArray(state.profileDraft.excludeKeywords),
    locations: cleanStringArray(state.profileDraft.locations),
    baseLocation: String(state.profileDraft.baseLocation || ""),
    serviceAreas: cleanStringArray(state.profileDraft.serviceAreas),
    willingToTravel: Boolean(state.profileDraft.willingToTravel),
    nationalProjects: Boolean(state.profileDraft.nationalProjects),
    remoteProjects: Boolean(state.profileDraft.remoteProjects),
    minimumProjectValueForTravel: nullableNumber(state.profileDraft.minimumProjectValueForTravel),
    minProjectValue: nullableNumber(state.profileDraft.minProjectValue),
    maxProjectValue: nullableNumber(state.profileDraft.maxProjectValue)
  };
}

function textIncludes(text, keyword) {
  return String(text || "").toLowerCase().includes(String(keyword || "").toLowerCase());
}

function opportunityText(opp) {
  return [opp.title, opp.description, opp.category, opp.location, ...(opp.keywords || [])].join(" ").toLowerCase();
}

function isNationalOpportunity(opp) {
  const location = normalizeLocationText(opp.location);
  const text = normalizeLocationText(`${opp.title} ${opp.description} ${opp.location}`);
  if ([
    "all iceland",
    "iceland",
    "island"
  ].some((value) => location.includes(value))) return true;
  return [
    "national",
    "landsvist",
    "nationwide"
  ].some((value) => text.includes(value));
}

function selectedProfileLocations(profile) {
  return [
    ...(profile.locations || []),
    ...(profile.serviceAreas || []),
    profile.baseLocation
  ].filter(Boolean);
}

function localLocationMatches(profile, opp) {
  const selectedLocations = selectedProfileLocations(profile);
  if (!selectedLocations.length) return false;
  const country = getOpportunityCountryCode(opp);
  if (selectedLocations.includes("All Iceland")) {
    const opportunityLocation = normalizeLocationText(opp.location);
    return country === "IS" || opportunityLocation.includes("iceland") || opportunityLocation.includes("island");
  }
  if (selectedLocations.includes("Remote / Online") && opp.location === "Remote / Online") return true;
  if (!country) return false;
  if (country !== "IS" && selectedLocations.some((location) => normalizeLocationText(location).includes("iceland"))) return false;

  const opportunityLocation = normalizeLocationText(opp.location);
  return selectedLocations.some((loc) => {
    const selected = normalizeLocationText(loc);
    if (!selected) return false;
    if (selected === opportunityLocation) return true;
    if (selected === "reykjavik" && ["reykjavik", "capital area", "hofudborgarsvaedid"].includes(opportunityLocation)) return true;
    return opportunityLocation.includes(selected) || selected.includes(opportunityLocation);
  });
}

function getLocationMatchCategory(profile, opp) {
  if (!profile) return "outside_area_low_confidence";
  if (localLocationMatches(profile, opp)) return "local_match";
  if (profile.locations?.includes("Remote / Online") && opp.location === "Remote / Online") {
    return "remote_match";
  }
  if (isNationalOpportunity(opp) && (isIcelandicOpportunity(opp) || getOpportunityCountryCode(opp) === "IS")) {
    return "national_match";
  }
  if (opp.location === "Remote / Online" && profile.remoteProjects) return "remote_match";
  if (isIcelandicOpportunity(opp) && (profile.nationalProjects || profile.willingToTravel)) {
    return "outside_area_possible";
  }
  return "outside_area_low_confidence";
}

function locationMatches(profile, opp) {
  return ["local_match", "national_match", "remote_match", "outside_area_possible"].includes(getLocationMatchCategory(profile, opp));
}

function locationMatchReason(profile, opp) {
  const category = getLocationMatchCategory(profile, opp);
  if (category === "local_match") return "Local match";
  if (category === "national_match") return "National opportunity";
  if (category === "remote_match") return "Remote opportunity";
  if (category === "outside_area_possible") return "Outside base area but travel allowed";
  if (category === "outside_area_low_confidence") return "Outside selected area; low-confidence location match";
  return null;
}

function isIcelandicOpportunity(opp) {
  const country = getOpportunityCountryCode(opp);
  if (country === "IS") return true;
  const location = normalizeLocationText(opp.location);
  return [
    "iceland",
    "island",
    "all iceland",
    "reykjavik",
    "capital area",
    "hofudborgarsvaedid",
    "east iceland",
    "west iceland",
    "north iceland",
    "south iceland",
    "sudurnes",
  ].some((value) => location.includes(value));
}

function isEuRegionCode(value) {
  return /^[A-Z]{2}[A-Z0-9]{2,4}$/i.test(String(value || "").trim());
}

function normalizeLocationText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/æ/g, "ae")
    .replace(/[ðþ]/g, (char) => char === "ð" ? "d" : "th")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function valueMatches(profile, opp) {
  if (!opp.estimatedValue) return Boolean(profile.allowUnknownValue);
  if (profile.minProjectValue && opp.estimatedValue < profile.minProjectValue) return false;
  if (profile.maxProjectValue && opp.estimatedValue > profile.maxProjectValue) return false;
  return true;
}

function categoryMatches(profile, opp) {
  const industry = String(profile.industry || "").toLowerCase();
  const category = String(opp.category || "").toLowerCase();
  return category.includes(industry) || industry.includes(category);
}

function calculateMatch(profile, opp) {
  if (!profile) {
    return {
      ...opp,
      matchScore: 0,
      matchLabel: "Weak match",
      matchReasons: [],
      risks: [],
      nextSteps: []
    };
  }

  const text = opportunityText(opp);
  let score = 0;
  const reasons = [];
  const risks = [];

  if (categoryMatches(profile, opp)) {
    score += 35;
    reasons.push(`Matches your ${profile.industry} industry`);
  }

  for (const service of profile.services || []) {
    if (textIncludes(text, service)) {
      score += 10;
      reasons.push(`Mentions your service: ${service}`);
    }
  }

  for (const keyword of profile.includeKeywords || []) {
    if (textIncludes(text, keyword)) {
      score += 8;
      reasons.push(`Contains your keyword: ${keyword}`);
    }
  }

  const locationCategory = getLocationMatchCategory(profile, opp);
  const locationReason = locationMatchReason(profile, opp);
  if (locationCategory === "local_match") {
    score += 22;
    reasons.push(locationReason);
  } else if (locationCategory === "national_match") {
    score += 16;
    reasons.push(locationReason);
  } else if (locationCategory === "remote_match") {
    score += 14;
    reasons.push(locationReason);
  } else if (locationCategory === "outside_area_possible") {
    const travelMinimum = Number(profile.minimumProjectValueForTravel || 0);
    const belowTravelMinimum = travelMinimum && opp.estimatedValue && Number(opp.estimatedValue) < travelMinimum;
    score += belowTravelMinimum ? -4 : 4;
    reasons.push(locationReason);
    risks.push(belowTravelMinimum
      ? "Outside base area and below your preferred travel project value"
      : "Check travel cost, project size and delivery capacity");
  } else {
    score -= 8;
    risks.push("Outside selected area; location match is low confidence");
  }

  if (valueMatches(profile, opp)) {
    score += 10;
    if (opp.estimatedValue) reasons.push("Project value is inside your preferred range");
  } else {
    score -= 25;
    risks.push("Estimated project value is outside your preferred range");
  }

  const days = daysUntilDeadline(opp.deadline);
  if (!opp.deadline) {
    risks.push("Deadline could not be extracted from source feed");
  } else if (days >= 0 && days <= 30) {
    score += 8;
    reasons.push("Deadline is coming up soon");
  } else if (days < 0) {
    score -= 50;
    risks.push("Deadline has passed");
  }

  for (const keyword of profile.excludeKeywords || []) {
    if (textIncludes(text, keyword)) {
      score -= 18;
      risks.push(`Contains exclude keyword: ${keyword}`);
    }
  }

  if ((opp.requirements || []).some((r) => textIncludes(r, "certification") || textIncludes(r, "license"))) {
    risks.push("May require certification or license documentation");
  }
  if (opp.difficulty === "high") {
    risks.push("This appears to be a higher-complexity opportunity");
  }

  score = Math.max(0, Math.min(100, Math.round(score)));

  return {
    ...opp,
    matchScore: score,
    matchLabel: getMatchLabel(score),
    matchReasons: reasons.slice(0, 5),
    risks: [...new Set(risks)].slice(0, 4),
    nextSteps: [
      "Open the source documents",
      "Confirm mandatory requirements",
      "Check capacity and profitability",
      "Prepare questions before the deadline"
    ]
  };
}

function getMatchLabel(score) {
  if (score >= 85) return "Strong match";
  if (score >= 65) return "Good match";
  if (score >= 45) return "Possible match";
  return "Weak match";
}

function getMatchedOpportunities() {
  if (state.storedMatches.length) {
    return state.storedMatches
      .filter(isDashboardVisibleOpportunity)
      .filter((opp) => !state.ignored.includes(opp.id))
      .sort((a, b) => b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline));
  }

  const profile = state.profile || (state.user ? null : defaultProfile);
  if (!profile) return [];
  return state.opportunities
    .map((opp) => calculateMatch(profile, opp))
    .filter(isDashboardVisibleOpportunity)
    .filter((opp) => !state.ignored.includes(opp.id))
    .sort((a, b) => b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline));
}

function getStoredDashboardMatches() {
  return state.storedMatches
    .filter(isDashboardVisibleOpportunity)
    .filter((opp) => !state.ignored.includes(opp.id))
    .sort((a, b) => b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline));
}

function getAvailableDashboardOpportunities() {
  const profile = state.profile || (state.user ? null : defaultProfile);
  if (!profile) return [];
  return state.opportunities
    .map((opp) => calculateMatch(profile, opp))
    .filter(isDashboardVisibleOpportunity)
    .filter((opp) => !state.ignored.includes(opp.id))
    .sort((a, b) => {
      const qualityDiff = getOpportunityQualityRank(a) - getOpportunityQualityRank(b);
      if (qualityDiff) return qualityDiff;
      return b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline);
    });
}

function getDashboardOpportunityById(id) {
  return [
    ...getStoredDashboardMatches(),
    ...getAvailableDashboardOpportunities(),
  ].find((item) => item.id === id);
}

function getFilteredMatches() {
  const matches = ["all_opportunities", "needs_review"].includes(state.filters.label)
    ? getAvailableDashboardOpportunities()
    : getStoredDashboardMatches();
  const baseMatches = matches.filter((opp) => {
    const search = state.filters.search.toLowerCase();
    if (search && !opportunityText(opp).includes(search)) return false;
    if (state.filters.category !== "all" && opp.category !== state.filters.category) return false;
    if (state.filters.location !== "all" && opp.location !== state.filters.location) return false;
    if (state.filters.type !== "all" && opp.type !== state.filters.type) return false;
    if (state.filters.savedOnly && !state.saved.includes(opp.id)) return false;
    return true;
  });

  if (state.filters.label === "recommended") {
    const recommended = baseMatches.filter(isRecommendedDashboardMatch);
    const fallback = baseMatches.filter(isFallbackDashboardMatch);
    return sortDashboardMatches(recommended.length ? recommended : fallback);
  }

  return sortDashboardMatches(baseMatches.filter(matchesSelectedLabelFilter));
}

function matchesSelectedLabelFilter(opp) {
  const selected = state.filters.label;
  if (selected === "all") return true;
  if (selected === "all_opportunities") return true;
  if (selected === "needs_review") return normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "needs_review";
  if (selected === "recommended") return isRecommendedDashboardMatch(opp);
  if (selected === "strong") return opp.matchLabel === "Strong match" || opp.matchScore >= 85;
  if (selected === "possible") return ["Possible match", "Weak match"].includes(opp.matchLabel) || opp.matchScore < 65;
  return opp.matchLabel === selected;
}

function isRecommendedDashboardMatch(opp) {
  if (!isRecommendedScore(opp)) return false;
  if (normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "needs_review") return false;
  if (containsObviousNewsIntent(getOpportunityQualityText(opp))) return false;
  return true;
}

function isFallbackDashboardMatch(opp) {
  if (!isRecommendedScore(opp)) return false;
  if (containsObviousNewsIntent(getOpportunityQualityText(opp))) return false;
  return true;
}

function isRecommendedScore(opp) {
  return ["Strong match", "Good match", "Possible match"].includes(opp.matchLabel) || opp.matchScore >= 45;
}

function sortDashboardMatches(matches) {
  return [...matches].sort((a, b) => {
    const qualityDiff = getOpportunityQualityRank(a) - getOpportunityQualityRank(b);
    if (qualityDiff) return qualityDiff;
    return b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline);
  });
}

function getOpportunityQualityRank(opp) {
  const status = normalizeOpportunityQualityStatus(opp.qualityStatus, opp);
  if (status === "confirmed_tender") return 0;
  if (status === "early_signal") return 1;
  return 2;
}

function getDashboardFilterSummary({ visibleCount, storedMatchCount, availableCount, recommendedCount, companyName }) {
  const selected = state.filters.label;
  if (selected === "all_opportunities") {
    return `${availableCount} opportunities are available in the system. Showing ${visibleCount} visible opportunities for inspection.`;
  }
  if (selected === "needs_review") {
    return `${availableCount} opportunities are available in the system. Showing ${visibleCount} needs-review opportunities.`;
  }
  if (selected === "all") return `${storedMatchCount} stored matches for ${companyName}. Showing all ${visibleCount}.`;
  if (selected === "strong") return `${storedMatchCount} stored matches for ${companyName}. Showing ${visibleCount} strong matches.`;
  if (selected === "recommended") {
    if (!visibleCount) {
      return `No recommended matches for ${companyName} yet. ${availableCount} opportunities are available in the system, but none match this profile strongly enough.`;
    }
    return `${storedMatchCount} stored matches for ${companyName}. Showing ${visibleCount} recommended or possible matches.`;
  }
  if (selected === "possible") return `${storedMatchCount} stored matches for ${companyName}. Showing ${visibleCount} possible or weak matches.`;
  return `${storedMatchCount} stored matches for ${companyName}. Showing ${visibleCount} ${selected.toLowerCase()} opportunities.`;
}

function toggleSave(id) {
  let message = "Opportunity saved";
  if (state.saved.includes(id)) {
    state.saved = state.saved.filter((x) => x !== id);
    message = "Removed from saved";
  } else {
    state.saved.push(id);
  }
  saveArray(STORAGE_KEYS.saved, state.saved);
  showToast(message, "success");
}

function ignoreOpportunity(id) {
  if (!state.ignored.includes(id)) state.ignored.push(id);
  saveArray(STORAGE_KEYS.ignored, state.ignored);
  if (state.selectedOpportunityId === id) state.selectedOpportunityId = null;
  showToast("Opportunity hidden", "success");
}

function unignoreOpportunity(id) {
  state.ignored = state.ignored.filter((x) => x !== id);
  saveArray(STORAGE_KEYS.ignored, state.ignored);
  render();
}

function openDetails(id) {
  state.selectedOpportunityId = id;
  document.body.classList.add("modal-open");
  render();
}

function closeDetails() {
  state.selectedOpportunityId = null;
  document.body.classList.remove("modal-open");
  render();
}

function syncDetailsFromState() {
  if (!state.selectedOpportunityId) {
    document.body.classList.remove("modal-open");
    return;
  }
  const opp = getDashboardOpportunityById(state.selectedOpportunityId);
  if (!opp) {
    state.selectedOpportunityId = null;
    document.body.classList.remove("modal-open");
    return;
  }
  document.body.classList.add("modal-open");
}

function daysUntilDeadline(dateString) {
  if (!dateString) return 999;
  const today = new Date();
  const d = new Date(dateString + "T00:00:00");
  if (Number.isNaN(d.getTime())) return 999;
  const ms = d - new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

function getDeadlineDisplay(value) {
  if (!value) {
    return {
      label: "Deadline missing — check source page",
      className: "deadline danger"
    };
  }

  const days = daysUntilDeadline(value);
  if (days === 999) {
    return {
      label: "Deadline missing — check source page",
      className: "deadline danger"
    };
  }

  return {
    label: `${days} days left`,
    className: days <= 14 ? "deadline danger" : "deadline"
  };
}

function formatOpportunityDeadline(value) {
  return value ? formatShortDate(value) : "Deadline missing — check source page";
}

function formatISK(value) {
  if (!value) return "Value unknown";
  return new Intl.NumberFormat("is-IS").format(value) + " kr";
}

function formatEstimatedValue(value, currency = "ISK") {
  if (!value) return "Value unknown";
  const code = currency || "ISK";
  const suffix = code === "ISK" ? "kr" : code;
  return `${new Intl.NumberFormat("is-IS").format(value)} ${suffix}`;
}

function formatShortDate(value) {
  if (!value) return "No deadline";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(date);
}

function formatDateTime(value) {
  if (!value) return "Unknown date";
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(new Date(value));
}

function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value || ""));
}

function categories() {
  return [...new Set(state.opportunities.map((o) => o.category))].sort();
}

function locations() {
  return [...new Set(state.opportunities.map((o) => o.location))].sort();
}

function types() {
  return [...new Set(state.opportunities.map((o) => o.type))].sort();
}

function badgeClass(label) {
  if (label === "Strong match") return "badge strong";
  if (label === "Good match") return "badge good";
  if (label === "Possible match") return "badge possible";
  return "badge weak";
}

function render() {
  const app = document.getElementById("app");
  const route = state.route;

  let html = "";
  if (state.isBooting || !state.authLoaded || !state.profileLoaded || !state.adminLoaded) html = renderLoadingPage();
  else if (route === "/") html = renderLanding();
  else if (route === "/login") html = renderLogin();
  else if (route === "/signup") html = renderSignup();
  else if (route === "/onboarding") html = renderOnboarding();
  else if (route === "/dashboard") html = state.user ? renderDashboard() : requireAuthPage();
  else if (route === "/report") html = state.user ? renderReport() : requireAuthPage();
  else if (route === "/pricing") html = renderPricing();
  else if (route === "/privacy") html = renderPrivacyPolicy();
  else if (route === "/terms") html = renderTermsOfService();
  else if (route === "/data-sources") html = renderDataSourcesPage();
  else if (route === "/cookies") html = renderCookiePolicy();
  else if (route === "/security") html = renderSecurityPage();
  else if (route === "/settings") html = state.user ? renderSettings() : requireAuthPage();
  else if (route === "/admin") html = state.user ? (state.isAdmin ? renderAdmin() : requireAdminPage()) : requireAuthPage();
  else html = renderLanding();

  app.innerHTML = html;
  if (state.selectedOpportunityId) {
    const opp = getDashboardOpportunityById(state.selectedOpportunityId);
    if (opp) {
      document.body.classList.add("modal-open");
      app.insertAdjacentHTML("beforeend", renderOpportunityModal(opp));
    } else {
      syncDetailsFromState();
    }
  } else {
    syncDetailsFromState();
  }
}

function renderLoadingPage() {
  return renderShell(`
    <div class="app-loader">
      <div class="loader-mark" aria-label="Loading VerkRadar">
        <span></span>
      </div>
    </div>
  `);
}

function renderShell(content) {
  const isLoggedIn = Boolean(state.user);
  const hasProfile = Boolean(state.profile);
  const navItems = isLoggedIn
    ? [
        ["Dashboard", "/dashboard"],
        ["Report", "/report"],
        ["Pricing", "/pricing"],
        ["Settings", "/settings"]
      ]
    : [
        ["How it works", "#how-it-works"],
        ["Sample report", "#sample-report"],
        ["Pricing", "/pricing"]
      ];
  const headerCta = getHeaderCta(isLoggedIn, hasProfile);

  return `
    <header class="site-header ${state.isMobileMenuOpen ? "is-menu-open" : ""}">
      <div class="header-top">
        <button class="brand" data-action="go" data-href="/">
          <img class="brand-logo" src="./logo.png" alt="VerkRadar" />
        </button>
        <button
          class="menu-toggle"
          type="button"
          data-action="toggle-mobile-menu"
          aria-label="${state.isMobileMenuOpen ? "Close menu" : "Open menu"}"
          aria-expanded="${state.isMobileMenuOpen ? "true" : "false"}"
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="header-menu" id="site-menu">
        <nav class="site-nav">
          ${navItems.map(([label, href]) => href.startsWith("#")
            ? `<button data-action="scroll-to" data-target="${href.slice(1)}">${label}</button>`
            : `<button data-action="go" data-href="${href}" ${state.route === href ? 'class="active"' : ""}>${label}</button>`
          ).join("")}
        </nav>
        <div class="header-actions">
          ${!isLoggedIn ? `<button class="btn btn-secondary header-login-btn btn-login" data-action="go" data-href="/login">Login</button>` : ""}
          ${headerCta ? `<button class="btn btn-primary" data-action="go" data-href="${headerCta.href}">${headerCta.label}</button>` : ""}
          ${isLoggedIn && !state.isMobileMenuOpen ? renderProfileMenu() : ""}
        </div>
      </div>
      ${renderMobileMenuPanel(navItems, headerCta, isLoggedIn)}
    </header>
    <main>${content}</main>
    ${renderFooter()}
    ${state.toast ? `
      <div class="toast toast-${state.toast.type}">
        <span class="toast-dot"></span>
        <span>${escapeHtml(state.toast.message)}</span>
      </div>
    ` : ""}
  `;
}

function renderFooter() {
  const links = [
    ["Privacy Policy", "/privacy"],
    ["Terms of Service", "/terms"],
    ["Data Sources", "/data-sources"],
    ["Cookies", "/cookies"],
    ["Security", "/security"]
  ];
  return `
    <footer class="site-footer">
      <div>
        <strong>VerkRadar</strong>
        <p>Tender and opportunity monitoring for businesses. VerkRadar helps you find and review public opportunities, but source documents remain the authority.</p>
      </div>
      <nav aria-label="Legal and trust pages">
        ${links.map(([label, href]) => `<button type="button" data-action="go" data-href="${href}">${label}</button>`).join("")}
      </nav>
    </footer>
  `;
}

function renderLegalPage({ eyebrow, title, intro, sections }) {
  return renderShell(`
    <section class="legal-page">
      <div class="legal-hero">
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(intro)}</p>
        <span>Last updated: June 4, 2026</span>
      </div>
      <div class="legal-layout">
        ${sections.map((section) => `
          <section class="legal-section">
            <h2>${escapeHtml(section.title)}</h2>
            <div class="legal-content">${section.content}</div>
          </section>
        `).join("")}
      </div>
    </section>
  `);
}

function legalParagraphs(items) {
  return items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
}

function legalList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderPrivacyPolicy() {
  return renderLegalPage({
    eyebrow: "Legal",
    title: "Privacy Policy",
    intro: "This policy explains how VerkRadar handles account, company profile and opportunity matching data. It is written for clarity and is not a substitute for final legal advice.",
    sections: [
      {
        title: "Who operates VerkRadar",
        content: legalParagraphs([
          "VerkRadar is operated by [LEGAL COMPANY NAME], located in Iceland. You can contact us at support@verkradar.is.",
          "VerkRadar is a B2B tender and opportunity monitoring tool. Businesses use it to create company profiles, monitor public sources, match opportunities and generate reports."
        ])
      },
      {
        title: "Data we collect",
        content: legalParagraphs([
          "We collect account and authentication data, such as email address, login session information and security-related records.",
          "We collect company profile data, including company name, contact email, website, industry, services, keywords, locations, project value preferences and report preferences.",
          "We store product activity needed to run the service, including saved or ignored opportunities, matching results, generated reports, import runs and admin review actions."
        ])
      },
      {
        title: "Public opportunity data",
        content: legalParagraphs([
          "VerkRadar imports and stores public procurement and opportunity data from sources such as EU TED, Útboðsvefur, municipal pages, public tender portals, public websites and manual entries.",
          "This source data may include buyer names, titles, descriptions, deadlines, locations, estimated values, CPV codes, source links and original source payloads."
        ])
      },
      {
        title: "How we use data",
        content: legalList([
          "To create and manage user accounts.",
          "To match public opportunities against company profiles.",
          "To generate dashboards, reports and saved opportunity lists.",
          "To provide support, troubleshoot issues and protect the service.",
          "To improve source quality, matching logic and service reliability."
        ])
      },
      {
        title: "Legal basis in the EEA",
        content: legalParagraphs([
          "For GDPR/EEA purposes, we process data mainly to deliver the service requested by users and companies.",
          "We may also process data based on legitimate interests, such as securing the service, improving matching quality and maintaining import logs. Where a legal obligation applies, we process data to meet that obligation. Where consent is required, we will ask for it."
        ])
      },
      {
        title: "Storage and processors",
        content: legalParagraphs([
          "VerkRadar uses Supabase for database, authentication and related infrastructure. We may use other service providers for hosting, monitoring, email or support as the product develops.",
          "We do not sell company profile data. We share data only where needed to operate the service, comply with law or protect VerkRadar and its users."
        ])
      },
      {
        title: "Retention",
        content: legalParagraphs([
          "We keep account and company data while the account is active or while needed to provide the service.",
          "When deletion is requested, we will delete or anonymize data where legally and technically possible. Some records may be retained for security, audit, billing or legal reasons."
        ])
      },
      {
        title: "Your rights",
        content: legalParagraphs([
          "Depending on your location, you may have rights to access, correct, delete, restrict or receive a copy of your data, object to processing and complain to a data protection authority.",
          "To exercise rights, contact support@verkradar.is. We may need to verify your identity before acting on a request."
        ])
      },
      {
        title: "Security",
        content: legalParagraphs([
          "We use authentication, access controls, database row-level security, Edge Function secrets and limited admin access to protect data.",
          "No system is perfectly secure. If you believe you found a vulnerability, contact support@verkradar.is."
        ])
      },
      {
        title: "Contact",
        content: legalParagraphs([
          "General support and legal contact: support@verkradar.is",
        ])
      }
    ]
  });
}

function renderTermsOfService() {
  return renderLegalPage({
    eyebrow: "Legal",
    title: "Terms of Service",
    intro: "These terms describe how businesses may use VerkRadar. They are plain-language product terms and include placeholders that should be reviewed before production use.",
    sections: [
      {
        title: "Service scope",
        content: legalParagraphs([
          "VerkRadar monitors public tender and opportunity sources, matches opportunities to company profiles and generates dashboards or reports.",
          "The service is an assistance and monitoring tool. It does not replace reading the original tender documents or getting professional advice."
        ])
      },
      {
        title: "User responsibilities",
        content: legalList([
          "Provide accurate account and company profile information.",
          "Check original source documents, requirements, certifications, deadlines, pricing and eligibility before acting.",
          "Keep login credentials secure and use the service only for lawful business purposes."
        ])
      },
      {
        title: "No professional advice",
        content: legalParagraphs([
          "VerkRadar does not provide legal, procurement, financial, tax or bidding advice.",
          "Reports and match scores are recommendations to help prioritise review. They are not final decisions and do not confirm eligibility or compliance."
        ])
      },
      {
        title: "No guarantees",
        content: legalParagraphs([
          "We do not guarantee complete source coverage, perfect data, perfect matching, eligibility for any tender, contract award, uninterrupted uptime or financial results.",
          "Deadlines, values and requirements may change at the original source. Users must verify the source before making business decisions."
        ])
      },
      {
        title: "Acceptable use",
        content: legalList([
          "Do not misuse the service, attempt unauthorized access or interfere with systems.",
          "Do not reverse engineer, scrape abusively, spam, upload illegal content or use VerkRadar for unlawful activity.",
          "Do not attempt to bypass access controls, rate limits or security features."
        ])
      },
      {
        title: "Subscriptions, billing and cancellation",
        content: legalParagraphs([
          "Pricing, billing, cancellation and refund terms are defined on the pricing/order page or in a written agreement with the customer.",
          "If paid plans are introduced or changed, applicable commercial terms will be shown before purchase or renewal where required."
        ])
      },
      {
        title: "Suspension and termination",
        content: legalParagraphs([
          "Users may cancel according to the applicable subscription or written agreement.",
          "VerkRadar may suspend or terminate access for misuse, non-payment, security risk or violation of these terms."
        ])
      },
      {
        title: "Limitation of liability",
        content: legalParagraphs([
          "To the maximum extent allowed by law, VerkRadar is not liable for missed deadlines, incorrect source data, lost business, lost profits or decisions made based on reports or matches.",
          "Users remain responsible for tender review, bidding decisions and compliance with procurement requirements."
        ])
      },
      {
        title: "Changes and governing law",
        content: legalParagraphs([
          "We may update these terms by posting a new version or notifying users where appropriate.",
          "These terms are governed by Icelandic law, unless another law is required by applicable mandatory rules."
        ])
      },
      {
        title: "Contact",
        content: legalParagraphs([
          "General support and legal contact: support@verkradar.is",
        ])
      }
    ]
  });
}

function renderDataSourcesPage() {
  return renderLegalPage({
    eyebrow: "Trust",
    title: "Data Sources & Accuracy Disclaimer",
    intro: "VerkRadar helps businesses monitor public opportunities, but the original source remains the authority.",
    sections: [
      {
        title: "Sources we may monitor",
        content: legalParagraphs([
          "Sources may include EU TED, Útboðsvefur, municipal pages, public tender portals, public websites and manually added opportunities.",
          "The set of sources may change over time as we add, remove or improve import coverage."
        ])
      },
      {
        title: "Source data can be imperfect",
        content: legalList([
          "Source data may be incomplete, delayed, duplicated or changed after import.",
          "Some notices may appear in their original language.",
          "Deadlines, values, locations, buyer names and requirements can change at the original source.",
          "Imported fields may be missing or normalized differently depending on the source."
        ])
      },
      {
        title: "Matching scores are recommendations",
        content: legalParagraphs([
          "Match scores are designed to help users prioritize review. They are not guarantees of relevance, eligibility, compliance or contract success.",
          "A low score may still be worth reviewing, and a high score may still be unsuitable after reading the source documents."
        ])
      },
      {
        title: "Always open the source document",
        content: legalParagraphs([
          "Before acting on any opportunity, open the original source link and review the official documents, deadline, submission method, certifications, pricing requirements and eligibility criteria.",
          "Use VerkRadar as a shortlist and monitoring layer, not as the final procurement record."
        ])
      }
    ]
  });
}

function renderCookiePolicy() {
  return renderLegalPage({
    eyebrow: "Legal",
    title: "Cookie Policy",
    intro: "This page explains how VerkRadar uses cookies and browser storage. At this stage, the product uses essential storage for authentication and app functionality.",
    sections: [
      {
        title: "Essential cookies and storage",
        content: legalParagraphs([
          "VerkRadar uses essential browser storage for login sessions, Supabase Auth/session handling and app preferences needed to provide the service.",
          "Local storage may also be used for saved interface state, demo profile data or basic product preferences."
        ])
      },
      {
        title: "Analytics and tracking",
        content: legalParagraphs([
          "If analytics, advertising or optional tracking tools are added later, this policy should be updated to explain what is used and whether consent is required.",
          "Do not assume analytics are active unless they are clearly listed here or in the product."
        ])
      },
      {
        title: "Controlling storage",
        content: legalParagraphs([
          "You can control or clear cookies and local storage in your browser settings.",
          "Disabling essential cookies or storage may prevent login, session persistence or parts of the app from working correctly."
        ])
      }
    ]
  });
}

function renderSecurityPage() {
  return renderLegalPage({
    eyebrow: "Trust",
    title: "Security & Data Handling",
    intro: "This page explains the practical controls VerkRadar uses to handle account, company and opportunity data. It does not claim certifications that VerkRadar has not obtained.",
    sections: [
      {
        title: "Authentication and account access",
        content: legalParagraphs([
          "User access is handled through Supabase Auth. Users must sign in to access protected dashboard, report, settings and admin areas.",
          "Company profiles are connected to account ownership so users only manage their own company data unless they have admin access."
        ])
      },
      {
        title: "Role-based and admin access",
        content: legalParagraphs([
          "Admin access is limited to users listed as administrators. Admin tools are used to monitor imports, review opportunities and manage manual entries.",
          "Admin access should be granted only to people who need it for operations or support."
        ])
      },
      {
        title: "Database policies",
        content: legalParagraphs([
          "The application uses database row-level security policies to separate user-owned data from admin operations.",
          "Public opportunity data may be visible to authenticated or public users depending on the product view, while company-specific profile and report data is protected."
        ])
      },
      {
        title: "Secrets and automation",
        content: legalParagraphs([
          "Automation runs through server-side functions. Secrets for Edge Functions and scheduled imports are kept server-side and should not be exposed in browser code.",
          "Import runs are logged so administrators can review success, errors, inserted rows, matches and generated reports."
        ])
      },
      {
        title: "Backups, logs and monitoring",
        content: legalParagraphs([
          "Infrastructure providers such as Supabase may maintain backups, logs and operational records according to their platform settings and policies.",
          "VerkRadar keeps operational logs where needed to troubleshoot imports, matching, reports and security issues."
        ])
      },
      {
        title: "Responsible disclosure",
        content: legalParagraphs([
          "If you believe you found a security issue, contact support@verkradar.is with a clear description and steps to reproduce.",
          "Please do not access, modify or delete data that does not belong to you while investigating a potential issue."
        ])
      }
    ]
  });
}

function renderMobileMenuPanel(navItems, headerCta, isLoggedIn) {
  const mobileNavItems = isLoggedIn
    ? [
        ["Dashboard", "/dashboard"],
        ["Report", "/report"],
        ["Pricing", "/pricing"],
        ["Settings", "/settings"]
      ]
    : navItems;
  const linkItems = mobileNavItems.map(([label, href]) => href.startsWith("#")
    ? `<button type="button" data-action="mobile-scroll-to" data-target="${href.slice(1)}">${label}</button>`
    : `<button type="button" data-action="mobile-nav" data-href="${href}">${label}</button>`
  ).join("");

  return `
    <nav class="mobile-menu-panel" id="mobile-menu">
      <div class="mobile-menu-links">
        ${linkItems}
        ${isLoggedIn && state.isAdmin ? `<button type="button" data-action="mobile-nav" data-href="/admin">Admin</button>` : ""}
      </div>
      ${renderMobileAccountSection(headerCta, isLoggedIn)}
    </nav>
  `;
}

function renderMobileAccountSection(headerCta, isLoggedIn) {
  if (!isLoggedIn) {
    return `
      <div class="mobile-account-section">
        ${headerCta ? `<button class="btn btn-primary mobile-cta" type="button" data-action="mobile-nav" data-href="${headerCta.href}">${headerCta.label}</button>` : ""}
        <button class="btn btn-secondary" type="button" data-action="mobile-nav" data-href="/login">Login</button>
      </div>
    `;
  }

  const companyName = state.profile?.companyName || "No company profile";
  const email = state.user?.email || "";
  const initials = getProfileInitials(companyName, email);

  return `
    <div class="mobile-account-section">
      <div class="mobile-account-header">
        <span class="profile-avatar">${escapeHtml(initials)}</span>
        <div>
          <strong>${escapeHtml(companyName)}</strong>
          <small>${escapeHtml(email)}</small>
        </div>
      </div>
      <div class="mobile-account-actions">
        ${state.profile
          ? `<button type="button" data-action="mobile-nav" data-href="/settings">Company profile</button>`
          : `<button type="button" data-action="mobile-nav" data-href="/onboarding">Create profile</button>`
        }
        <button type="button" class="mobile-logout" data-action="logout">Logout</button>
      </div>
    </div>
  `;
}

function getHeaderCta(isLoggedIn, hasProfile) {
  if (!isLoggedIn) return { href: "/signup", label: "Get started" };
  if (!hasProfile) return { href: "/onboarding", label: "Create profile" };
  return null;
}

function renderProfileMenu() {
  const companyName = state.profile?.companyName || "No company profile";
  const email = state.user?.email || "";
  const initials = getProfileInitials(companyName, email);

  return `
    <div class="profile-menu">
      <button type="button" class="profile-pill" data-action="toggle-profile-menu" aria-haspopup="menu" aria-expanded="${state.profileMenuOpen ? "true" : "false"}">
        <span class="profile-avatar">${escapeHtml(initials)}</span>
        <span class="profile-name">${escapeHtml(companyName)}</span>
        <span class="profile-chevron" aria-hidden="true"></span>
      </button>

      ${state.profileMenuOpen && !state.isMobileMenuOpen && !isMobileViewport() ? `
        <div class="profile-dropdown" role="menu">
          <div class="profile-dropdown-header">
            <strong>${escapeHtml(companyName)}</strong>
            <small>${escapeHtml(email)}</small>
          </div>
          <div class="profile-dropdown-divider"></div>
          ${state.profile ? `
            <button type="button" data-action="go" data-href="/dashboard" role="menuitem">Dashboard</button>
            <button type="button" data-action="go" data-href="/settings" role="menuitem">Settings</button>
            ${state.isAdmin ? `<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>` : ""}
          ` : `
            <button type="button" data-action="go" data-href="/onboarding" role="menuitem">Create profile</button>
            ${state.isAdmin ? `<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>` : ""}
          `}
          <div class="profile-dropdown-divider"></div>
          <button type="button" class="danger" data-action="logout" role="menuitem">Logout</button>
        </div>
      ` : ""}
    </div>
  `;
}

function getProfileInitials(companyName, email) {
  const source = companyName && companyName !== "No company profile" ? companyName : email || "VR";
  return source
    .split(/[^a-zA-Z0-9áéíóúýþæöðÁÉÍÓÚÝÞÆÖÐ]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "VR";
}

function requireProfilePage(title, message) {
  return renderShell(`
    <section class="empty-state">
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(message)}</p>
      <button class="btn btn-primary" data-action="go" data-href="/onboarding">Create profile</button>
      <button class="btn btn-secondary" data-action="load-demo">Load demo profile</button>
    </section>
  `);
}

function renderAuthMessage() {
  if (!state.authMessage) return "";
  return `
    <div class="admin-message ${state.authMessage.type === "error" ? "is-error" : "is-success"}">
      ${escapeHtml(state.authMessage.text)}
    </div>
  `;
}

function renderLogin() {
  if (state.user) return requireProfilePage("Already logged in", "Open your dashboard or edit your company profile.");

  return renderShell(`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">Login</p>
          <h1>Login to VerkRadar</h1>
          <p>Access your company dashboard, saved opportunities and weekly reports.</p>
        </div>

        <div class="auth-form-column">
          ${renderAuthMessage()}
          <form id="login-form" class="auth-card">
            <label class="form-group">Email <input type="email" name="email" data-auth-field="email" value="${escapeHtml(state.authForm.email)}" autocomplete="email" required /></label>
            <label class="form-group">Password <input type="password" name="password" data-auth-field="password" value="${escapeHtml(state.authForm.password)}" autocomplete="current-password" required /></label>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${state.authSubmitting ? "disabled" : ""}>
                ${state.authSubmitting ? "Logging in..." : "Login"}
              </button>
            </div>
            <p class="auth-switch">New to VerkRadar? <button type="button" data-action="go" data-href="/signup">Create account</button></p>
          </form>
        </div>
      </div>
    </section>
  `);
}

function renderSignup() {
  if (state.user) return requireProfilePage("Already logged in", "Open your dashboard or edit your company profile.");

  return renderShell(`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">Create account</p>
          <h1>Create your VerkRadar account</h1>
          <p>Start by creating an account. Then you’ll create your company profile.</p>
        </div>

        <div class="auth-form-column">
          ${renderAuthMessage()}
          <form id="signup-form" class="auth-card">
            <label class="form-group">Email <input type="email" name="email" data-auth-field="email" value="${escapeHtml(state.authForm.email)}" autocomplete="email" required /></label>
            <label class="form-group">Password <input type="password" name="password" data-auth-field="password" value="${escapeHtml(state.authForm.password)}" autocomplete="new-password" minlength="6" required /></label>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${state.authSubmitting ? "disabled" : ""}>
                ${state.authSubmitting ? "Creating..." : "Create account"}
              </button>
            </div>
            <p class="auth-switch">Already have an account? <button type="button" data-action="go" data-href="/login">Login</button></p>
          </form>
        </div>
      </div>
    </section>
  `);
}

function renderImportStatus() {
  if (!state.importLoading && !state.importStatus) return "";

  if (state.importLoading) {
    return `<section class="import-panel"><strong>Importing TED notices...</strong><p>Fetching recent TED notices and refreshing matches.</p></section>`;
  }

  const status = state.importStatus || {};
  const errors = Array.isArray(status.errors) ? status.errors : [];
  const importedRows = state.importedTedOpportunities || [];

  return `
    <section class="import-panel">
      ${state.importStatus ? `
        <div class="import-stats">
          <span><strong>${Number(status.fetched || 0)}</strong> fetched</span>
          <span><strong>${Number(status.inserted || 0)}</strong> inserted</span>
          <span><strong>${Number(status.updated || 0)}</strong> updated</span>
          <span><strong>${Number(status.skipped || 0)}</strong> skipped</span>
          <span><strong>${Number(status.matched || 0)}</strong> matches</span>
          <span><strong>${Number(status.reports_generated || 0)}</strong> reports</span>
        </div>
        ${errors.length ? `<ul class="risk-list">${errors.map((error) => `<li>${escapeHtml(error)}</li>`).join("")}</ul>` : `<p>TED import completed.</p>`}
        ${!errors.length ? `
          <div class="import-result-head">
            <h3>Newest imported TED opportunities</h3>
            <button class="btn btn-secondary" type="button" data-action="go" data-href="/dashboard">View imported opportunities on dashboard</button>
          </div>
          ${importedRows.length ? `
            <div class="imported-opportunities">
              ${importedRows.map(renderImportedTedRow).join("")}
            </div>
          ` : `<div class="empty-card">No imported TED opportunities were returned by the latest-results query.</div>`}
        ` : ""}
      ` : ""}
    </section>
  `;
}

function renderConnectorImportStatus() {
  if (!state.connectorImportLoading && !state.connectorTestingSourceId && !state.connectorImportStatus) return "";

  if (state.connectorImportLoading || state.connectorTestingSourceId) {
    return `<section class="import-panel"><strong>Running automatic source imports...</strong><p>Fetching enabled RSS/WordPress connectors and refreshing matches when new rows are saved.</p></section>`;
  }

  const status = state.connectorImportStatus || {};
  const errors = Array.isArray(status.errors) ? status.errors : [];

  return `
    <section class="import-panel">
      <div class="import-stats">
        <span><strong>${Number(status.fetched || 0)}</strong> fetched</span>
        <span><strong>${Number(status.inserted || 0)}</strong> inserted</span>
        <span><strong>${Number(status.updated || 0)}</strong> updated</span>
        <span><strong>${Number(status.skipped || 0)}</strong> skipped</span>
        <span><strong>${Number(status.matched || 0)}</strong> matches</span>
        <span><strong>${Number(status.reports_generated || 0)}</strong> reports</span>
      </div>
      ${errors.length ? `<ul class="risk-list">${errors.map((error) => `<li>${escapeHtml(error)}</li>`).join("")}</ul>` : `<p>Automatic source import completed.</p>`}
    </section>
  `;
}

function renderImportRunRow(run) {
  return `
    <div class="import-run-row">
      <div>
        <strong>${escapeHtml(run.status || "unknown")}</strong>
        <p>${escapeHtml(formatDateTime(run.started_at || run.finished_at || ""))} · ${escapeHtml(run.run_type || "ted-import")}</p>
      </div>
      <div class="import-run-metrics">
        <span>${Number(run.fetched || 0)} fetched</span>
        <span>${Number(run.inserted || 0)} inserted</span>
        <span>${Number(run.updated || 0)} updated</span>
        <span>${Number(run.matched || 0)} matched</span>
        <span>${Number(run.reports_generated || 0)} reports</span>
      </div>
      ${run.error ? `<p class="import-run-error">${escapeHtml(run.error)}</p>` : ""}
    </div>
  `;
}

function renderImportedTedRow(opp) {
  const hasUrl = opp.url && opp.url !== "#";
  const isUpdating = state.adminUpdatingId === opp.id;
  const isDeleting = state.adminDeletingId === opp.id;

  return `
    <div class="imported-opportunity-row">
      <div class="imported-opportunity-main">
        <h4>${escapeHtml(opp.title)}</h4>
        <span class="source-pill language-pill">Original language</span>
        <p>${escapeHtml(opp.buyer || "Unknown buyer")}</p>
      </div>
      <dl>
        <div>
          <dt>Country / location</dt>
          <dd>${escapeHtml([opp.countryCode, opp.location].filter(Boolean).join(" / ") || "Unknown")}</dd>
        </div>
        <div>
          <dt>Deadline</dt>
          <dd>${escapeHtml(formatShortDate(opp.deadline))}</dd>
        </div>
        <div>
          <dt>URL</dt>
          <dd>${hasUrl ? `<a href="${escapeHtml(opp.url)}" target="_blank" rel="noreferrer">Open TED</a>` : "No URL"}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>${escapeHtml(opp.status || "Unknown")}</dd>
        </div>
        <div>
          <dt>Imported source</dt>
          <dd>${escapeHtml(opp.source || "Unknown")}</dd>
        </div>
        <div>
          <dt>External ID</dt>
          <dd>${escapeHtml(opp.externalId || "Unknown")}</dd>
        </div>
      </dl>
      <div class="imported-opportunity-actions">
        <button class="btn btn-secondary" type="button" data-action="hide-imported-opportunity" data-id="${escapeHtml(opp.id)}" ${isUpdating || opp.status === "hidden" ? "disabled" : ""}>
          ${isUpdating ? "Updating..." : "Hide"}
        </button>
        <button class="btn btn-secondary" type="button" data-action="mark-imported-relevant" data-id="${escapeHtml(opp.id)}" ${isUpdating || opp.status === "open" ? "disabled" : ""}>
          ${isUpdating ? "Updating..." : "Mark relevant"}
        </button>
        <button class="btn btn-ghost" type="button" data-action="delete-opportunity" data-id="${escapeHtml(opp.id)}" ${isDeleting ? "disabled" : ""}>
          ${isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  `;
}

function getLatestImportRun() {
  return (state.importRuns || [])[0] || null;
}

function getRunStatusClass(status) {
  const normalized = String(status || "").toLowerCase();
  if (["success", "completed", "complete", "connected"].includes(normalized)) return "is-success";
  if (["running", "started", "pending", "planned"].includes(normalized)) return "is-running";
  if (["error", "failed", "failure"].includes(normalized)) return "is-error";
  return "";
}

function renderAutomationStatusCard() {
  const latest = getLatestImportRun();

  if (state.importRunsLoading && !latest) {
    return `
      <section class="ops-card automation-status-card">
        <div class="card-header">
          <div>
            <h2>Automation status</h2>
            <p>Loading latest automation run...</p>
          </div>
        </div>
      </section>
    `;
  }

  if (!latest) {
    return `
      <section class="ops-card automation-status-card">
        <div class="card-header">
          <div>
            <h2>Automation status</h2>
            <p>No automation runs yet.</p>
          </div>
        </div>
        ${state.importRunsError ? `<div class="admin-message is-error">${escapeHtml(state.importRunsError)}</div>` : ""}
      </section>
    `;
  }

  const statusClass = getRunStatusClass(latest.status);
  return `
    <section class="ops-card automation-status-card">
      <div class="card-header">
        <div>
          <h2>Automation status</h2>
          <p>Latest import and matching pipeline run.</p>
        </div>
        <span class="status-pill ${statusClass}">${escapeHtml(latest.status || "unknown")}</span>
      </div>
      <div class="ops-metrics">
        <div><span>Type</span><strong>${escapeHtml(latest.run_type || "ted-import")}</strong></div>
        <div><span>Mode</span><strong>${escapeHtml(latest.import_mode || "unknown")}</strong></div>
        <div><span>Fetched</span><strong>${Number(latest.fetched || 0)}</strong></div>
        <div><span>Inserted</span><strong>${Number(latest.inserted || 0)}</strong></div>
        <div><span>Updated</span><strong>${Number(latest.updated || 0)}</strong></div>
        <div><span>Skipped</span><strong>${Number(latest.skipped || 0)}</strong></div>
        <div><span>Matched</span><strong>${Number(latest.matched || 0)}</strong></div>
        <div><span>Reports</span><strong>${Number(latest.reports_generated || 0)}</strong></div>
        <div><span>Started</span><strong>${escapeHtml(formatDateTime(latest.started_at))}</strong></div>
        <div><span>Finished</span><strong>${escapeHtml(formatDateTime(latest.finished_at))}</strong></div>
      </div>
      ${latest.error ? `<div class="admin-message is-error">${escapeHtml(latest.error)}</div>` : ""}
      ${renderImportRunDebug(latest)}
    </section>
  `;
}

function getEdgeFunctionLogsUrl() {
  const baseUrl = window.VERKRADAR_SUPABASE_URL || SUPABASE_URL || "";
  const match = String(baseUrl).match(/^https:\/\/([^.]+)\.supabase\.co/i);
  if (!match) return "";
  return `https://supabase.com/dashboard/project/${match[1]}/functions/import-ted/logs`;
}

function renderAutomationActions() {
  const logsUrl = getEdgeFunctionLogsUrl();
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Automation actions</h2>
          <p>Run the pipeline manually or refresh the operations view.</p>
        </div>
      </div>
      <div class="automation-actions">
        <button class="btn btn-primary" type="button" data-action="import-ted" ${state.importLoading ? "disabled" : ""}>
          ${state.importLoading ? "Running TED import..." : "Run TED import now"}
        </button>
        <button class="btn btn-secondary" type="button" data-action="import-source-connectors" ${state.connectorImportLoading ? "disabled" : ""}>
          ${state.connectorImportLoading ? "Running source imports..." : "Run automatic source imports now"}
        </button>
        <button class="btn btn-secondary" type="button" data-action="refresh-admin-status" ${(state.importRunsLoading || state.adminReportsLoading) ? "disabled" : ""}>
          ${(state.importRunsLoading || state.adminReportsLoading) ? "Refreshing..." : "Refresh status"}
        </button>
        ${logsUrl ? `<a class="btn btn-secondary" href="${escapeHtml(logsUrl)}" target="_blank" rel="noreferrer">View Edge Function logs</a>` : ""}
      </div>
      <label class="import-mode-control">
        Import mode
        <select data-import-mode ${state.importLoading ? "disabled" : ""}>
          <option value="nordic" ${state.tedImportMode === "nordic" ? "selected" : ""}>Nordic only</option>
          <option value="iceland" ${state.tedImportMode === "iceland" ? "selected" : ""}>Iceland only</option>
          <option value="eu-broad" ${state.tedImportMode === "eu-broad" ? "selected" : ""}>EU broad test</option>
        </select>
      </label>
      ${renderImportStatus()}
      ${renderConnectorImportStatus()}
    </section>
  `;
}

function renderLatestImportRunsTable() {
  const rows = state.importRuns || [];
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest import runs</h2>
          <p>Last ${rows.length || 0} recorded automation runs.</p>
        </div>
      </div>
      ${state.importRunsError ? `<div class="admin-message is-error">${escapeHtml(state.importRunsError)}</div>` : ""}
      ${state.importRunsLoading && !rows.length ? `<div class="empty-card">Loading import runs...</div>` : rows.length ? `
        <div class="ops-table-wrap">
          <table class="ops-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Type</th>
                <th>Status</th>
                <th>Fetched</th>
                <th>Inserted</th>
                <th>Updated</th>
                <th>Skipped</th>
                <th>Matched</th>
                <th>Reports</th>
                <th>Error</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(renderImportRunTableRow).join("")}
            </tbody>
          </table>
        </div>
      ` : `<div class="empty-card">No automation runs yet.</div>`}
    </section>
  `;
}

function renderImportRunTableRow(run) {
  const debug = renderImportRunDebug(run, { compact: true });
  return `
    <tr>
      <td>${escapeHtml(formatDateTime(run.started_at || run.finished_at))}</td>
      <td>${escapeHtml(run.run_type || "ted-import")}</td>
      <td><span class="status-pill ${getRunStatusClass(run.status)}">${escapeHtml(run.status || "unknown")}</span></td>
      <td>${Number(run.fetched || 0)}</td>
      <td>${Number(run.inserted || 0)}</td>
      <td>${Number(run.updated || 0)}</td>
      <td>${Number(run.skipped || 0)}</td>
      <td>${Number(run.matched || 0)}</td>
      <td>${Number(run.reports_generated || 0)}</td>
      <td>${run.error ? escapeHtml(run.error) : ""}</td>
    </tr>
    ${debug ? `
      <tr class="import-run-debug-row">
        <td colspan="10">${debug}</td>
      </tr>
    ` : ""}
  `;
}

function getImportRunDetails(run) {
  const details = run?.details;
  if (!details) return {};
  if (typeof details === "string") {
    try {
      return JSON.parse(details) || {};
    } catch {
      return {};
    }
  }
  return typeof details === "object" ? details : {};
}

function renderImportRunDebug(run, options = {}) {
  const details = getImportRunDetails(run);
  const skipReasons = details.skip_reasons && typeof details.skip_reasons === "object" ? details.skip_reasons : {};
  const samples = Array.isArray(details.skipped_samples) ? details.skipped_samples : [];
  const perSource = Array.isArray(details.per_source) ? details.per_source : [];
  const reasonEntries = Object.entries(skipReasons)
    .filter(([, count]) => Number(count) > 0)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, 5);

  if (!reasonEntries.length && !samples.length && !perSource.length) return "";

  return `
    <div class="import-debug ${options.compact ? "is-compact" : ""}">
      <div class="import-debug-header">
        <strong>Skip diagnostics</strong>
        <span>${Number(run.skipped || 0)} skipped · ${Number(details.connectors_checked || perSource.length || 0)} connector${Number(details.connectors_checked || perSource.length || 0) === 1 ? "" : "s"}</span>
      </div>
      ${perSource.length ? `
        <div class="import-per-source">
          ${perSource.slice(0, 8).map((source) => `
            <div>
              <strong>${escapeHtml(source.source_name || "Unknown source")}</strong>
              <span>${Number(source.fetched || 0)} fetched</span>
              <span>${Number(source.inserted || 0)} inserted</span>
              <span>${Number(source.updated || 0)} updated</span>
              <span>${Number(source.skipped || 0)} skipped</span>
              <span>${Number(source.matched || 0)} matched</span>
            </div>
          `).join("")}
        </div>
      ` : ""}
      ${reasonEntries.length ? `
        <div class="import-skip-reasons">
          ${reasonEntries.map(([reason, count]) => `
            <span><strong>${Number(count)}</strong> ${escapeHtml(formatImportSkipReason(reason))}</span>
          `).join("")}
        </div>
      ` : ""}
      ${samples.length ? `
        <div class="import-skip-samples">
          ${samples.slice(0, 10).map((sample) => `
            <div>
              <strong>${escapeHtml(sample.source_name || sample.source || "Unknown source")}</strong>
              <span>${escapeHtml(sample.title || "Untitled item")}</span>
              <em>${escapeHtml(formatImportSkipReason(sample.reason || "skipped"))}${sample.matchedKeyword ? `: ${escapeHtml(sample.matchedKeyword)}` : ""}${sample.final_quality_status ? ` · ${escapeHtml(formatQualityStatus(sample.final_quality_status))}` : ""}</em>
            </div>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function formatImportSkipReason(reason) {
  const labels = {
    missing_title: "missing title",
    missing_url: "missing URL",
    duplicate_existing_opportunity: "duplicate existing opportunity",
    no_include_keyword_match: "no include keyword match",
    matched_exclude_keyword: "matched exclude keyword",
    low_quality_needs_review: "low quality needs review",
    unsupported_connector: "unsupported connector",
    parse_failed: "parse failed",
    fetch_failed: "fetch failed",
  };
  return labels[reason] || String(reason || "skipped").replaceAll("_", " ");
}

function renderLatestTedOpportunities() {
  const rows = state.importedTedOpportunities || [];
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest TED opportunities</h2>
          <p>Newest imported EU TED rows for review.</p>
        </div>
      </div>
      ${state.importedTedOpportunitiesError ? `<div class="admin-message is-error">${escapeHtml(state.importedTedOpportunitiesError)}</div>` : ""}
      ${state.importedTedOpportunitiesLoading && !rows.length ? `<div class="empty-card">Loading TED opportunities...</div>` : rows.length ? `
        <div class="imported-opportunities">
          ${rows.map(renderImportedTedRow).join("")}
        </div>
      ` : `<div class="empty-card">No TED opportunities loaded yet.</div>`}
    </section>
  `;
}

function renderLatestGeneratedReports() {
  const rows = state.adminReports || [];
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest reports generated</h2>
          <p>Newest saved weekly report records.</p>
        </div>
      </div>
      ${state.adminReportsError ? `<div class="admin-message is-error">${escapeHtml(state.adminReportsError)}</div>` : ""}
      ${state.adminReportsLoading && !rows.length ? `<div class="empty-card">Loading reports...</div>` : rows.length ? `
        <div class="ops-table-wrap">
          <table class="ops-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Company</th>
                <th>Created</th>
                <th>Period</th>
                <th>Status</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(renderAdminReportRow).join("")}
            </tbody>
          </table>
        </div>
      ` : `<div class="empty-card">No generated reports yet.</div>`}
    </section>
  `;
}

function formatSourceType(type) {
  const labels = {
    eu_ted: "EU TED",
    ted: "EU TED",
    api: "EU TED",
    utbodsvefur: "Útboðsvefur",
    municipal_website: "Municipal websites",
    public_institution_page: "Public institution pages",
    private_manual: "Private/manual leads",
    manual: "Private/manual leads",
    tender_portal: "Tender portals"
  };
  return labels[type] || type || "Unknown";
}

function formatConnectorType(type) {
  const labels = {
    ted_api: "TED API",
    rss_feed: "RSS feed",
    wordpress_rest: "WordPress REST",
    official_api: "Official API",
    page_monitor_allowed: "Allowed page monitor",
    manual_fallback: "Manual fallback",
    planned: "Planned",
    permission_required: "Permission required"
  };
  return labels[type] || type || "Planned";
}

function renderSourceCoverageSection() {
  const rows = state.sourceCoverage || [];
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Source coverage</h2>
          <p>Connected and planned lead sources for Icelandic opportunity coverage.</p>
        </div>
      </div>
      ${state.sourceCoverageError ? `<div class="admin-message is-error">${escapeHtml(state.sourceCoverageError)}</div>` : ""}
      ${state.sourceCoverageLoading && !rows.length ? `<div class="empty-card">Loading source coverage...</div>` : rows.length ? `
        <div class="ops-table-wrap">
          <table class="ops-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Type</th>
                <th>Connector</th>
                <th>Status</th>
                <th>Last checked</th>
                <th>Last success</th>
                <th>Active opportunities</th>
                <th>Last error</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(renderSourceCoverageRow).join("")}
            </tbody>
          </table>
        </div>
      ` : `<div class="empty-card">No sources configured yet.</div>`}
    </section>
  `;
}

function renderSourceCoverageRow(source) {
  const status = source.source_status || {};
  const connector = source.source_connectors || {};
  const effectiveStatus = connector.status || status.status || (source.is_active ? "planned" : "inactive");
  const statusClass = getRunStatusClass(effectiveStatus);
  const canTestConnector = connector.enabled && ["rss_feed", "wordpress_rest"].includes(connector.connector_type);
  const isTesting = state.connectorTestingSourceId === source.id;
  return `
    <tr>
      <td>
        <strong>${escapeHtml(source.name || "Unknown source")}</strong>
        ${connector.endpoint_url || source.base_url ? `<br><a href="${escapeHtml(connector.endpoint_url || source.base_url)}" target="_blank" rel="noreferrer">${escapeHtml(connector.endpoint_url || source.base_url)}</a>` : ""}
      </td>
      <td>${escapeHtml(formatSourceType(source.source_type))}</td>
      <td>
        <strong>${escapeHtml(formatConnectorType(connector.connector_type))}</strong>
        <br><span>${connector.enabled ? "Enabled" : "Disabled"}</span>
        ${connector.require_any_keyword === false ? `<br><span>Keyword match optional</span>` : `<br><span>Requires keyword match</span>`}
        ${Array.isArray(connector.include_keywords) && connector.include_keywords.length ? `<br><span>Includes: ${escapeHtml(connector.include_keywords.slice(0, 5).join(", "))}${connector.include_keywords.length > 5 ? "..." : ""}</span>` : ""}
        ${Array.isArray(connector.exclude_keywords) && connector.exclude_keywords.length ? `<br><span>Excludes: ${escapeHtml(connector.exclude_keywords.slice(0, 5).join(", "))}${connector.exclude_keywords.length > 5 ? "..." : ""}</span>` : ""}
      </td>
      <td><span class="status-pill ${statusClass}">${escapeHtml(effectiveStatus)}</span></td>
      <td>${escapeHtml(formatDateTime(connector.last_checked_at || status.last_checked_at))}</td>
      <td>${escapeHtml(formatDateTime(connector.last_success_at || status.last_success_at))}</td>
      <td>${Number(status.active_opportunities_count || 0)}</td>
      <td>${connector.last_error ? escapeHtml(connector.last_error) : status.last_error ? escapeHtml(status.last_error) : ""}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="test-source-connector" data-id="${escapeHtml(source.id)}" ${(!canTestConnector || isTesting || state.connectorImportLoading) ? "disabled" : ""}>
          ${isTesting ? "Testing..." : "Test source"}
        </button>
      </td>
    </tr>
  `;
}

function renderAdminReportRow(report) {
  const companyName = report.companies?.company_name || "Unknown company";
  const itemCount = Array.isArray(report.report_items) ? report.report_items.length : 0;
  return `
    <tr>
      <td>${escapeHtml(report.title || "Untitled report")}</td>
      <td>${escapeHtml(companyName)}</td>
      <td>${escapeHtml(formatDateTime(report.created_at))}</td>
      <td>${escapeHtml(`${formatShortDate(report.period_start)} - ${formatShortDate(report.period_end)}`)}</td>
      <td>${escapeHtml(report.status || "draft")}</td>
      <td>${itemCount}</td>
    </tr>
  `;
}

function getFilteredAdminOpportunities() {
  const filters = state.adminOpportunityFilters;
  return (state.opportunities || []).filter((opp) => {
    const isTed = isTedOpportunity(opp);
    if (filters.tedOnly && !isTed) return false;
    if (filters.manualOnly && isTed) return false;
    if (!filters.showDemoTest && isDemoTestOpportunity(opp)) return false;
    if (filters.source !== "all" && opp.source !== filters.source) return false;
    if (filters.status !== "all" && opp.status !== filters.status) return false;
    const country = getOpportunityCountryCode(opp) || opp.countryCode || "Unknown";
    if (filters.country !== "all" && country !== filters.country) return false;
    const search = normalizeLocationText(filters.search);
    if (search) {
      const haystack = normalizeLocationText(`${opp.title} ${opp.buyer} ${opp.externalId} ${opp.location}`);
      if (!haystack.includes(search)) return false;
    }
    return true;
  });
}

function getAdminFilterOptions(items, getter) {
  return Array.from(new Set(items.map(getter).filter(Boolean))).sort((a, b) => String(a).localeCompare(String(b)));
}

function renderAdminOpportunityFilters(opportunities) {
  const filters = state.adminOpportunityFilters;
  const sources = getAdminFilterOptions(state.opportunities || [], (opp) => opp.source || "Unknown");
  const statuses = getAdminFilterOptions(state.opportunities || [], (opp) => opp.status || "Unknown");
  const countries = getAdminFilterOptions(state.opportunities || [], (opp) => getOpportunityCountryCode(opp) || opp.countryCode || "Unknown");
  return `
    <div class="admin-filters">
      <input data-admin-filter="search" value="${escapeHtml(filters.search)}" placeholder="Search title, buyer, external ID..." />
      <select data-admin-filter="source">
        <option value="all">All sources</option>
        ${sources.map((source) => `<option value="${escapeHtml(source)}" ${filters.source === source ? "selected" : ""}>${escapeHtml(source)}</option>`).join("")}
      </select>
      <select data-admin-filter="status">
        <option value="all">All statuses</option>
        ${statuses.map((status) => `<option value="${escapeHtml(status)}" ${filters.status === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
      </select>
      <select data-admin-filter="country">
        <option value="all">All countries</option>
        ${countries.map((country) => `<option value="${escapeHtml(country)}" ${filters.country === country ? "selected" : ""}>${escapeHtml(country)}</option>`).join("")}
      </select>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="tedOnly" ${filters.tedOnly ? "checked" : ""}/><span>TED only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="manualOnly" ${filters.manualOnly ? "checked" : ""}/><span>Manual only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="showDemoTest" ${filters.showDemoTest ? "checked" : ""}/><span>Show demo/test opportunities</span></label>
    </div>
    <p class="admin-filter-count">${opportunities.length} of ${(state.opportunities || []).length} opportunities shown.</p>
  `;
}

function renderLanding() {
  const topMatches = getMatchedOpportunities().slice(0, 3);
  const primaryMatch = topMatches[0];
  return renderShell(`
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Tender intelligence for working contractors</p>
        <h1>Stop losing 15M kr jobs to tabs you never opened.</h1>
        <p class="hero-text">
          VerkRadar checks tender portals, municipal pages and private notices, then ranks the jobs worth pricing before the deadline moves on.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-large" data-action="go" data-href="/onboarding">Create free demo profile <span aria-hidden="true">&rarr;</span></button>
          <button class="btn btn-secondary btn-large" data-action="scroll-to" data-target="sample-report">View sample report</button>
        </div>
        <div class="proof-lines" aria-label="Product proof">
          <strong>47 contractors found a match this week.</strong>
          <span>Average top match value: 12.8M kr. Most were found outside the main tender database.</span>
        </div>
      </div>
      <div class="product-shot hero-card" aria-label="VerkRadar product preview">
        <div class="shot-topbar">
          <span>VERKRADAR / RAFFIX EHF.</span>
          <span>${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}</span>
        </div>
        <div class="shot-metric">
          <span>Best open match</span>
          <strong>${primaryMatch?.matchScore || 92}%</strong>
        </div>
        <div class="shot-row is-active">
          <div>
            <span class="shot-label">Tender</span>
            <h3>${primaryMatch?.title || "Electrical maintenance for municipal buildings"}</h3>
          </div>
          <strong>${formatISK(primaryMatch?.estimatedValue || 15000000)}</strong>
        </div>
        ${topMatches.slice(1, 3).map((opp) => `
          <div class="shot-row">
            <div>
              <span class="shot-label">${escapeHtml(opp.type)}</span>
              <h3>${escapeHtml(opp.title)}</h3>
            </div>
            <strong>${opp.matchScore}%</strong>
          </div>
        `).join("")}
        <div class="shot-footer">
          <span>Deadline risk</span>
          <strong>${primaryMatch ? daysUntilDeadline(primaryMatch.deadline) : 18} days left</strong>
        </div>
      </div>
    </section>

    <section class="problem-section">
      <div class="section-copy">
        <p class="eyebrow">The problem</p>
        <h2>You are not losing bids. You are losing the week before the bid.</h2>
      </div>
      <div class="problem-table">
        <div class="problem-row">
          <span>01</span>
          <h3>Deadlines show up after your crew is already booked.</h3>
          <p>A 14-day response window becomes a weekend scramble, or a 15M kr maintenance contract never gets priced.</p>
        </div>
        <div class="problem-row">
          <span>02</span>
          <h3>The search takes longer than the go/no-go call.</h3>
          <p>Owners burn 3-5 hours opening low-fit tenders instead of seeing value, location, requirements and match reasons in one view.</p>
        </div>
      </div>
    </section>

    <section id="how-it-works" class="section section-grid reversed how-it-works-section">
      <div class="feature-grid">
        <div class="feature-card"><h3>1. Create profile</h3><p>Tell VerkRadar your services, locations, keywords and project size.</p></div>
        <div class="feature-card"><h3>2. Match projects</h3><p>The system scores each opportunity against your business profile.</p></div>
        <div class="feature-card"><h3>3. Get report</h3><p>Receive a clear weekly report with deadlines and next steps.</p></div>
      </div>
      <div class="section-copy">
        <p class="eyebrow">The solution</p>
        <h2>One clear report instead of scattered searching.</h2>
        <p>VerkRadar turns tender noise into a ranked list of opportunities your business should actually check.</p>
      </div>
    </section>

    <section id="sample-report" class="section sample-report-section public-sample-report-page">
      <div class="section-copy">
        <p class="eyebrow">Sample report</p>
        <h2>A weekly shortlist your team can act on.</h2>
        <p>Preview how VerkRadar packages matched opportunities, deadline risk and next steps without requiring a login.</p>
      </div>
      <div class="public-report-preview">
        <div class="report-topbar">
          <span>Weekly Opportunity Report</span>
          <span>RafFix ehf.</span>
        </div>
        <article class="report-item">
          <h3>Electrical maintenance for municipal buildings</h3>
          <p><strong>Buyer:</strong> Reykjavík Municipality</p>
          <p><strong>Deadline:</strong> 18 days left · <strong>Match:</strong> 92/100</p>
          <ul>
            <li>Matches electrical installation and maintenance services.</li>
            <li>Located in selected Icelandic service area.</li>
            <li>Project value is inside the preferred range.</li>
          </ul>
          <p><strong>Next step:</strong> Open source documents and confirm mandatory certifications.</p>
        </article>
        <article class="report-item">
          <h3>EV charger upgrade for public facilities</h3>
          <p><strong>Buyer:</strong> Regional facilities office</p>
          <p><strong>Deadline:</strong> 24 days left · <strong>Match:</strong> 81/100</p>
          <ul>
            <li>Mentions EV charging and inspection keywords.</li>
            <li>Unknown value, but allowed by the company profile.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="cta-panel">
      <h2>Try the demo dashboard now.</h2>
      <p>Load a sample electrical company profile and see how the matching works.</p>
      <button class="btn btn-primary" data-action="load-demo">Load demo company</button>
    </section>
  `);
}

function renderOnboarding() {
  if (!state.user) return requireAuthPage();

  initializeProfileDraft();
  return renderShell(`
    <section class="page-head">
      <p class="eyebrow">Onboarding</p>
      <h1>Create your company profile</h1>
      <p>This is what the matching system uses to find relevant opportunities.</p>
    </section>

    ${renderProfileForm()}
  `);
}

function renderProfileForm() {
  initializeProfileDraft();
  return `
    <form id="profile-form" class="form-card settings-profile-form">
      ${renderProfileBasicsSection()}
      ${renderProfileServicesSection()}
      ${renderProfileLocationsSection()}
      ${renderProfileValueSection()}
      ${renderProfileReportsSection()}
      ${renderProfileFormActions()}
    </form>
  `;
}

function renderProfileBasicsSection() {
  const p = state.profileDraft || getEmptyProfile();
  const selectedIndustry = p.industry || "";
  return `
    <div class="form-section">
      <h2>1. Company basics</h2>
      <div class="form-grid">
        <label>Company name<input name="companyName" data-profile-field="companyName" value="${escapeHtml(p.companyName || "")}" required /></label>
        <label>Contact email<input name="contactEmail" type="email" data-profile-field="contactEmail" value="${escapeHtml(p.contactEmail || "")}" required /></label>
        <label>Website<input name="website" data-profile-field="website" value="${escapeHtml(p.website || "")}" /></label>
        <label class="custom-select-field">Industry
          <input id="industry-input" type="hidden" name="industry" value="${escapeHtml(selectedIndustry)}" required />
          ${renderCustomDropdown({
            key: "industry",
            value: selectedIndustry,
            options: getFilterOptions("industry"),
            profileField: "industry"
          })}
        </label>
      </div>
    </div>
  `;
}

function renderProfileServicesSection() {
  const p = state.profileDraft || getEmptyProfile();
  const selectedIndustry = p.industry || "";
  const serviceSuggestions = getProfileSuggestions("services", selectedIndustry);
  const keywordSuggestions = getProfileSuggestions("includeKeywords", selectedIndustry);
  return `
    <div class="form-section">
      <h2>2. Services and keywords</h2>
      <p class="form-section-hint">Start with the services you would actually want to bid on.</p>
      <label>What services do you offer? Choose suggestions or type your own, separated by commas.
        <textarea name="services" data-profile-field="services" data-profile-array="true" rows="3">${escapeHtml(arrayFieldText(p.services))}</textarea>
      </label>
      <p class="field-helper">Add the services your company actually sells. More specific services create better matches.</p>
      ${renderSuggestionChips({
        field: "services",
        title: selectedIndustry ? `Suggested services for ${selectedIndustry}` : "Select an industry to see service suggestions",
        values: serviceSuggestions,
        selectedValues: p.services || []
      })}
      <div class="form-grid keyword-grid">
        <label class="profile-keyword-field">Extra words VerkRadar should look for in notices.
          <input name="includeKeywords" data-profile-field="includeKeywords" data-profile-array="true" value="${escapeHtml(arrayFieldText(p.includeKeywords))}" />
          <span class="field-helper inline-helper">Use words that often appear in opportunities you want.</span>
        </label>
        <label class="profile-keyword-field">Words that should lower or remove bad matches.
          <input name="excludeKeywords" data-profile-field="excludeKeywords" data-profile-array="true" value="${escapeHtml(arrayFieldText(p.excludeKeywords))}" />
          <span class="field-helper inline-helper">Words that should lower or remove bad matches.</span>
        </label>
      </div>
      ${renderSuggestionChips({
        field: "includeKeywords",
        title: selectedIndustry ? `Suggested keywords for ${selectedIndustry}` : "Select an industry to see keyword suggestions",
        values: keywordSuggestions,
        selectedValues: p.includeKeywords || []
      })}
    </div>
  `;
}

function renderProfileLocationsSection() {
  const p = state.profileDraft || getEmptyProfile();
  const locationOptions = ["Reykjavík", "Capital Area", "Suðurnes", "South Iceland", "West Iceland", "North Iceland", "East Iceland", "Westfjords", "All Iceland", "Remote / Online"];
  return `
    <div class="form-section">
      <h2>3. Locations</h2>
      <p class="form-section-hint">Use All Iceland for national tenders. Use travel settings when you can bid outside your base area for the right project size.</p>
      <div class="form-grid">
        <label>Base location
          <input name="baseLocation" data-profile-field="baseLocation" value="${escapeHtml(p.baseLocation || "")}" placeholder="Example: East Iceland" />
        </label>
        <label>Service areas, comma separated
          <input name="serviceAreas" data-profile-field="serviceAreas" data-profile-array="true" value="${escapeHtml(arrayFieldText(p.serviceAreas))}" placeholder="Example: East Iceland, All Iceland" />
        </label>
      </div>
      <div class="checkbox-grid">
        ${locationOptions.map((loc) => `
          <label class="checkbox">
            <input type="checkbox" name="locations" value="${loc}" data-profile-location ${(p.locations || []).includes(loc) ? "checked" : ""} />
            <span>${loc}</span>
          </label>
        `).join("")}
      </div>
      <div class="profile-travel-panel">
        <h3>Travel and scope</h3>
        <div class="profile-travel-grid">
          <label class="checkbox inline"><input type="checkbox" name="willingToTravel" data-profile-field="willingToTravel" ${p.willingToTravel ? "checked" : ""} /><span>Willing to travel for the right project</span></label>
          <label class="checkbox inline"><input type="checkbox" name="nationalProjects" data-profile-field="nationalProjects" ${p.nationalProjects ? "checked" : ""} /><span>Include national / All Iceland opportunities</span></label>
          <label class="checkbox inline"><input type="checkbox" name="remoteProjects" data-profile-field="remoteProjects" ${p.remoteProjects ? "checked" : ""} /><span>Include remote / online opportunities</span></label>
          <label>Minimum project value for travel
            <input name="minimumProjectValueForTravel" type="number" data-profile-field="minimumProjectValueForTravel" data-profile-number="true" value="${p.minimumProjectValueForTravel || ""}" />
          </label>
        </div>
      </div>
    </div>
  `;
}

function renderProfileValueSection() {
  const p = state.profileDraft || getEmptyProfile();
  return `
    <div class="form-section">
      <h2>4. Project size</h2>
      <div class="form-grid">
        <label>Minimum value<input name="minProjectValue" type="number" data-profile-field="minProjectValue" data-profile-number="true" value="${p.minProjectValue || ""}" /></label>
        <label>Maximum value<input name="maxProjectValue" type="number" data-profile-field="maxProjectValue" data-profile-number="true" value="${p.maxProjectValue || ""}" /></label>
      </div>
      <label class="checkbox inline">
        <input type="checkbox" name="allowUnknownValue" data-profile-field="allowUnknownValue" ${p.allowUnknownValue ? "checked" : ""} />
        <span>Show opportunities even if value is unknown</span>
      </label>
    </div>
  `;
}

function renderProfileReportsSection() {
  const p = state.profileDraft || getEmptyProfile();
  return `
    <div class="form-section">
      <h2>5. Report preferences</h2>
      <div class="form-grid">
        <label>Frequency
          <select name="reportFrequency" data-profile-field="reportFrequency">
            <option ${p.reportFrequency === "weekly" ? "selected" : ""} value="weekly">Weekly</option>
            <option ${p.reportFrequency === "daily" ? "selected" : ""} value="daily">Daily</option>
          </select>
        </label>
        <label>Report day
          <select name="reportDay" data-profile-field="reportDay">
            ${["monday", "tuesday", "wednesday", "thursday", "friday"].map((x) => `<option ${p.reportDay === x ? "selected" : ""} value="${x}">${capitalize(x)}</option>`).join("")}
          </select>
        </label>
      </div>
      <label class="checkbox inline"><input type="checkbox" name="deadlineReminders" data-profile-field="deadlineReminders" ${p.deadlineReminders ? "checked" : ""} /><span>Deadline reminders</span></label>
      <label class="checkbox inline"><input type="checkbox" name="includeLowConfidence" data-profile-field="includeLowConfidence" ${p.includeLowConfidence ? "checked" : ""} /><span>Include low-confidence matches</span></label>
    </div>
  `;
}

function renderProfileFormActions() {
  return `
    <div class="form-actions">
      <button
        type="submit"
        class="btn btn-primary btn-large"
        ${state.isSavingProfile ? "disabled" : ""}
      >
        ${state.isSavingProfile ? "Saving..." : state.profileSaved ? "Saved" : "Save profile"}
      </button>
    </div>
    ${state.profileSaveMessage ? `
      <div class="form-message success">
        ${escapeHtml(state.profileSaveMessage)}
      </div>
    ` : ""}
    ${state.profileSaveError ? `
      <div class="form-message error">
        ${escapeHtml(state.profileSaveError)}
      </div>
    ` : ""}
  `;
}

function getFilterOptions(key) {
  if (key === "industry") {
    return [
      "Construction",
      "Electrical",
      "Cleaning",
      "IT / Web / Software",
      "Architecture / Engineering",
      "Consulting",
      "Transport",
      "Equipment / Machinery",
      "Landscaping",
      "Security",
      "Other"
    ].map((industry) => ({ value: industry, label: industry }));
  }

  if (key === "label") {
    return [
      { value: "strong", label: "Strong only" },
      { value: "recommended", label: "Recommended" },
      { value: "all", label: "All matches" },
      { value: "all_opportunities", label: "All opportunities" },
      { value: "needs_review", label: "Needs review" },
      { value: "possible", label: "Possible matches" },
      ...["Good match", "Weak match"].map((value) => ({ value, label: value }))
    ];
  }

  if (key === "category") {
    return [
      { value: "all", label: "All categories" },
      ...categories().map((value) => ({ value, label: value }))
    ];
  }

  if (key === "location") {
    return [
      { value: "all", label: "All locations" },
      ...locations().map((value) => ({ value, label: value }))
    ];
  }

  if (key === "type") {
    return [
      { value: "all", label: "All types" },
      ...types().map((value) => ({ value, label: capitalize(value.replace("-", " ")) }))
    ];
  }

  return [];
}

function getSelectedFilterIndex(key) {
  const options = getFilterOptions(key);
  const selectedValue = key === "industry" ? (state.profileDraft?.industry || state.profile?.industry || "") : state.filters[key];
  const index = options.findIndex((option) => option.value === selectedValue);
  return Math.max(0, index);
}

function getFilterLabel(key) {
  const options = getFilterOptions(key);
  const selectedValue = key === "industry" ? (state.profileDraft?.industry || state.profile?.industry || "") : state.filters[key];
  return options.find((option) => option.value === selectedValue)?.label || (key === "industry" ? "Select industry" : options[0]?.label) || "";
}

function renderFilterDropdown(key) {
  return renderCustomDropdown({
    key,
    value: state.filters[key],
    options: getFilterOptions(key)
  });
}

function renderCustomDropdown({ key, value, options, profileField = "" }) {
  const isOpen = state.dropdown.openKey === key;
  const selectedValue = value;
  const selectedIndex = Math.max(0, options.findIndex((option) => option.value === selectedValue));
  const focusedIndex = isOpen ? state.dropdown.focusedIndex : selectedIndex;
  const triggerId = `filter-${key}-trigger`;
  const listId = `filter-${key}-list`;
  const selectedLabel = options.find((option) => option.value === selectedValue)?.label || (key === "industry" ? "Select industry" : options[0]?.label) || "";

  return `
    <div class="custom-select ${isOpen ? "is-open" : ""}" data-key="${key}">
      <button
        type="button"
        id="${triggerId}"
        class="custom-select-trigger"
        data-action="toggle-dropdown"
        data-key="${key}"
        aria-haspopup="listbox"
        aria-expanded="${isOpen}"
        aria-controls="${listId}"
      >
        <span>${escapeHtml(selectedLabel)}</span>
        <span class="custom-select-arrow" aria-hidden="true"></span>
      </button>
      ${isOpen ? `
        <div class="custom-select-menu" id="${listId}" role="listbox" aria-labelledby="${triggerId}">
          ${options.map((option, index) => {
            const selected = option.value === selectedValue;
            const focused = index === focusedIndex;
            return `
              <button
                type="button"
                class="custom-select-option ${selected ? "is-selected" : ""} ${focused ? "is-focused" : ""}"
                data-action="select-filter"
                data-key="${key}"
                data-value="${escapeHtml(option.value)}"
                ${profileField ? `data-profile-field="${escapeHtml(profileField)}"` : ""}
                role="option"
                aria-selected="${selected}"
              >
                <span>${escapeHtml(option.label)}</span>
                ${selected ? `<span class="custom-select-check" aria-hidden="true">✓</span>` : ""}
              </button>
            `;
          }).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function closeDropdown() {
  state.dropdown.openKey = null;
  state.dropdown.focusedIndex = 0;
  render();
}

function focusDropdownOption() {
  requestAnimationFrame(() => {
    document.querySelector(".custom-select-option.is-focused")?.focus();
  });
}

function focusDropdownTrigger(key) {
  requestAnimationFrame(() => {
    document.querySelector(`[data-action="toggle-dropdown"][data-key="${key}"]`)?.focus();
  });
}

function renderDashboard() {
  if (!state.user) return requireAuthPage();

  if (!state.profile) {
    return requireProfilePage(
      "Create a profile first",
      "The dashboard needs a company profile so it can calculate opportunity matches."
    );
  }

  const matches = getFilteredMatches();
  const allMatches = getStoredDashboardMatches();
  const availableOpportunities = getAvailableDashboardOpportunities();
  const strong = allMatches.filter((o) => o.matchScore >= 85).length;
  const closingSoon = allMatches.filter((o) => daysUntilDeadline(o.deadline) <= 14 && daysUntilDeadline(o.deadline) >= 0).length;
  const savedCount = state.saved.length;
  const totalValue = allMatches.filter((o) => o.matchScore >= 65).reduce((sum, o) => sum + (o.estimatedValue || 0), 0);
  const recommendedCount = allMatches.filter(isRecommendedDashboardMatch).length;
  const filterSummary = getDashboardFilterSummary({
    visibleCount: matches.length,
    storedMatchCount: allMatches.length,
    availableCount: availableOpportunities.length,
    recommendedCount,
    companyName: state.profile.companyName,
  });
  const matchRefreshText = state.lastMatchedAt
    ? `Last refreshed ${formatDateTime(state.lastMatchedAt)}.`
    : "Matches refresh automatically after profile saves.";

  return renderShell(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">Dashboard</p>
        <h1>Welcome, ${escapeHtml(state.profile.companyName)}</h1>
        <p>Ranked project opportunities based on your services, locations and keywords. ${matchRefreshText}</p>
      </div>
      <div class="dashboard-actions">
        <button class="btn btn-primary" data-action="run-matching" ${state.matchingLoading ? "disabled" : ""}>
          ${state.matchingLoading ? "Refreshing..." : "Refresh matches"}
        </button>
        <button class="btn btn-secondary" data-action="go" data-href="/report">View weekly report</button>
      </div>
    </section>

    ${state.matchStatus ? `
      <div class="admin-message ${state.matchStatus.type === "error" ? "is-error" : "is-success"}">
        ${escapeHtml(state.matchStatus.text)}
      </div>
    ` : ""}

    ${state.opportunityLoadError ? `
      <div class="note-panel">
        ${escapeHtml(state.opportunityLoadError)}
      </div>
    ` : ""}

    <section class="stats-grid">
      <div class="stat-card"><span>Strong matches</span><strong>${strong}</strong></div>
      <div class="stat-card"><span>Closing soon</span><strong>${closingSoon}</strong></div>
      <div class="stat-card"><span>Saved</span><strong>${savedCount}</strong></div>
      <div class="stat-card"><span>Total potential value</span><strong>${formatISK(totalValue)}</strong></div>
    </section>

    <section class="filters">
      <input data-filter="search" value="${escapeHtml(state.filters.search)}" placeholder="Search opportunities..." />
      ${renderFilterDropdown("label")}
      ${renderFilterDropdown("category")}
      ${renderFilterDropdown("location")}
      ${renderFilterDropdown("type")}
      <label class="checkbox compact"><input type="checkbox" data-filter="savedOnly" ${state.filters.savedOnly ? "checked" : ""}/><span>Saved only</span></label>
    </section>

    <div class="note-panel dashboard-filter-summary">
      ${escapeHtml(filterSummary)}
    </div>

    <section class="opportunity-list">
      ${matches.length ? matches.map(renderOpportunityCard).join("") : renderDashboardEmptyState(state.profile, state.filters.label, {
        availableCount: availableOpportunities.length,
        storedMatchCount: allMatches.length,
        recommendedCount,
      })}
    </section>
  `);
}

function getDashboardProfileSuggestions(profile) {
  const suggestions = [];
  const locations = Array.isArray(profile?.locations) ? profile.locations : [];
  const services = Array.isArray(profile?.services) ? profile.services : [];
  const includeKeywords = Array.isArray(profile?.includeKeywords) ? profile.includeKeywords : [];
  const excludeKeywords = Array.isArray(profile?.excludeKeywords) ? profile.excludeKeywords : [];
  const hasAllIceland = locations.some((location) => normalizeLocationText(location) === "all iceland");
  const excludesReykjavik = excludeKeywords.some((keyword) => {
    const normalized = normalizeLocationText(keyword);
    return normalized.includes("reykjavik") || normalized.includes("capital area");
  });

  if (!hasAllIceland) {
    suggestions.push("Add All Iceland to catch national tenders and framework agreements.");
  }
  if (!profile?.nationalProjects) {
    suggestions.push("Enable national projects so All Iceland opportunities appear as possible matches.");
  }
  if (services.length < 5) {
    suggestions.push("Add more specific services so VerkRadar can recognize notices that fit your work.");
  }
  if (excludesReykjavik) {
    suggestions.push("Review exclude keywords for Reykjavík or Capital Area. They may hide tenders that companies outside Reykjavík can still bid on.");
  }
  if (includeKeywords.length < 4) {
    suggestions.push("Add more include keywords, including Icelandic terms buyers may use in notices.");
  }

  if (!suggestions.length) {
    suggestions.push("Review services, locations and keywords to make sure they describe the work you actually want to bid on.");
  }

  return suggestions;
}

function getDashboardEmptyCopy(filter, context = {}) {
  if (filter === "all") {
    return {
      eyebrow: "No matches",
      title: "No stored matches yet.",
      body: "Refresh matches or broaden your profile to create stored opportunity matches."
    };
  }
  if (filter === "all_opportunities") {
    return {
      eyebrow: "No opportunities",
      title: "No available opportunities yet.",
      body: "Import more sources or check Admin source coverage."
    };
  }
  if (filter === "needs_review") {
    return {
      eyebrow: "No needs-review items",
      title: "No needs-review opportunities right now.",
      body: "Broad-feed opportunities that need manual verification will appear here."
    };
  }
  if (filter === "strong") {
    return {
      eyebrow: "No strong matches",
      title: "No strong matches yet.",
      body: "You may still have useful possible matches. Switch to Recommended or All matches to review them."
    };
  }
  if (filter === "possible" || filter === "Possible match" || filter === "Weak match") {
    return {
      eyebrow: "No possible matches",
      title: "No possible matches yet.",
      body: "Try broadening your services, locations or keywords to find lower-confidence opportunities."
    };
  }
  return {
    eyebrow: "No recommended matches",
    title: `No recommended matches for ${context.companyName || "this profile"} yet.`,
    body: `${Number(context.availableCount || 0)} opportunities are available in the system, but none match this profile strongly enough.`
  };
}

function renderDashboardEmptyState(profile, filter = state.filters.label, context = {}) {
  const suggestions = getDashboardProfileSuggestions(profile);
  const copy = getDashboardEmptyCopy(filter, {
    ...context,
    companyName: profile?.companyName,
  });
  return `
    <div class="dashboard-empty-state">
      <div>
        <p class="eyebrow">${escapeHtml(copy.eyebrow)}</p>
        <h2>${escapeHtml(copy.title)}</h2>
        <p>${escapeHtml(copy.body)}</p>
      </div>
      <ul>
        ${suggestions.map((suggestion) => `<li>${escapeHtml(suggestion)}</li>`).join("")}
      </ul>
      <div class="dashboard-empty-actions">
        <button class="btn btn-primary" type="button" data-action="go" data-href="/settings">Improve profile</button>
        <button class="btn btn-secondary" type="button" data-action="include-national-opportunities">Include national opportunities</button>
        <button class="btn btn-secondary" type="button" data-action="show-all-matches">Show all stored matches</button>
        <button class="btn btn-secondary" type="button" data-action="show-all-opportunities">Inspect all opportunities</button>
      </div>
    </div>
  `;
}

function renderOpportunityCard(opp) {
  const saved = state.saved.includes(opp.id);
  const days = daysUntilDeadline(opp.deadline);
  const deadline = getDeadlineDisplay(opp.deadline);
  return `
    <article class="opportunity-card">
      <div class="opp-main">
        <div class="opp-top">
          <div class="opportunity-badges">
            <span class="source-pill source-badge">${escapeHtml(opp.source)}</span>
            ${renderQualityBadge(opp)}
            ${isTedOpportunity(opp) ? `<span class="source-pill source-badge muted-badge">Original language</span>` : ""}
          </div>
          <span class="${badgeClass(opp.matchLabel)}">${opp.matchLabel} · ${opp.matchScore}</span>
        </div>
        <h3>${escapeHtml(opp.title)}</h3>
        <p>${escapeHtml(opp.description)}</p>
        <div class="meta-row">
          <span>${escapeHtml(opp.buyer)}</span>
          <span>${escapeHtml(opp.location)}</span>
          <span>${formatISK(opp.estimatedValue)}</span>
          <span class="${deadline.className}">${escapeHtml(deadline.label)}</span>
        </div>
        <div class="reason-row">
          ${opp.matchReasons.slice(0, 3).map((r) => `<span>${escapeHtml(r)}</span>`).join("")}
        </div>
      </div>
      <div class="opp-actions">
        <button class="btn btn-secondary" data-action="details" data-id="${opp.id}">Details</button>
        <button class="btn ${saved ? "btn-primary" : "btn-secondary"}" data-action="save" data-id="${opp.id}">${saved ? "Saved" : "Save"}</button>
        <button class="btn btn-ghost" data-action="ignore" data-id="${opp.id}">Ignore</button>
      </div>
    </article>
  `;
}

function isTedOpportunity(opp) {
  return /ted|tenders electronic daily/i.test(String(opp.source || ""));
}

function formatQualityStatus(status) {
  const value = normalizeOpportunityQualityStatus(status);
  const labels = {
    confirmed_tender: "Confirmed tender",
    early_signal: "Early signal",
    needs_review: "Needs review"
  };
  return labels[value] || capitalize(value.replace(/_/g, " "));
}

function renderQualityBadge(opp) {
  const status = normalizeOpportunityQualityStatus(opp.qualityStatus, opp);
  return `<span class="source-pill source-badge quality-badge ${escapeHtml(status)}">${escapeHtml(formatQualityStatus(status))}</span>`;
}

function renderQualityWarning(opp) {
  if (normalizeOpportunityQualityStatus(opp.qualityStatus, opp) !== "needs_review") return "";
  return `<div class="note-panel quality-warning">Imported from broad feed — verify source page.</div>`;
}

function renderOpportunityModal(opp) {
  const saved = state.saved.includes(opp.id);
  const deadline = getDeadlineDisplay(opp.deadline);
  return `
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <div class="opportunity-badges">
              <span class="${badgeClass(opp.matchLabel)}">${opp.matchLabel} · ${opp.matchScore}</span>
              ${renderQualityBadge(opp)}
            </div>
            <h2>${escapeHtml(opp.title)}</h2>
            <p>${escapeHtml(opp.buyer)} · ${escapeHtml(opp.location)} · ${formatISK(opp.estimatedValue)}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-modal" aria-label="Close details">×</button>
        </div>

        <div class="modal-body">
          <div class="modal-grid">
            <section>
              ${renderQualityWarning(opp)}
              <h3>Description</h3>
              <p>${escapeHtml(opp.description || "No description available.")}</p>
              <h3>Requirements</h3>
              <ul class="check-list">
                ${(opp.requirements.length ? opp.requirements : ["No specific requirements listed."]).map((r) => `<li>${escapeHtml(r)}</li>`).join("")}
              </ul>
              <h3>Match reasons</h3>
              <ul class="check-list">
                ${(opp.matchReasons.length ? opp.matchReasons : ["No match reasons available."]).map((r) => `<li>${escapeHtml(r)}</li>`).join("")}
              </ul>
            </section>

            <aside class="side-panel">
              <h3>Opportunity info</h3>
              <p><strong>Source:</strong> ${escapeHtml(opp.source)}</p>
              <p><strong>Quality:</strong> ${escapeHtml(formatQualityStatus(opp.qualityStatus))}</p>
              <p><strong>Category:</strong> ${escapeHtml(opp.category)}</p>
              <p><strong>Type:</strong> ${escapeHtml(opp.type)}</p>
              <p><strong>Deadline:</strong> <span class="${deadline.className}">${escapeHtml(deadline.label)}</span></p>
              <p><strong>Published:</strong> ${escapeHtml(opp.publishedDate)}</p>
              <p><strong>CPV:</strong> ${escapeHtml(opp.cpvCode || "—")}</p>

              <h3>Risks / things to check</h3>
              <ul class="risk-list">
                ${(opp.risks.length ? opp.risks : ["No major risks detected in this demo data."]).map((r) => `<li>${escapeHtml(r)}</li>`).join("")}
              </ul>

              <h3>Recommended next steps</h3>
              <ol class="steps-list">
                ${(opp.nextSteps.length ? opp.nextSteps : ["Open the source notice and confirm eligibility."]).map((s) => `<li>${escapeHtml(s)}</li>`).join("")}
              </ol>

              <div class="button-stack">
                <button class="btn btn-primary" data-action="save" data-id="${opp.id}">${saved ? "Remove from saved" : "Save opportunity"}</button>
                <a class="btn btn-secondary" href="${escapeHtml(opp.url)}" target="_blank" rel="noreferrer">Open source</a>
                <button class="btn btn-ghost" data-action="ignore" data-id="${opp.id}">Mark not relevant</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAdmin() {
  if (!state.user) return requireAuthPage();
  if (!state.isAdmin) return requireAdminPage();

  const opportunities = getFilteredAdminOpportunities();
  const selectedCompany = state.adminCompanies.find((company) => company.id === state.selectedAdminCompanyId);

  return renderShell(`
    <section class="page-head">
      <p class="eyebrow">Admin</p>
      <h1>Operations dashboard</h1>
      <p>Admin tools for monitoring imports, reviewing customers, managing sources and handling manual entries.</p>
    </section>

    ${state.adminMessage ? `
      <div class="admin-message ${state.adminMessage.type === "error" ? "is-error" : "is-success"}">
        ${escapeHtml(state.adminMessage.text)}
      </div>
    ` : ""}

    ${state.opportunityLoadError ? `
      <div class="note-panel">
        ${escapeHtml(state.opportunityLoadError)}
      </div>
    ` : ""}

    ${renderAdminTabs()}
    ${renderAdminActiveTab(opportunities)}
    ${selectedCompany ? renderAdminCompanyDetails(selectedCompany) : ""}
  `);
}

function renderAdminTabs() {
  const tabs = [
    ["overview", "Overview"],
    ["companies", "Companies"],
    ["sources", "Sources/imports"],
    ["opportunities", "Opportunities"],
    ["reports", "Reports"]
  ];
  return `
    <div class="admin-tabs" role="tablist" aria-label="Admin sections">
      ${tabs.map(([key, label]) => `
        <button type="button" class="${state.adminActiveTab === key ? "is-active" : ""}" data-action="admin-tab" data-tab="${key}">
          ${escapeHtml(label)}
        </button>
      `).join("")}
    </div>
  `;
}

function renderAdminActiveTab(opportunities) {
  if (state.adminActiveTab === "companies") return renderAdminCompaniesSection();
  if (state.adminActiveTab === "sources") {
    return `
      ${renderAutomationStatusCard()}
      ${renderAutomationActions()}
      ${renderSourceCoverageSection()}
      ${renderLatestImportRunsTable()}
      ${renderLatestTedOpportunities()}
    `;
  }
  if (state.adminActiveTab === "opportunities") return renderAdminOpportunitiesSection(opportunities);
  if (state.adminActiveTab === "reports") return renderLatestGeneratedReports();
  return `
    ${renderAdminOverview()}
    ${renderAutomationStatusCard()}
    ${renderAdminCompaniesSection(true)}
  `;
}

function renderAdminOverview() {
  const companies = state.adminCompanies || [];
  const opportunities = state.opportunities || [];
  const latest = getLatestImportRun();
  const completeCompanies = companies.filter((company) => company.profileStatus === "Complete").length;
  const incompleteCompanies = Math.max(0, companies.length - completeCompanies);
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Admin overview</h2>
          <p>Customer, opportunity and automation health at a glance.</p>
        </div>
      </div>
      <div class="ops-metrics admin-overview-metrics">
        <div><span>Total companies</span><strong>${companies.length}</strong></div>
        <div><span>Completed profiles</span><strong>${completeCompanies}</strong></div>
        <div><span>Incomplete profiles</span><strong>${incompleteCompanies}</strong></div>
        <div><span>Stored opportunities</span><strong>${opportunities.length}</strong></div>
        <div><span>Confirmed tenders</span><strong>${opportunities.filter((opp) => normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "confirmed_tender").length}</strong></div>
        <div><span>Early signals</span><strong>${opportunities.filter((opp) => normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "early_signal").length}</strong></div>
        <div><span>Needs review</span><strong>${opportunities.filter((opp) => normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "needs_review").length}</strong></div>
        <div><span>Latest import status</span><strong>${escapeHtml(latest?.status || "No runs")}</strong></div>
      </div>
    </section>
  `;
}

function getFilteredAdminCompanies() {
  const filters = state.adminCompanyFilters;
  return (state.adminCompanies || []).filter((company) => {
    const search = normalizeLocationText(filters.search);
    if (search) {
      const haystack = normalizeLocationText(`${company.companyName} ${company.contactEmail} ${company.industry}`);
      if (!haystack.includes(search)) return false;
    }
    if (filters.industry !== "all" && company.industry !== filters.industry) return false;
    if (filters.profileStatus !== "all" && company.profileStatus !== filters.profileStatus) return false;
    if (filters.plan !== "all" && company.plan !== filters.plan) return false;
    return true;
  });
}

function renderAdminCompaniesSection(compact = false) {
  const companies = compact ? (state.adminCompanies || []).slice(0, 5) : getFilteredAdminCompanies();
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Companies / users</h2>
          <p>${state.adminCompaniesLoading ? "Loading companies..." : `${companies.length} shown from ${(state.adminCompanies || []).length} total companies.`}</p>
        </div>
      </div>
      ${state.adminCompaniesError ? `<div class="admin-message is-error">${escapeHtml(state.adminCompaniesError)}</div>` : ""}
      ${compact ? "" : renderAdminCompanyFilters()}
      ${state.adminCompaniesLoading && !companies.length ? `<div class="empty-card">Loading companies...</div>` : companies.length ? `
        <div class="ops-table-wrap">
          <table class="ops-table admin-companies-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Industry</th>
                <th>Plan</th>
                <th>Profile</th>
                <th>Created</th>
                <th>Matches</th>
                <th>Saved</th>
                <th>Last report</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${companies.map(renderAdminCompanyRow).join("")}
            </tbody>
          </table>
        </div>
      ` : `<div class="empty-card">No companies found.</div>`}
    </section>
  `;
}

function renderAdminCompanyFilters() {
  const companies = state.adminCompanies || [];
  const industries = getAdminFilterOptions(companies, (company) => company.industry);
  const plans = getAdminFilterOptions(companies, (company) => company.plan);
  const filters = state.adminCompanyFilters;
  return `
    <div class="admin-filters admin-company-filters">
      <input data-admin-company-filter="search" value="${escapeHtml(filters.search)}" placeholder="Search company or email..." />
      <select data-admin-company-filter="industry">
        <option value="all">All industries</option>
        ${industries.map((industry) => `<option value="${escapeHtml(industry)}" ${filters.industry === industry ? "selected" : ""}>${escapeHtml(industry)}</option>`).join("")}
      </select>
      <select data-admin-company-filter="profileStatus">
        <option value="all">All profiles</option>
        ${["Complete", "Incomplete"].map((status) => `<option value="${status}" ${filters.profileStatus === status ? "selected" : ""}>${status}</option>`).join("")}
      </select>
      <select data-admin-company-filter="plan">
        <option value="all">All plans</option>
        ${plans.map((plan) => `<option value="${escapeHtml(plan)}" ${filters.plan === plan ? "selected" : ""}>${escapeHtml(plan)}</option>`).join("")}
      </select>
    </div>
  `;
}

function renderAdminCompanyRow(company) {
  return `
    <tr>
      <td><strong>${escapeHtml(company.companyName)}</strong><br><span>${escapeHtml(company.contactEmail || "No email")}</span></td>
      <td>${escapeHtml(company.industry || "Unknown")}</td>
      <td>${escapeHtml(company.plan || "Demo")}</td>
      <td><span class="status-pill ${company.profileStatus === "Complete" ? "is-success" : "is-running"}">${escapeHtml(company.profileStatus)}</span></td>
      <td>${escapeHtml(formatDateTime(company.createdAt))}</td>
      <td>${company.matchCount}</td>
      <td>${company.savedCount ? company.savedCount : "Not tracked"}</td>
      <td>${company.latestReportDate ? escapeHtml(formatDateTime(company.latestReportDate)) : "No reports"}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-company" data-id="${escapeHtml(company.id)}">View details</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-refresh-company-matches" data-id="${escapeHtml(company.id)}">Refresh matches</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-generate-company-report" data-id="${escapeHtml(company.id)}">Generate report</button>
        </div>
      </td>
    </tr>
  `;
}

function renderAdminOpportunitiesSection(opportunities) {
  return `
    <form class="form-card admin-form" id="admin-opportunity-form">
      <div class="form-section">
        <h2>Add opportunity</h2>
        <div class="form-grid">
          <label>Title <input name="title" required /></label>
          <label>Buyer <input name="buyer" /></label>
          <label>Source name <input name="sourceName" required /></label>
          <label>Category <input name="category" /></label>
          <label>Type <input name="type" value="tender" /></label>
          <label>Deadline <input type="date" name="deadline" /></label>
          <label>Published date <input type="date" name="published_date" /></label>
          <label>Location <input name="location" /></label>
          <label>Estimated value <input type="number" min="0" step="1" name="estimated_value" /></label>
          <label>URL <input type="url" name="url" /></label>
          <label>CPV code <input name="cpv_code" /></label>
          <label>Difficulty <input name="difficulty" value="medium" /></label>
          <label>Status <input name="status" value="open" /></label>
        </div>
        <label>Description <textarea name="description" rows="4"></textarea></label>
        <label>Requirements comma-separated <textarea name="requirements" rows="3"></textarea></label>
        <label>Keywords comma-separated <textarea name="keywords" rows="3"></textarea></label>
      </div>

      <div class="form-actions">
        <button class="btn btn-primary btn-large" type="submit" ${state.adminSubmitting ? "disabled" : ""}>
          ${state.adminSubmitting ? "Saving..." : "Add opportunity"}
        </button>
      </div>
    </form>

    <section class="admin-list">
      <div class="card-header">
        <div>
          <h2>Existing opportunities</h2>
          <p>${(state.opportunities || []).length} loaded ${state.opportunityLoadError ? "from fallback data" : "from Supabase"}.</p>
        </div>
      </div>
      ${renderAdminOpportunityFilters(opportunities)}
      ${opportunities.length ? opportunities.map(renderAdminOpportunityRow).join("") : `<div class="empty-card">No opportunities loaded.</div>`}
    </section>
  `;
}

function renderAdminCompanyDetails(company) {
  const projectRange = [
    company.minProjectValue ? formatISK(company.minProjectValue) : "No minimum",
    company.maxProjectValue ? formatISK(company.maxProjectValue) : "No maximum"
  ].join(" - ");
  const safeWebsite = getSafeExternalUrl(company.website);
  return `
    <div class="modal-backdrop">
      <div class="modal admin-company-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill ${company.profileStatus === "Complete" ? "is-success" : "is-running"}">${escapeHtml(company.profileStatus)}</span>
            <h2>${escapeHtml(company.companyName)}</h2>
            <p>${escapeHtml(company.contactEmail || "No contact email")} · ${escapeHtml(company.industry || "Unknown industry")}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-company" aria-label="Close company details">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-detail-grid">
            <section class="side-panel">
              <h3>Company basics</h3>
              <p><strong>Email:</strong> ${escapeHtml(company.contactEmail || "Unknown")}</p>
              <p><strong>Website:</strong> ${safeWebsite ? `<a href="${escapeHtml(safeWebsite)}" target="_blank" rel="noreferrer">${escapeHtml(company.website)}</a>` : escapeHtml(company.website || "Not listed")}</p>
              <p><strong>Industry:</strong> ${escapeHtml(company.industry || "Unknown")}</p>
              <p><strong>Plan:</strong> ${escapeHtml(company.plan || "Demo")}</p>
              <p><strong>Created:</strong> ${escapeHtml(formatDateTime(company.createdAt))}</p>

              <h3>Project preferences</h3>
              <p><strong>Project size:</strong> ${escapeHtml(projectRange)}</p>
              <p><strong>Unknown value:</strong> ${company.allowUnknownValue ? "Allowed" : "Not preferred"}</p>
              <p><strong>Travel:</strong> ${company.willingToTravel ? "Yes" : "No"}</p>
              <p><strong>National:</strong> ${company.nationalProjects ? "Yes" : "No"}</p>
              <p><strong>Remote:</strong> ${company.remoteProjects ? "Yes" : "No"}</p>
            </section>

            <section class="side-panel">
              <h3>Services</h3>
              ${renderAdminTagList(company.services, "No services saved.")}
              <h3>Include keywords</h3>
              ${renderAdminTagList(company.includeKeywords, "No include keywords saved.")}
              <h3>Exclude keywords</h3>
              ${renderAdminTagList(company.excludeKeywords, "No exclude keywords saved.")}
            </section>

            <section class="side-panel">
              <h3>Locations and service areas</h3>
              <p><strong>Base:</strong> ${escapeHtml(company.baseLocation || "Not set")}</p>
              ${renderAdminTagList([...company.locations, ...company.serviceAreas], "No locations saved.")}
              <h3>Reports</h3>
              <p><strong>Frequency:</strong> ${escapeHtml(company.reportFrequency)}</p>
              <p><strong>Day:</strong> ${escapeHtml(company.reportDay)}</p>
              <p><strong>Deadline reminders:</strong> ${company.deadlineReminders ? "On" : "Off"}</p>
            </section>

            <section class="side-panel">
              <h3>Latest matches</h3>
              ${company.latestMatches.length ? `
                <ul class="admin-detail-list">
                  ${company.latestMatches.map((match) => `
                    <li>
                      <strong>${escapeHtml(match.opportunities?.title || "Opportunity")}</strong>
                      <span>${Number(match.match_score || 0)} · ${escapeHtml(match.match_label || getMatchLabel(Number(match.match_score || 0)))}</span>
                    </li>
                  `).join("")}
                </ul>
              ` : `<p>No stored matches yet.</p>`}
              <h3>Latest reports</h3>
              ${company.latestReports.length ? `
                <ul class="admin-detail-list">
                  ${company.latestReports.map((report) => `
                    <li>
                      <strong>${escapeHtml(report.title || "Report")}</strong>
                      <span>${escapeHtml(formatDateTime(report.created_at))}</span>
                    </li>
                  `).join("")}
                </ul>
              ` : `<p>No reports generated yet.</p>`}
            </section>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAdminTagList(values, emptyText) {
  const items = cleanStringArray(values);
  if (!items.length) return `<p>${escapeHtml(emptyText)}</p>`;
  return `<div class="admin-tag-list">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`;
}

function renderAdminOpportunityRow(opp) {
  return `
    <div class="admin-row">
      <div>
        <h3>${escapeHtml(opp.title)}</h3>
        <p>${escapeHtml(opp.buyer)} · ${escapeHtml(opp.source)} · ${escapeHtml(opp.location)} · ${escapeHtml(opp.status)}</p>
        <p>Quality: ${escapeHtml(formatQualityStatus(opp.qualityStatus))}</p>
      </div>
      <button
        class="btn btn-ghost"
        data-action="delete-opportunity"
        data-id="${escapeHtml(opp.id)}"
        ${state.adminDeletingId === opp.id ? "disabled" : ""}
      >
        ${state.adminDeletingId === opp.id ? "Deleting..." : "Delete"}
      </button>
    </div>
  `;
}

function renderReport() {
  if (!state.user) return requireAuthPage();

  if (!state.profile) {
    return requireProfilePage(
      "Create a profile first",
      "The report needs a company profile so it can generate relevant opportunity matches."
    );
  }

  const profile = state.profile;
  const matches = getReportMatches();
  const report = buildReportContent(profile, matches);
  const selectedReport = state.reports.find((item) => item.id === state.selectedReportId);
  const archiveStatus = state.reportArchiveLoading
    ? "Loading saved reports..."
    : `${state.reports.length} saved report${state.reports.length === 1 ? "" : "s"}.`;
  const archiveContent = state.reportArchiveLoading
    ? `<div class="empty-card">Loading saved reports...</div>`
    : state.reportsLoadError
      ? `<div class="admin-message is-error">Failed to load reports. ${escapeHtml(state.reportsLoadError)}</div>`
      : state.reportsLoaded && state.reports.length === 0
        ? `<div class="empty-card">No saved reports yet.</div>`
        : state.reports.map(renderReportArchiveRow).join("");

  return renderShell(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">Weekly report</p>
        <h1>Weekly Opportunity Report</h1>
        <p>${escapeHtml(profile.companyName || "Your company")} · ${escapeHtml(formatReportDateRange(report.periodStart, report.periodEnd))}</p>
      </div>
      <div class="dashboard-actions">
        <button class="btn btn-primary" data-action="save-report" ${state.reportSaveLoading ? "disabled" : ""}>
          ${state.reportSaveLoading ? "Saving..." : "Save report"}
        </button>
        <button class="btn btn-secondary" data-action="copy-report">Copy report</button>
      </div>
    </section>

    ${state.reportMessage ? `
      <div class="admin-message ${state.reportMessage.type === "error" ? "is-error" : "is-success"}">
        ${escapeHtml(state.reportMessage.text)}
      </div>
    ` : ""}

    ${renderReportPreview(report, {
      id: "report-preview",
      contactEmail: profile.contactEmail,
      companyName: profile.companyName
    })}

    <section class="report-archive">
      <div class="card-header">
        <div>
          <p class="eyebrow">Report archive</p>
          <h2>Saved reports</h2>
          <p>${archiveStatus}</p>
        </div>
      </div>
      ${archiveContent}
    </section>

    ${selectedReport ? renderSavedReportPreview(selectedReport, profile) : ""}
  `);
}

function renderReportArchiveRow(report) {
  const itemCount = Array.isArray(report.report_items) ? report.report_items.length : Number(report.itemCount || 0);
  return `
    <div class="report-archive-row">
      <div>
        <h3>${escapeHtml(report.title || "Untitled report")}</h3>
        <p>${formatDateTime(report.created_at)} · ${itemCount} item${itemCount === 1 ? "" : "s"} · ${escapeHtml(report.status || "draft")}</p>
      </div>
      <button class="btn btn-secondary" data-action="view-report" data-id="${escapeHtml(report.id)}">View report</button>
    </div>
  `;
}

function renderReportPreview(report, options = {}) {
  const id = options.id ? ` id="${escapeHtml(options.id)}"` : "";
  return `
    <section class="report-preview"${id}>
      <div class="report-meta-bar">
        <div>
          <span>Generated by VerkRadar</span>
          <strong>${escapeHtml(report.title || "Weekly Opportunity Report")}</strong>
        </div>
        <div>
          <span>${escapeHtml(options.companyName || state.profile?.companyName || "Company")}</span>
          <strong>${escapeHtml(formatReportDateRange(report.periodStart, report.periodEnd))}</strong>
        </div>
      </div>
      <div class="report-body">
        ${report.htmlContent}
        ${options.closeButton ? `<button class="btn btn-secondary report-close-btn" data-action="close-archive-report">Close report</button>` : ""}
      </div>
      ${report.textContent && options.includeTextArea !== false ? `<textarea id="report-text" class="hidden-textarea">${escapeHtml(report.textContent)}</textarea>` : ""}
    </section>
  `;
}

function renderSavedReportPreview(savedReport, profile) {
  const periodStart = savedReport.period_start || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const periodEnd = savedReport.period_end || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const htmlContent = normalizeSavedReportHtml(savedReport);
  return renderReportPreview({
    title: savedReport.title || "Saved report",
    periodStart,
    periodEnd,
    htmlContent,
    textContent: savedReport.text_content || ""
  }, {
    companyName: profile.companyName,
    closeButton: true,
    includeTextArea: false
  });
}

function normalizeSavedReportHtml(savedReport) {
  if (savedReport.html_content && savedReport.html_content.includes("report-cover")) {
    return sanitizeReportHtml(savedReport.html_content);
  }

  const periodStart = savedReport.period_start || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const periodEnd = savedReport.period_end || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const fallbackContent = savedReport.html_content
    ? sanitizeReportHtml(savedReport.html_content)
    : `<pre>${escapeHtml(savedReport.text_content || "No report content was saved.")}</pre>`;
  return `
    <div class="report-cover">
      <div class="report-kicker">Generated by VerkRadar</div>
      <p class="eyebrow">Saved weekly report</p>
      <h2>${escapeHtml(savedReport.title || "Saved report")}</h2>
      <p>${escapeHtml(formatReportDateRange(periodStart, periodEnd))}</p>
      <p>${escapeHtml(savedReport.summary || "This older saved report is shown in a modern report container.")}</p>
    </div>
    <div class="report-legacy-content">
      ${fallbackContent}
    </div>
  `;
}

function sanitizeReportHtml(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(String(html || ""), "text/html");
  const allowedTags = new Set([
    "A", "ARTICLE", "DIV", "EM", "H2", "H3", "H4", "H5", "LI", "OL", "P", "PRE", "SECTION", "SPAN", "STRONG", "UL"
  ]);
  const allowedAttrs = new Set(["aria-hidden", "class", "href", "rel", "target"]);

  doc.body.querySelectorAll("*").forEach((node) => {
    if (!allowedTags.has(node.tagName)) {
      node.replaceWith(...Array.from(node.childNodes));
      return;
    }

    Array.from(node.attributes).forEach((attr) => {
      if (!allowedAttrs.has(attr.name)) {
        node.removeAttribute(attr.name);
        return;
      }
      if (attr.name === "href") {
        const safeUrl = getSafeExternalUrl(attr.value);
        if (safeUrl) node.setAttribute("href", safeUrl);
        else node.removeAttribute("href");
      }
    });
  });

  return doc.body.innerHTML;
}

function getSafeExternalUrl(value) {
  const url = String(value || "").trim();
  if (/^https?:\/\//i.test(url)) return url;
  return "";
}

function getReportMatches() {
  return getMatchedOpportunities()
    .filter((opp) => opp.matchScore >= 50 || state.saved.includes(opp.id))
    .slice(0, 12);
}

function buildReportContent(profile, matches) {
  const now = new Date();
  const periodEnd = now.toISOString().slice(0, 10);
  const start = new Date(now);
  start.setDate(start.getDate() - 7);
  const periodStart = start.toISOString().slice(0, 10);
  const title = `Weekly Opportunity Report for ${profile.companyName}`;
  const sections = getReportSections(matches);
  const summary = `${matches.length} stored matches reviewed for ${profile.companyName}.`;
  const textContent = generateWeeklyReport(profile, matches);
  const htmlContent = `
    <div class="report-cover">
      <div class="report-kicker">Generated by VerkRadar</div>
      <p class="eyebrow">Weekly opportunity report</p>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(formatReportDateRange(periodStart, periodEnd))}</p>
      <p>${escapeHtml(summary)} ${matches[0] ? `The highest-ranked item is ${escapeHtml(matches[0].title)}.` : "No report-ready matches were found for this period."}</p>
    </div>

    <div class="report-summary-grid">
      ${renderReportSummaryCard("Confirmed tenders", sections.confirmed.length)}
      ${renderReportSummaryCard("Early signals", sections.early.length)}
      ${renderReportSummaryCard("Needs review", sections.review.length)}
      ${renderReportSummaryCard("Saved opportunities", sections.saved.length)}
    </div>

    ${renderReportOpportunitySection("Confirmed tenders", "Clear procurement intent. Review source documents and decide whether to pursue.", sections.confirmed)}
    ${renderReportOpportunitySection("Early signals", "Planned work or upcoming procurement signals. Useful for pipeline planning before a tender is published.", sections.early)}
    ${renderReportOpportunitySection("Needs review", "Imported from broad feeds or lower-confidence matches. Verify source page before treating as a tender.", sections.review)}
    ${renderReportOpportunitySection("Saved", "Opportunities your team has already marked for follow-up.", sections.saved)}

    <p class="report-footer-note">VerkRadar helps prioritise public opportunity review. Always check the original source documents, deadlines, requirements and eligibility before acting.</p>
  `;

  return {
    title,
    periodStart,
    periodEnd,
    summary,
    textContent,
    htmlContent
  };
}

function formatReportDateRange(start, end) {
  return `${formatShortDate(start)} to ${formatShortDate(end)}`;
}

function getReportSections(matches) {
  const confirmed = [];
  const early = [];
  const review = [];

  matches.forEach((opp) => {
    const quality = normalizeOpportunityQualityStatus(opp.qualityStatus, opp);
    if (quality === "early_signal") early.push(opp);
    else if (quality === "needs_review") review.push(opp);
    else confirmed.push(opp);
  });

  return {
    confirmed,
    early,
    review,
    saved: matches.filter((opp) => state.saved.includes(opp.id))
  };
}

function renderReportSummaryCard(label, value) {
  return `
    <div class="report-summary-card">
      <span>${escapeHtml(label)}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function renderReportOpportunitySection(title, description, opportunities) {
  return `
    <section class="report-section">
      <div class="report-section-head">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
      </div>
      ${opportunities.length
        ? opportunities.map(renderReportOpportunityItem).join("")
        : `<div class="report-empty">No ${escapeHtml(title.toLowerCase())} in this report.</div>`}
    </section>
  `;
}

function renderReportOpportunityItem(opp) {
  const deadline = getDeadlineDisplay(opp.deadline);
  const valueKnown = Boolean(opp.estimatedValue);
  const risks = getReportRisks(opp);
  const deadlineText = opp.deadline ? deadline.label : "Not found";
  const valueText = valueKnown ? formatISK(opp.estimatedValue) : "Not listed";
  const sourceUrl = getSafeExternalUrl(opp.url);
  return `
    <article class="report-item">
      <div class="report-item-top">
        ${renderReportQualityBadge(opp)}
        <span class="${badgeClass(opp.matchLabel)}">${escapeHtml(opp.matchLabel)} · ${opp.matchScore}</span>
      </div>
      <h4>${escapeHtml(opp.title)}</h4>
      <div class="report-facts">
        <span><strong>Buyer</strong>${escapeHtml(opp.buyer)}</span>
        <span><strong>Source</strong>${escapeHtml(opp.source)}</span>
        <span><strong>Location</strong>${escapeHtml(opp.location)}</span>
        <span><strong>Deadline</strong><em>${escapeHtml(deadlineText)}</em></span>
        <span><strong>Value</strong><em>${escapeHtml(valueText)}</em></span>
      </div>
      <div class="report-detail-grid">
        <div>
          <h5>Why this matters</h5>
          <ul>${(opp.matchReasons.length ? opp.matchReasons : ["Matched to your profile by service, location or keyword overlap."]).slice(0, 4).map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}</ul>
        </div>
        <div>
          <h5>Risks / things to check</h5>
          <ul>${risks.slice(0, 5).map((risk) => `<li>${escapeHtml(risk)}</li>`).join("")}</ul>
        </div>
      </div>
      ${sourceUrl ? `<a class="report-source-link" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener">Open source <span aria-hidden="true">↗</span></a>` : `<span class="report-source-link is-disabled">Source link missing</span>`}
    </article>
  `;
}

function renderReportQualityBadge(opp) {
  const status = normalizeOpportunityQualityStatus(opp.qualityStatus, opp);
  return `<span class="report-quality ${escapeHtml(status)}">${escapeHtml(formatQualityStatus(status))}</span>`;
}

function getReportRisks(opp) {
  const risks = Array.isArray(opp.risks) && opp.risks.length
    ? [...opp.risks]
    : ["Open the source page and confirm mandatory requirements."];
  if (!opp.deadline) risks.unshift("Deadline missing — check source page.");
  if (!opp.estimatedValue) risks.push("Estimated value is not listed in the imported data.");
  if (normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "needs_review") {
    risks.push("Imported from broad feed — verify that this is a real tender or business opportunity.");
  }
  return [...new Set(risks.map((risk) => String(risk || "").trim()).filter(Boolean))];
}

function generateWeeklyReport(profile, matches) {
  const sections = getReportSections(matches);
  return `Weekly Opportunity Report for ${profile.companyName}
Date range: ${formatReportDateRange(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10), new Date().toISOString().slice(0, 10))}

Summary:
- Confirmed tenders: ${sections.confirmed.length}
- Early signals: ${sections.early.length}
- Needs review: ${sections.review.length}
- Saved opportunities: ${sections.saved.length}

${matches.length ? matches.map((opp, i) => `${i + 1}. ${opp.title}
Quality: ${formatQualityStatus(opp.qualityStatus)}
Buyer: ${opp.buyer}
Source: ${opp.source}
Location: ${opp.location}
Deadline: ${formatOpportunityDeadline(opp.deadline)}
Value: ${opp.estimatedValue ? formatISK(opp.estimatedValue) : "Not listed"}
Match: ${opp.matchScore}/100 (${opp.matchLabel})
Why this fits:
${(opp.matchReasons.length ? opp.matchReasons : ["Matched to your company profile."]).map((r) => `- ${r}`).join("\n")}
Things to check:
${getReportRisks(opp).map((r) => `- ${r}`).join("\n")}
Recommended next step:
${opp.url ? `Open source page: ${opp.url}` : "Find and verify the original source page before acting."}
`).join("\n") : "No report-ready matches were found for this period."}

VerkRadar`;
}

async function copyReport() {
  const profile = state.profile || getEmptyProfile();
  const text = generateWeeklyReport(profile, getReportMatches());

  try {
    await navigator.clipboard.writeText(text);
    showToast("Report copied", "success");
  } catch (error) {
    console.error("Failed to copy report:", error);
    showToast("Could not copy report", "error");
  }
}

function renderPricing() {
  return renderShell(`
    <section class="page-head">
      <p class="eyebrow">Pricing</p>
      <h1>Simple pricing for the MVP</h1>
      <p>Start manual-assisted, then automate as the product grows.</p>
    </section>

    <section class="pricing-grid">
      ${pricingCard("Starter", "9.900 kr", ["Weekly report", "Up to 5 matched opportunities/week", "Basic matching", "Deadline reminders", "1 company profile"])}
      ${pricingCard("Growth", "19.900 kr", ["Everything in Starter", "More sources", "AI-style summaries", "Strong/Good/Possible match labels", "Saved opportunities", "Report archive"], true)}
      ${pricingCard("Pro", "39.900 kr", ["Everything in Growth", "Tender document summaries", "Requirements checklist", "Risk warnings", "Bid preparation checklist", "Priority support"])}
    </section>
  `);
}

function pricingCard(name, price, items, highlighted = false) {
  return `
    <div class="pricing-card ${highlighted ? "highlighted" : ""}">
      ${highlighted ? `<span class="popular">Best for most businesses</span>` : ""}
      <h2>${name}</h2>
      <p class="price">${price}<span>/month</span></p>
      <ul class="check-list">
        ${items.map((i) => `<li>${i}</li>`).join("")}
      </ul>
      <button class="btn pricing-cta ${highlighted ? "btn-primary" : "btn-secondary"}" data-action="go" data-href="/onboarding">Create demo profile</button>
    </div>
  `;
}

function renderSettings() {
  if (!state.user) return requireAuthPage();

  if (state.profileLoading && !state.profile && !state.profileDraft) {
    return renderShell(`
      <section class="empty-state">
        <div class="loader-mark" aria-label="Loading company profile"></div>
        <h1>Loading company profile…</h1>
        <p>Checking your saved company profile.</p>
        <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">Retry</button>
      </section>
    `);
  }

  if (state.profileLoadError && !state.profile && !state.profileDraft) {
    return renderShell(`
      <section class="empty-state">
        <h1>Could not load Settings</h1>
        <p>${escapeHtml(state.profileLoadError)}</p>
        <button class="btn btn-primary" type="button" data-action="retry-settings-profile">Retry</button>
      </section>
    `);
  }

  if (!state.profile && !state.profileDraft) {
    return requireProfilePage(
      "Create a profile first",
      "Settings are available after you create a company profile."
    );
  }

  return renderShell(`
    <section class="page-head">
      <p class="eyebrow">Settings</p>
      <h1>Edit profile</h1>
      <p>Update your company profile and matching preferences.</p>
      ${state.profileDraftDirty ? `<div class="form-message warning">Unsaved changes</div>` : ""}
      ${state.profileLoadError ? `
        <div class="form-message error">
          ${escapeHtml(state.profileLoadError)}
          <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">Retry</button>
        </div>
      ` : ""}
    </section>
    ${renderProfileForm()}
    <section class="danger-zone">
      <h2>Reset demo</h2>
      <p>This clears localStorage profile, saved and ignored opportunities.</p>
      <button class="btn btn-ghost" data-action="reset">Reset all demo data</button>
    </section>
  `);
}

function renderIgnored() {
  return state.ignored.map((id) => {
    const opp = state.opportunities.find((o) => o.id === id);
    return opp ? `<button data-action="unignore" data-id="${id}">Unignore ${opp.title}</button>` : "";
  }).join("");
}

function renderOpportunitySummaryForCopy() {}

function generateOpportunitySummary(opp) {
  return `${opp.title}
Buyer: ${opp.buyer}
Deadline: ${formatOpportunityDeadline(opp.deadline)}
Match: ${opp.matchScore}/100 (${opp.matchLabel})
Why this fits:
${opp.matchReasons.map((r) => `- ${r}`).join("\n")}
Next step: Open source documents and confirm requirements.`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeJs(value) {
  return String(value ?? "")
    .replaceAll("\\", "\\\\")
    .replaceAll("'", "\\'")
    .replaceAll("\n", "\\n");
}

function capitalize(value) {
  return String(value || "").charAt(0).toUpperCase() + String(value || "").slice(1);
}

bootApp();
loadOpportunities();
