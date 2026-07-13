import {
  STORAGE_KEYS,
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  acceptCompanyInvite,
  capitalize,
  buildCompanyInviteLink,
  buildEvaluationLabelPayload,
  buildMatchDecisionPayload,
  buildMatchingProfilePayload,
  buildReportEmail,
  claimInvitedCompanyMemberships,
  clearStoredPendingInviteToken,
  cleanStringArray,
  cleanReportReasons,
  createEmptyProfile,
  daysUntilDeadline,
  DEFAULT_PROFILE,
  escapeHtml,
  escapeJs,
  formatCurrencyAmount,
  formatCustomerLocation as formatCustomerLocationBase,
  formatDateTime,
  formatNextStep as formatNextStepBase,
  formatOpportunityModalValue as formatOpportunityModalValueBase,
  formatReportMatchLabel as formatReportMatchLabelBase,
  formatReportMetadataValue as formatReportMetadataValueBase,
  formatReportQualityLabel as formatReportQualityLabelBase,
  formatReportReason as formatReportReasonBase,
  formatReportRisk as formatReportRiskBase,
  getAuthCallbackInfo,
  getAuthCallbackRedirectUrl,
  getAppHashUrl,
  formatShortDate,
  buildCompanyDraftFromTrialRequest,
  createCompanyFromTrialRequest,
  getReportEmailStatus,
  getReportScoreLabel,
  getReportStatusBadge,
  getReportUiLabel,
  getReportVerificationSentence,
  getTrialRequestStatusLabel,
  hasFutureDeadline,
  getInitialLanguage as getInitialLanguageBase,
  getLegalPageData,
  getSafeExternalUrl,
  getAiReportPlacement,
  getCleanOpportunityBuyer,
  getInitialPendingInviteToken,
  getInviteAuthDiagnostics,
  getInviteRouteDiagnostics,
  getInviteTokenFromRoute,
  getStoredPendingInviteToken,
  getStoredPendingInviteTokenSource,
  inferLocationFromSourceName,
  isInviteDebugEnabled,
  isUuid,
  localizeLegacyReportContent,
  loadActiveCompanyMemberships,
  loadAdminTrialRequests,
  mergeAiReviewsIntoReportMatches,
  normalizeLocationText,
  normalizeAccessEmail,
  parseCommaList,
  formatAiUsageCost,
  requestDailyPipelineRun,
  loadTodayAiUsageSummary,
  requestCompanyAiReviewBatch,
  requestAiMatchReview,
  requestAutomaticAiReviewRun,
  updateCompanyAutoAiReviewEnabled,
  PROFILE_SUGGESTIONS,
  mergeAiReviewsIntoAdminMatches,
  normalizeReportRisk,
  renderAdminDailyPipelinePanel,
  renderAdminCompanyAccessPanel,
  renderAdminMatchingProfilePanel,
  renderMatchDecisionControls,
  renderAcceptInvitePage,
  renderAdminAutomaticAiReviewPanel,
  renderAdminCompanyAiReviewPanel,
  renderAdminCompanyMatchList,
  renderForgotPasswordPage,
  renderLandingPage,
  renderLegalPageContent,
  renderLoginPage,
  renderDashboardEmptyStatePage,
  renderDashboardPage,
  renderOpportunityCardPage,
  renderOpportunityModalPage,
  renderPricingPage,
  renderProfileFormPage,
  renderPublicSignupUnavailablePage,
  renderReportArchiveRowPage,
  renderReportOpportunityItemPage,
  renderReportOpportunitySectionPage,
  renderReportPreviewPage,
  renderReportQualityBadgePage,
  renderReportSummaryCardPage,
  renderResetPasswordPage,
  renderSettingsPage,
  renderSignupPage,
  renderTrialRequestPage,
  previewCompanyInvite,
  replaceUrlWithInviteRoute,
  sanitizeInviteToken,
  setStoredPendingInviteToken,
  shouldPreserveInviteForRoute,
  sortAiReportMatches,
  splitInput,
  stripHtmlFromString,
  submitTrialRequest,
  supabaseClient,
  translate,
  updateTrialRequestStatus,
  uniqueStrings
} from "./src/main.js";

/* VerkRadar MVP single-page app.
   No backend required. Uses localStorage and mock data.
   Later: replace storage functions with Supabase queries.
*/

const MISSING_DEADLINE_RISK = "Deadline not available in imported data — verify on source page.";
const EXTRACTED_PROJECT_DEADLINE_RISK = "No formal tender deadline extracted — verify source article.";

function getInitialLanguage() {
  return getInitialLanguageBase(STORAGE_KEYS);
}

function t(key, params = {}) {
  return translate(state?.language || "is", key, params);
}
function setLanguage(language) {
  state.language = language === "en" ? "en" : "is";
  localStorage.setItem(STORAGE_KEYS.language, state.language);
  render();
}

const defaultProfile = DEFAULT_PROFILE;

const PROFILE_LOAD_TIMEOUT_MS = 12000;

function getEmptyProfile() {
  return createEmptyProfile(state.user?.email || "");
}

let state = {
  route: location.hash.replace("#", "") || "/",
  language: getInitialLanguage(),
  pendingSignupPlan: getPlanFromRoute(location.hash.replace("#", "") || "/") || getStoredSelectedPlan(),
  pendingInviteToken: getInitialPendingInviteToken(location.hash.replace("#", "") || "/"),
  invitePreview: null,
  invitePreviewLoading: false,
  invitePreviewError: null,
  invitePreviewErrorToken: "",
  invitePreviewDebug: null,
  inviteAccepting: false,
  inviteAuthEvent: "",
  inviteCallbackHandled: false,
  trialRequestSubmitted: false,
  trialRequestError: "",
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
    password: "",
    newPassword: "",
    confirmPassword: ""
  },
  authSubmitting: false,
  isSavingProfile: false,
  profileSaved: false,
  profileSaveMessage: null,
  profileSaveError: null,
  profile: null,
  companyMembership: null,
  profileDraft: null,
  profileDraftDirty: false,
  profileLoading: false,
  profileLoadError: null,
  companyId: null,
  opportunities: [],
  storedMatches: [],
  opportunityActions: [],
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
  adminTrialRequests: [],
  adminTrialRequestsLoading: false,
  adminTrialRequestsLoaded: false,
  adminTrialRequestsError: null,
  selectedAdminTrialRequestId: null,
  adminTrialRequestActions: {},
  adminTrialCompanyDraft: null,
  adminTrialCompanySaving: false,
  adminTrialCompanyMessage: "",
  adminTrialCompanyError: "",
  selectedAdminReport: null,
  selectedAdminReportLoading: false,
  selectedAdminReportError: null,
  sourceCoverage: [],
  sourceCoverageLoading: false,
  sourceCoverageLoaded: false,
  sourceCoverageError: null,
  expandedSourceId: null,
  adminCompanies: [],
  adminCompaniesLoading: false,
  adminCompaniesLoaded: false,
  adminCompaniesError: null,
  adminReviewMatches: [],
  adminReviewLoading: false,
  adminReviewLoaded: false,
  adminReviewError: null,
  adminReviewActions: {},
  adminAiReviewActions: {},
  adminAiReviewError: null,
  adminCompanyAiReviewActions: {},
  adminCompanyAiReviewResults: {},
  adminCompanyAiReviewFilter: "not_reviewed",
  adminCompanyActions: {},
  adminCompanyAccessActions: {},
  adminCompanyInviteDrafts: {},
  adminCompanyInviteLinks: {},
  adminCompanyInviteDebug: {},
  adminReportDeliveryActions: {},
  selectedAdminCompanyId: null,
  adminActiveTab: "overview",
  adminCompanyFilters: {
    search: "",
    industry: "all",
    profileStatus: "all",
    plan: "all"
  },
  adminReportMode: "all_current",
  adminOpportunityFilters: {
    source: "all",
    missingDeadlineSource: "all",
    status: "all",
    country: "all",
    search: "",
    debugCompanyId: "",
    tedOnly: false,
    manualOnly: false,
    showDemoTest: false,
    ...getStoredAdminOpportunityViewPrefs()
  },
  adminOpportunityDraft: createEmptyAdminOpportunityDraft(),
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
  selectedAdminReportId: null,
  adminMessage: null,
  adminSubmitting: false,
  adminDeletingId: null,
  adminUpdatingId: null,
  isLoadingOpportunities: false,
  opportunityLoadError: null,
  isMobileMenuOpen: false,
  isMobileMenuClosing: false,
  profileMenuOpen: false,
  selectedOpportunityId: null,
  toast: null
};

function getRoutePath(route = state.route) {
  return String(route || "/").split("?")[0] || "/";
}

function getRouteSearchParams(route = state.route) {
  const query = String(route || "").split("?")[1] || "";
  return new URLSearchParams(query);
}

function normalizeSelectedPlan(plan) {
  const value = String(plan || "").trim().toLowerCase();
  return ["basic", "pro", "priority"].includes(value) ? value : "";
}

function getStoredSelectedPlan() {
  try {
    return normalizeSelectedPlan(localStorage.getItem(STORAGE_KEYS.selectedPlan));
  } catch {
    return "";
  }
}

function setStoredSelectedPlan(plan) {
  const normalized = normalizeSelectedPlan(plan);
  try {
    if (normalized) localStorage.setItem(STORAGE_KEYS.selectedPlan, normalized);
  } catch {
    // Ignore storage failures; the plan is still preserved in memory for this session.
  }
  return normalized;
}

function clearStoredSelectedPlan() {
  try {
    localStorage.removeItem(STORAGE_KEYS.selectedPlan);
  } catch {
    // Ignore storage failures.
  }
}

function getStoredAdminOpportunityViewPrefs() {
  try {
    const raw = sessionStorage.getItem("verkradar_admin_opportunity_view");
    const parsed = raw ? JSON.parse(raw) : {};
    return {
      sortBy: normalizeAdminOpportunitySort(parsed.sortBy),
      addedWindow: normalizeAdminOpportunityAddedWindow(parsed.addedWindow)
    };
  } catch {
    return {
      sortBy: "created_desc",
      addedWindow: "all"
    };
  }
}

function persistAdminOpportunityViewPrefs() {
  try {
    sessionStorage.setItem("verkradar_admin_opportunity_view", JSON.stringify({
      sortBy: normalizeAdminOpportunitySort(state.adminOpportunityFilters?.sortBy),
      addedWindow: normalizeAdminOpportunityAddedWindow(state.adminOpportunityFilters?.addedWindow)
    }));
  } catch {
    // Session persistence is only a convenience for the admin view.
  }
}

function getPlanFromRoute(route = state.route) {
  return normalizeSelectedPlan(getRouteSearchParams(route).get("plan"));
}

function syncPendingSignupPlanFromRoute(route = state.route) {
  const plan = getPlanFromRoute(route);
  if (plan) state.pendingSignupPlan = setStoredSelectedPlan(plan);
}

function syncPendingInviteTokenFromRoute(route = state.route) {
  const token = getInviteTokenFromRoute(route);
  if (shouldPreserveInviteForRoute(route) && !token) {
    const storedToken = getStoredPendingInviteToken();
    if (storedToken) {
      state.pendingInviteToken = storedToken;
      return;
    }
    clearPendingInviteState();
    return;
  }
  if (shouldPreserveInviteForRoute(route) && token && token !== state.pendingInviteToken) {
    state.pendingInviteToken = setStoredPendingInviteToken(token);
    state.invitePreview = null;
    state.invitePreviewError = null;
    state.invitePreviewErrorToken = "";
    return;
  }
  if (!shouldPreserveInviteForRoute(route)) {
    clearPendingInviteState();
  }
}

function clearPendingInviteState() {
  clearStoredPendingInviteToken();
  state.pendingInviteToken = "";
  state.invitePreview = null;
  state.invitePreviewError = null;
  state.invitePreviewErrorToken = "";
  state.invitePreviewDebug = null;
  state.inviteAccepting = false;
}

async function updateInviteDebug(extra = {}) {
  if (!isInviteDebugEnabled()) return;
  const authDiagnostics = await getInviteAuthDiagnostics(state.inviteAuthEvent);
  state.invitePreviewDebug = {
    ...getInviteRouteDiagnostics(state.route),
    ...authDiagnostics,
    ...(state.invitePreviewDebug || {}),
    ...extra,
  };
}

function shouldClearInviteTokenForReason(reason) {
  return ["expired", "revoked"].includes(String(reason || ""));
}

function isAuthCallbackPath() {
  return window.location.pathname === "/auth/callback";
}

async function handleAuthCallbackIfPresent() {
  const callback = getAuthCallbackInfo();
  if (!supabaseClient || state.inviteCallbackHandled || (!isAuthCallbackPath() && !callback.hasImplicitTokens)) return false;
  state.inviteCallbackHandled = true;
  const inviteToken = sanitizeInviteToken(callback.invite || getStoredPendingInviteToken());
  if (inviteToken) state.pendingInviteToken = setStoredPendingInviteToken(inviteToken);
  await updateInviteDebug({
    auth_flow: callback.code ? "pkce" : callback.hasImplicitTokens ? "implicit_fallback" : "unknown",
    raw_token_had_fragment: callback.rawTokenHadFragment,
    sanitized_token_length: inviteToken.length,
    code_present: Boolean(callback.code),
    exchange_code_attempted: false,
    exchange_code_succeeded: false,
    session_present: false,
  });

  try {
    if (callback.code) {
      await updateInviteDebug({ exchange_code_attempted: true });
      const { data, error } = await supabaseClient.auth.exchangeCodeForSession(callback.code);
      if (error) throw error;
      await updateInviteDebug({
        exchange_code_succeeded: true,
        session_present: Boolean(data?.session),
      });
    } else if (callback.hasImplicitTokens) {
      const { data, error } = await supabaseClient.auth.setSession({
        access_token: callback.accessToken,
        refresh_token: callback.refreshToken,
      });
      if (error) throw error;
      await updateInviteDebug({
        auth_flow: "implicit_fallback",
        session_present: Boolean(data?.session),
      });
    }
  } catch (error) {
    console.error("Auth callback handling failed:", error);
    await updateInviteDebug({
      auth_callback_error: errorMessage(error),
      exchange_code_succeeded: false,
    });
  }

  const nextRoute = replaceUrlWithInviteRoute(inviteToken);
  state.route = nextRoute;
  return true;
}

function getInviteAwareAuthHref(path) {
  const token = state.pendingInviteToken || getInviteTokenFromRoute(state.route);
  return token && shouldPreserveInviteForRoute(state.route) ? `${path}?invite=${encodeURIComponent(token)}` : path;
}

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function clearLocalProfileState() {
  localStorage.removeItem("verkradar_profile");
  localStorage.removeItem("verkradar_local_user_id");
  localStorage.removeItem("verkradar_saved_opportunities");
  localStorage.removeItem("verkradar_ignored_opportunities");
  clearOpportunityDetailsState();
  state.profile = null;
  state.profileDraft = null;
  state.profileDraftDirty = false;
  state.currentUser = null;
  state.companyId = null;
  state.storedMatches = [];
  state.opportunityActions = [];
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
  state.selectedAdminReport = null;
  state.selectedAdminReportLoading = false;
  state.selectedAdminReportError = null;
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

function createEmptyAdminOpportunityDraft() {
  return {
    title: "",
    buyer: "",
    sourceName: "",
    category: "",
    type: "tender",
    deadline: "",
    published_date: "",
    location: "",
    estimated_value: "",
    url: "",
    cpv_code: "",
    difficulty: "medium",
    status: "open",
    description: "",
    requirements: "",
    keywords: ""
  };
}

function updateAdminOpportunityDraftFromForm(formData) {
  const nextDraft = createEmptyAdminOpportunityDraft();
  Object.keys(nextDraft).forEach((key) => {
    nextDraft[key] = String(formData.get(key) || "");
  });
  state.adminOpportunityDraft = nextDraft;
}

let suppressNextHashChange = false;
let mobileMenuCloseTimer = null;
const MOBILE_MENU_CLOSE_MS = 220;

window.addEventListener("hashchange", () => {
  const nextRoute = location.hash.replace("#", "") || "/";
  const nextPath = getRoutePath(nextRoute);
  const routeChanged = nextRoute !== state.route;

  if (suppressNextHashChange && nextRoute === state.route) {
    suppressNextHashChange = false;
    return;
  }
  suppressNextHashChange = false;

  if (["/login", "/signup", "/forgot-password", "/reset-password"].includes(nextPath) && nextRoute !== state.route) {
    state.authMessage = null;
    state.authSubmitting = false;
  }

  state.route = nextRoute;
  syncPendingSignupPlanFromRoute(nextRoute);
  syncPendingInviteTokenFromRoute(nextRoute);
  resetMobileMenuState();
  state.profileMenuOpen = false;
  if (routeChanged) clearOpportunityDetailsState();
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

  if ((state.isMobileMenuOpen || state.isMobileMenuClosing) && !event.target.closest?.(".site-header")) {
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
    if (state.isMobileMenuOpen || state.isMobileMenuClosing) closeMobileMenu();
    else openMobileMenu();
    return;
  }

  if (name === "close-mobile-menu") {
    event.preventDefault();
    closeMobileMenu();
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

  if (name === "toggle-language") {
    event.preventDefault();
    setLanguage(state.language === "is" ? "en" : "is");
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
      if (action.closest?.("#admin-trial-company-form")) {
        initializeAdminTrialCompanyDraft();
        state.adminTrialCompanyDraft[action.dataset.profileField] = value;
      } else {
        initializeProfileDraft();
        state.profileDraft[action.dataset.profileField] = value;
        markProfileDraftDirty();
      }
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
    if (action.closest?.("#admin-trial-company-form")) {
      toggleAdminTrialCompanySuggestion(action.dataset.field, action.dataset.value);
    } else {
      toggleProfileSuggestion(action.dataset.field, action.dataset.value);
    }
    return;
  }

  if (name === "scroll-to") {
    event.preventDefault();
    const targetId = action.dataset.target;
    if (!targetId) return;
    const goToTarget = () => {
      if (state.route !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(targetId), 50);
      } else {
        render();
        setTimeout(() => scrollToSection(targetId), 0);
      }
    };
    if (state.isMobileMenuOpen || state.isMobileMenuClosing) closeMobileMenu(goToTarget);
    else goToTarget();
    return;
  }

  if (name === "go") {
    event.preventDefault();
    state.profileMenuOpen = false;
    if (state.isMobileMenuOpen || state.isMobileMenuClosing) closeMobileMenu(() => navigate(action.dataset.href));
    else navigate(action.dataset.href);
    return;
  }
  if (name === "accept-company-invite") {
    acceptPendingCompanyInvite();
    return;
  }
  if (name === "save") toggleSave(id);
  if (name === "ignore") ignoreOpportunity(id);
  if (name === "unignore") unignoreOpportunity(id);
  if (name === "details") openDetails(id);
  if (name === "admin-report-override") {
    updateOpportunityReportOverride(id, action.dataset.override || "");
    return;
  }
  if (name === "copy-report") copyReport();
  if (name === "download-report-pdf") downloadReportPdf();
  if (name === "download-admin-report-pdf") {
    downloadAdminReportPdf();
    return;
  }
  if (name === "save-report") saveCurrentReport();
  if (name === "archive-report") {
    archiveReport(id);
    return;
  }
  if (name === "view-report") {
    state.selectedReportId = id;
    render();
  }
  if (name === "close-archive-report") {
    state.selectedReportId = null;
    render();
  }
  if (name === "view-admin-report") {
    state.selectedAdminReportId = id;
    state.selectedAdminReport = null;
    state.selectedAdminReportError = null;
    state.adminActiveTab = "reports";
    render();
    loadAdminReportDetails(id);
    return;
  }
  if (name === "close-admin-report") {
    state.selectedAdminReportId = null;
    state.selectedAdminReport = null;
    state.selectedAdminReportError = null;
    render();
    return;
  }
  if (name === "copy-admin-report") {
    copyAdminReportEmail(id);
    return;
  }
  if (name === "mark-admin-report-sent") {
    markAdminReportSent(id);
    return;
  }
  if (name === "admin-tab") {
    state.adminActiveTab = action.dataset.tab || "overview";
    state.selectedAdminCompanyId = null;
    state.selectedAdminReportId = null;
    state.selectedAdminTrialRequestId = null;
    state.adminTrialCompanyDraft = null;
    render();
    scrollActiveAdminTabIntoView();
  }
  if (name === "view-admin-company") {
    state.selectedAdminCompanyId = id;
    render();
  }
  if (name === "close-admin-company") {
    state.selectedAdminCompanyId = null;
    render();
  }
  if (name === "view-admin-trial-request") {
    state.selectedAdminTrialRequestId = id;
    state.adminTrialCompanyDraft = null;
    state.adminTrialCompanyMessage = "";
    state.adminTrialCompanyError = "";
    render();
    return;
  }
  if (name === "close-admin-trial-request") {
    state.selectedAdminTrialRequestId = null;
    state.adminTrialCompanyDraft = null;
    state.adminTrialCompanyMessage = "";
    state.adminTrialCompanyError = "";
    render();
    return;
  }
  if (name === "admin-trial-request-status") {
    updateAdminTrialRequestStatus(id, action.dataset.status || "");
    return;
  }
  if (name === "admin-start-trial-company") {
    startAdminTrialCompanyCreation(id);
    return;
  }
  if (name === "admin-refresh-company-matches") {
    refreshAdminCompanyMatches(id);
    return;
  }
  if (name === "admin-generate-company-report") {
    generateAdminCompanyReport(id);
    return;
  }
  if (name === "admin-review-match") {
    reviewAdminMatch(id, action.dataset.companyId || "", action.dataset.reviewAction || "");
    return;
  }
  if (name === "admin-ai-review-match") {
    runAdminAiReview(id, { force: action.dataset.force === "true" });
    return;
  }
  if (name === "admin-ai-review-company") {
    runAdminCompanyAiReviewBatch(id, { force: action.dataset.force === "true" });
    return;
  }
  if (name === "admin-run-auto-ai-review") {
    runAdminAutomaticAiReview();
    return;
  }
  if (name === "admin-run-daily-pipeline") {
    runAdminDailyPipeline();
    return;
  }
  if (name === "admin-toggle-company-auto-ai") {
    toggleCompanyAutoAiReview(id, action.dataset.enabled === "true");
    return;
  }
  if (name === "admin-invite-company-customer") {
    inviteAdminCompanyCustomer(id);
    return;
  }
  if (name === "admin-revoke-company-access") {
    revokeAdminCompanyAccess(id, action.dataset.memberId || "");
    return;
  }
  if (name === "admin-copy-company-invite-link") {
    copyAdminCompanyInviteLink(id);
    return;
  }
  if (name === "import-ted") importTedNotices();
  if (name === "import-source-connectors") importSourceConnectors();
  if (name === "test-source-connector") importSourceConnectors(id);
  if (name === "toggle-source-items") {
    state.expandedSourceId = state.expandedSourceId === id ? null : id;
    render();
  }
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
    clearOpportunityDetailsState();
    if (state.isMobileMenuOpen || state.isMobileMenuClosing) {
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
  if (event.key === "Escape" && (state.isMobileMenuOpen || state.isMobileMenuClosing)) {
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
    const adminTrialForm = event.target.closest?.("#admin-trial-company-form");
    if (adminTrialForm) {
      updateAdminTrialCompanyDraftFromForm(adminTrialForm);
      return;
    }
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
    state.adminOpportunityFilters = getAdminOpportunityFilters();
    if (event.target.type === "checkbox") {
      state.adminOpportunityFilters[key] = event.target.checked;
      if (key === "tedOnly" && event.target.checked) state.adminOpportunityFilters.manualOnly = false;
      if (key === "manualOnly" && event.target.checked) state.adminOpportunityFilters.tedOnly = false;
    } else {
      state.adminOpportunityFilters[key] = event.target.value;
    }
    if (key === "sortBy" || key === "addedWindow") persistAdminOpportunityViewPrefs();
    renderPreservingInputAndScroll(event.target);
    return;
  }

  if (event.target.matches("[data-admin-opportunity-field]")) {
    const key = event.target.dataset.adminOpportunityField;
    state.adminOpportunityDraft = {
      ...createEmptyAdminOpportunityDraft(),
      ...(state.adminOpportunityDraft || {}),
      [key]: event.target.value
    };
    return;
  }

  if (event.target.matches("[data-admin-company-filter]")) {
    const key = event.target.dataset.adminCompanyFilter;
    state.adminCompanyFilters[key] = event.target.value;
    renderPreservingInputAndScroll(event.target);
    return;
  }

  if (event.target.matches("[data-admin-company-invite-email]")) {
    const companyId = event.target.dataset.id || "";
    if (companyId) {
      state.adminCompanyInviteDrafts = {
        ...(state.adminCompanyInviteDrafts || {}),
        [companyId]: event.target.value
      };
    }
    return;
  }

  if (event.target.matches("[data-admin-report-mode]")) {
    state.adminReportMode = event.target.value === "all_current" ? "all_current" : "new_only";
    render();
  }

  if (event.target.matches("[data-admin-company-ai-filter]")) {
    state.adminCompanyAiReviewFilter = event.target.value || "not_reviewed";
    renderPreservingInputAndScroll(event.target);
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-admin-filter]")) {
    const key = event.target.dataset.adminFilter;
    state.adminOpportunityFilters = getAdminOpportunityFilters();
    if (event.target.type === "checkbox") {
      state.adminOpportunityFilters[key] = event.target.checked;
      if (key === "tedOnly" && event.target.checked) state.adminOpportunityFilters.manualOnly = false;
      if (key === "manualOnly" && event.target.checked) state.adminOpportunityFilters.tedOnly = false;
    } else {
      state.adminOpportunityFilters[key] = event.target.value;
    }
    if (key === "sortBy" || key === "addedWindow") persistAdminOpportunityViewPrefs();
    renderPreservingInputAndScroll(event.target);
    return;
  }

  if (event.target.matches("[data-import-mode]")) {
    state.tedImportMode = event.target.value;
    render();
    return;
  }

  if (event.target.matches("[data-admin-company-ai-filter]")) {
    state.adminCompanyAiReviewFilter = event.target.value || "not_reviewed";
    renderPreservingInputAndScroll(event.target);
    return;
  }

  if (event.target.matches("[data-profile-location]")) {
    const adminTrialForm = event.target.closest?.("#admin-trial-company-form");
    if (adminTrialForm) {
      updateAdminTrialCompanyDraftFromForm(adminTrialForm);
      return;
    }
    initializeProfileDraft();
    state.profileDraft.locations = Array.from(document.querySelectorAll("[data-profile-location]:checked"))
      .map((input) => input.value);
    markProfileDraftDirty();
    return;
  }

  const field = event.target.closest?.("[data-profile-field]");
  if (!field) return;
  const adminTrialForm = event.target.closest?.("#admin-trial-company-form");
  if (adminTrialForm) {
    updateAdminTrialCompanyDraftFromForm(adminTrialForm);
    return;
  }
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

  if (event.target.id === "trial-request-form") {
    event.preventDefault();
    state.trialRequestError = "";
    try {
      await submitTrialRequest(new FormData(event.target));
      state.trialRequestSubmitted = true;
      render();
      scrollToPageTop();
    } catch (error) {
      console.error("Trial request failed:", error);
      state.trialRequestSubmitted = false;
      state.trialRequestError = t("trialRequestError");
      render();
      showToast(t("trialRequestError"), "error");
    }
    return;
  }

  if (event.target.id === "forgot-password-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    sendPasswordResetEmail(form.get("email"));
    return;
  }

  if (event.target.id === "reset-password-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    updatePasswordFromReset(form.get("newPassword"), form.get("confirmPassword"));
    return;
  }

  if (event.target.id === "admin-opportunity-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    updateAdminOpportunityDraftFromForm(form);
    addOpportunity(form, event.target);
    return;
  }

  if (event.target.id === "admin-trial-company-form") {
    event.preventDefault();
    await submitAdminTrialCompanyForm(event.target);
    return;
  }

  if (event.target.matches("[data-admin-matching-profile-form]")) {
    event.preventDefault();
    await saveAdminCompanyMatchingProfile(event.target.dataset.companyId || "", event.target);
    return;
  }

  if (event.target.matches("[data-admin-match-decision-form]")) {
    event.preventDefault();
    await saveAdminMatchDecision(event.target.dataset.companyId || "", event.target);
    return;
  }

  if (event.target.matches("[data-admin-evaluation-label-form]")) {
    event.preventDefault();
    await saveAdminEvaluationLabel(event.target.dataset.companyId || "", event.target);
    return;
  }

  if (event.target.id === "profile-form") {
    event.preventDefault();
    state.profileSaved = false;
    updateProfileDraftFromForm(event.target);
    const profile = normalizeProfileDraftForSave();

    if (!profile.companyName || !profile.kennitala || !profile.contactEmail || !profile.billingEmail || !profile.contactName || !profile.phone || !profile.address || !profile.industry) {
      showToast(state.language === "is" ? "Fylltu út fyrirtækisnafn, kennitölu, reikningsupplýsingar, tengilið og atvinnugrein." : "Please fill in company name, kennitala, billing details, contact details and industry.", "error");
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
  if (mobileMenuCloseTimer) {
    clearTimeout(mobileMenuCloseTimer);
    mobileMenuCloseTimer = null;
  }
  updateMobileMenuOffset();
  state.isMobileMenuOpen = true;
  state.isMobileMenuClosing = false;
  state.profileMenuOpen = false;
  document.body.classList.add("mobile-menu-active");
  render();
}

function closeMobileMenu(callback) {
  const runCallback = () => {
    if (typeof callback === "function") callback();
  };

  if (!state.isMobileMenuOpen && !state.isMobileMenuClosing) {
    runCallback();
    return;
  }

  state.isMobileMenuOpen = false;
  state.isMobileMenuClosing = true;
  state.profileMenuOpen = false;
  render();

  if (mobileMenuCloseTimer) clearTimeout(mobileMenuCloseTimer);
  const delay = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? 0 : MOBILE_MENU_CLOSE_MS;
  mobileMenuCloseTimer = setTimeout(() => {
    mobileMenuCloseTimer = null;
    state.isMobileMenuClosing = false;
    document.body.classList.remove("mobile-menu-active");
    render();
    runCallback();
  }, delay);
}

function resetMobileMenuState() {
  if (mobileMenuCloseTimer) {
    clearTimeout(mobileMenuCloseTimer);
    mobileMenuCloseTimer = null;
  }
  state.isMobileMenuOpen = false;
  state.isMobileMenuClosing = false;
  document.body.classList.remove("mobile-menu-active");
}

function mobileNavigate(route) {
  if (!route) return;
  if (!state.isMobileMenuOpen && !state.isMobileMenuClosing) {
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

  if (!state.isMobileMenuOpen && !state.isMobileMenuClosing) {
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

window.addEventListener("resize", () => {
  updateMobileMenuOffset();
  if (!isMobileViewport() && (state.isMobileMenuOpen || state.isMobileMenuClosing)) {
    resetMobileMenuState();
    render();
  }
});

function navigate(route) {
  route = route || "/";
  const authRoutes = ["/login", "/signup", "/forgot-password", "/reset-password"];
  const path = getRoutePath(route);

  if (authRoutes.includes(path) && route !== state.route) {
    state.authMessage = null;
    state.authSubmitting = false;
  }

  resetMobileMenuState();
  state.profileMenuOpen = false;

  if (state.route === route) {
    render();
    scrollToPageTop();
    afterRouteRender();
    return;
  }

  clearOpportunityDetailsState();
  state.route = route;
  syncPendingSignupPlanFromRoute(route);
  syncPendingInviteTokenFromRoute(route);
  suppressNextHashChange = true;
  location.hash = route;
  render();
  scrollToPageTop();
  afterRouteRender();
}

function getPostAuthRoute() {
  if (!state.user && !state.currentUser) return "/";
  const inviteToken = getPendingInviteToken();
  if (inviteToken) return `/accept-invite?token=${encodeURIComponent(inviteToken)}`;
  return state.profile ? "/dashboard" : "/onboarding";
}

function getPendingInviteToken() {
  return sanitizeInviteToken(getInviteTokenFromRoute(state.route) || state.pendingInviteToken || getStoredPendingInviteToken());
}

function getTrialAccessHref() {
  if (!state.user && !state.currentUser) return "/trial";
  return state.profile ? "/dashboard" : "/onboarding";
}

function isPublicAuthEntryRoute(route = state.route) {
  const normalized = String(route || "");
  if (isPasswordRecoveryRoute(normalized)) return false;
  const path = getRoutePath(normalized);
  return ["/", "/login", "/signup", "/forgot-password"].includes(path) ||
    normalized.startsWith("access_token=") ||
    normalized.startsWith("code=") ||
    normalized.includes("type=signup") ||
    normalized.includes("type=email_change");
}

function isPasswordRecoveryRoute(route = state.route) {
  const normalized = String(route || "");
  return normalized === "/reset-password" ||
    normalized.startsWith("/reset-password") ||
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
  const inviteToken = getPendingInviteToken();
  if (state.user && inviteToken && getRoutePath(state.route) !== "/accept-invite") {
    state.pendingInviteToken = setStoredPendingInviteToken(inviteToken);
    updateInviteDebug({
      pending_invite_present: true,
      onboarding_redirect_blocked: true,
      final_route: `/accept-invite?token=${encodeURIComponent(inviteToken)}`,
    });
    replaceHashRoute(`/accept-invite?token=${encodeURIComponent(inviteToken)}`);
    render();
    return;
  }
  if (getRoutePath(state.route) === "/accept-invite") {
    loadCompanyInvitePreview();
    if (state.user && !state.inviteAccepting && !state.invitePreviewError) acceptPendingCompanyInvite();
  }
  if (state.route === "/report" && state.companyId && !state.reportsLoaded && !state.reportArchiveLoading) {
    loadReportsForCurrentCompany();
  }
  if (state.route === "/admin" && state.isAdmin) {
    scrollActiveAdminTabIntoView();
    if (!state.importRunsLoaded && !state.importRunsLoading) loadImportRunsForAdmin();
    if (!state.adminReportsLoaded && !state.adminReportsLoading) loadAdminReports();
    if (!state.adminTrialRequestsLoaded && !state.adminTrialRequestsLoading) loadTrialRequestsForAdmin();
    if (!state.sourceCoverageLoaded && !state.sourceCoverageLoading) loadSourceCoverageForAdmin();
    if (!state.adminCompaniesLoaded && !state.adminCompaniesLoading) loadAdminCompanies();
    if (!state.adminReviewLoaded && !state.adminReviewLoading) loadAdminReviewQueue();
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
      if (state.companyId) {
        await loadOpportunityActionsForCurrentCompany();
        await loadStoredMatchesForCurrentCompany();
      }
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
        summary,
        text_content,
        html_content,
        status,
        created_at,
        companies (
          company_name
        ),
        report_items (
          id,
          opportunity_id,
          match_score,
          match_reasons,
          risks,
          sort_order,
          opportunities (
            *,
            sources (
              name,
              source_type
            )
          )
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

async function loadTrialRequestsForAdmin() {
  if (!supabaseClient || !state.isAdmin) {
    state.adminTrialRequests = [];
    state.adminTrialRequestsLoaded = true;
    return;
  }

  state.adminTrialRequestsLoading = true;
  state.adminTrialRequestsError = null;
  render();

  try {
    state.adminTrialRequests = await loadAdminTrialRequests();
  } catch (error) {
    console.error("Failed to load trial requests:", error);
    state.adminTrialRequests = [];
    state.adminTrialRequestsError = formatSupabaseError(error);
  } finally {
    state.adminTrialRequestsLoading = false;
    state.adminTrialRequestsLoaded = true;
    render();
  }
}

async function updateAdminTrialRequestStatus(requestId, status) {
  if (!requestId) return;
  state.adminTrialRequestActions = {
    ...(state.adminTrialRequestActions || {}),
    [requestId]: status
  };
  state.adminTrialCompanyError = "";
  state.adminTrialCompanyMessage = "";
  render();
  try {
    await updateTrialRequestStatus(requestId, status);
    await loadTrialRequestsForAdmin();
    showToast(status === "contacted" ? "Beiðni merkt sem haft samband." : "Beiðni hafnað.", "success");
  } catch (error) {
    console.error("Failed to update trial request:", error);
    state.adminTrialCompanyError = formatSupabaseError(error);
    showToast(state.adminTrialCompanyError, "error");
    render();
  } finally {
    state.adminTrialRequestActions = {
      ...(state.adminTrialRequestActions || {}),
      [requestId]: null
    };
    render();
  }
}

async function submitAdminTrialCompanyForm(formElement) {
  const request = getSelectedAdminTrialRequest();
  if (!request) return;
  if (request.converted_company_id || request.status === "converted") {
    state.adminTrialCompanyError = "Þessi beiðni hefur þegar verið umbreytt.";
    render();
    return;
  }

  updateAdminTrialCompanyDraftFromForm(formElement);
  const profile = normalizeAdminTrialCompanyDraftForSave();
  if (!profile.companyName || !profile.kennitala || !profile.contactEmail || !profile.billingEmail || !profile.contactName || !profile.phone || !profile.address || !profile.industry) {
    state.adminTrialCompanyError = "Fylltu út fyrirtækisnafn, kennitölu, tengilið, reikningsnetfang, síma, heimilisfang og atvinnugrein áður en fyrirtæki er stofnað.";
    state.adminTrialCompanyMessage = "";
    render();
    showToast(state.adminTrialCompanyError, "error");
    return;
  }

  state.adminTrialCompanySaving = true;
  state.adminTrialCompanyError = "";
  state.adminTrialCompanyMessage = "";
  render();

  try {
    const result = await createCompanyFromTrialRequest(request.id, profile);
    state.adminTrialCompanyMessage = `Fyrirtæki stofnað: ${result.company_name || profile.companyName}`;
    state.adminTrialCompanyDraft = null;
    state.selectedAdminCompanyId = result.company_id || null;
    await Promise.all([
      loadTrialRequestsForAdmin(),
      loadAdminCompanies()
    ]);
    showToast("Fyrirtæki stofnað úr prufubeiðni.", "success");
  } catch (error) {
    console.error("Failed to create company from trial request:", error);
    state.adminTrialCompanyError = formatSupabaseError(error);
    showToast(state.adminTrialCompanyError, "error");
  } finally {
    state.adminTrialCompanySaving = false;
    render();
  }
}

async function loadAdminReportDetails(reportId) {
  if (!supabaseClient || !state.isAdmin || !reportId) return;

  state.selectedAdminReportLoading = true;
  state.selectedAdminReportError = null;
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
        summary,
        text_content,
        html_content,
        status,
        created_at,
        companies (
          company_name
        ),
        report_items (
          id,
          opportunity_id,
          match_score,
          match_reasons,
          risks,
          sort_order,
          opportunities (
            *,
            sources (
              name,
              source_type
            )
          )
        )
      `)
      .eq("id", reportId)
      .single();

    if (error) throw error;
    await attachReportSentStatuses(data);
    if (state.selectedAdminReportId === reportId) {
      state.selectedAdminReport = data;
    }
  } catch (error) {
    console.error("Failed to load admin report details:", error);
    if (state.selectedAdminReportId === reportId) {
      state.selectedAdminReport = null;
      state.selectedAdminReportError = formatSupabaseError(error);
    }
  } finally {
    if (state.selectedAdminReportId === reportId) {
      state.selectedAdminReportLoading = false;
      render();
    }
  }
}

async function attachReportSentStatuses(report) {
  const items = Array.isArray(report?.report_items) ? report.report_items : [];
  const opportunityIds = items.map((item) => item.opportunity_id).filter(Boolean);
  if (!supabaseClient || !report?.company_id || !opportunityIds.length) return;
  const { data, error } = await supabaseClient
    .from("company_opportunity_sends")
    .select("opportunity_id, sent_at, created_at, channel")
    .eq("company_id", report.company_id)
    .in("opportunity_id", opportunityIds)
    .in("channel", ["manual_email", "automated_email"]);
  if (error) {
    console.warn("Failed to load report sent status:", error);
    return;
  }
  const sentByOpportunity = new Map((data || []).map((row) => [String(row.opportunity_id), row]));
  items.forEach((item) => {
    const sent = sentByOpportunity.get(String(item.opportunity_id));
    item.sent_at = sent?.sent_at || sent?.created_at || "";
    item.delivery_type = sent?.channel || "";
  });
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
    const sources = (data || []).map((source) => ({
      ...source,
      source_status: Array.isArray(source.source_status) ? source.source_status[0] : source.source_status,
      source_connectors: Array.isArray(source.source_connectors) ? source.source_connectors[0] : source.source_connectors
    }));
    const sourceIds = sources.map((source) => source.id).filter(Boolean);
    let opportunitiesBySource = {};

    if (sourceIds.length) {
      const { data: opportunityRows, error: opportunityError } = await supabaseClient
        .from("opportunities")
        .select("id, source_id, title, buyer, deadline, status, url, raw_payload, created_at, published_date")
        .in("source_id", sourceIds)
        .eq("status", "open")
        .order("created_at", { ascending: false })
        .limit(500);

      if (opportunityError) throw opportunityError;
      opportunitiesBySource = (opportunityRows || []).reduce((acc, opportunity) => {
        if (!acc[opportunity.source_id]) acc[opportunity.source_id] = [];
        acc[opportunity.source_id].push(opportunity);
        return acc;
      }, {});
    }

    state.sourceCoverage = sources.map((source) => {
      const opportunities = opportunitiesBySource[source.id] || [];
      return {
        ...source,
        opportunityStats: getSourceOpportunityStats(opportunities),
        latestOpportunities: opportunities.slice(0, 8)
      };
    });
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
    state.adminAiUsageSummary = await loadTodayAiUsageSummary().catch((error) => {
      console.warn("Failed to load AI usage summary:", error);
      return null;
    });
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
    let aiReviews = [];
    let members = [];
    let decisions = [];
    let evaluationLabels = [];

    if (companyIds.length) {
      const [servicesResult, locationsResult, keywordsResult, matchesResult, reportsResult, aiReviewsResult, membersResult, decisionsResult, evaluationLabelsResult] = await Promise.all([
        supabaseClient.from("company_services").select("company_id, service").in("company_id", companyIds),
        supabaseClient.from("company_locations").select("company_id, location").in("company_id", companyIds),
        supabaseClient.from("company_keywords").select("company_id, keyword, type").in("company_id", companyIds),
        supabaseClient
          .from("opportunity_matches")
          .select("id, company_id, opportunity_id, match_score, match_label, safety_status, ai_review_status, ai_review_fit, ai_review_confidence, ai_reviewed_at, ai_review_skipped_reason, opportunities(title, buyer, location, raw_payload, source_id, sources(name))")
          .in("company_id", companyIds),
        supabaseClient.from("reports").select("id, company_id, title, created_at, period_start, period_end, status").in("company_id", companyIds).order("created_at", { ascending: false }),
        supabaseClient.from("ai_match_reviews").select("id, company_id, opportunity_id, match_id, fit, confidence, send_to_client, reason, reviewed_profile_hash, profile_updated_at, company_services_snapshot, company_locations_snapshot, created_at, updated_at").in("company_id", companyIds),
        supabaseClient.from("company_members").select("id, company_id, user_id, email, role, status, invited_at, accepted_at, revoked_at, expires_at").in("company_id", companyIds).order("created_at", { ascending: false }),
        supabaseClient.from("admin_match_decisions").select("id, company_id, opportunity_id, decision, reason, comment, decided_at, decided_by").in("company_id", companyIds),
        supabaseClient.from("match_evaluation_labels").select("id, company_id, opportunity_id, label, reason, notes, labeled_at, labeled_by").in("company_id", companyIds)
      ]);

      services = servicesResult.error ? [] : servicesResult.data || [];
      locations = locationsResult.error ? [] : locationsResult.data || [];
      keywords = keywordsResult.error ? [] : keywordsResult.data || [];
      matches = matchesResult.error ? [] : matchesResult.data || [];
      reports = reportsResult.error ? [] : reportsResult.data || [];
      aiReviews = aiReviewsResult.error ? [] : aiReviewsResult.data || [];
      members = membersResult.error ? [] : membersResult.data || [];
      decisions = decisionsResult.error ? [] : decisionsResult.data || [];
      evaluationLabels = evaluationLabelsResult.error ? [] : evaluationLabelsResult.data || [];
    }

    state.adminCompanies = companyRows.map((company) => {
      const companyServices = services.filter((row) => row.company_id === company.id);
      const companyLocations = locations.filter((row) => row.company_id === company.id);
      const companyKeywords = keywords.filter((row) => row.company_id === company.id);
      const companyProfileForAi = {
        services: cleanStringArray(companyServices.map((row) => row.service)),
        locations: cleanStringArray(companyLocations.map((row) => row.location)),
        includeKeywords: cleanStringArray(companyKeywords.filter((row) => row.type === "include").map((row) => row.keyword)),
        excludeKeywords: cleanStringArray(companyKeywords.filter((row) => row.type === "exclude").map((row) => row.keyword)),
        baseLocation: company.base_location || "",
        serviceAreas: cleanStringArray(company.service_areas),
        willingToTravel: Boolean(company.willing_to_travel),
        nationalProjects: Boolean(company.national_projects),
      };
      return mapAdminCompany(company, {
        services: companyServices,
        locations: companyLocations,
        keywords: companyKeywords,
        matches: mergeAiReviewsIntoAdminMatches(
          matches.filter((row) => row.company_id === company.id),
          aiReviews.filter((row) => row.company_id === company.id),
          companyProfileForAi
        ),
        reports: reports.filter((row) => row.company_id === company.id),
        members: members.filter((row) => row.company_id === company.id),
        decisions: decisions.filter((row) => row.company_id === company.id),
        evaluationLabels: evaluationLabels.filter((row) => row.company_id === company.id)
      });
    });
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

async function loadAdminReviewQueue() {
  if (!supabaseClient || !state.isAdmin) {
    state.adminReviewMatches = [];
    state.adminReviewLoaded = true;
    return;
  }

  state.adminReviewLoading = true;
  state.adminReviewError = null;
  render();

  try {
    const { data, error } = await supabaseClient
      .from("opportunity_matches")
      .select(`
        id,
        company_id,
        opportunity_id,
        match_score,
        match_label,
        match_reasons,
        risks,
        safety_status,
        safety_reasons,
        alert_eligible,
        review_required,
        calculated_at,
        companies (
          company_name
        ),
        opportunities (
          *,
          sources (
            name,
            source_type
          )
        )
      `)
      .eq("safety_status", "needs_review")
      .eq("review_required", true)
      .order("calculated_at", { ascending: false })
      .limit(100);

    if (error) throw error;
    const rows = data || [];
    const companyIds = uniqueStrings(rows.map((row) => row.company_id));
    const opportunityIds = uniqueStrings(rows.map((row) => row.opportunity_id));
    let aiReviews = [];
    if (companyIds.length && opportunityIds.length) {
      const { data: reviewRows, error: reviewError } = await supabaseClient
        .from("ai_match_reviews")
        .select("*")
        .in("company_id", companyIds)
        .in("opportunity_id", opportunityIds);
      if (reviewError) throw reviewError;
      aiReviews = reviewRows || [];
    }
    const reviewByKey = new Map(aiReviews.map((review) => [`${review.company_id}:${review.opportunity_id}`, review]));
    state.adminReviewMatches = rows.map((row) => mapAdminReviewMatch(row, reviewByKey.get(`${row.company_id}:${row.opportunity_id}`)));
    state.adminReviewLoaded = true;
  } catch (error) {
    console.error("Failed to load admin review queue:", error);
    state.adminReviewMatches = [];
    state.adminReviewError = formatSupabaseError(error);
  } finally {
    state.adminReviewLoading = false;
    state.adminReviewLoaded = true;
    render();
  }
}

function mapAdminReviewMatch(row, aiReview = null) {
  const opportunity = mapSupabaseOpportunity(row.opportunities || {});
  return {
    id: row.id,
    companyId: row.company_id,
    opportunityId: row.opportunity_id,
    companyName: row.companies?.company_name || "Unknown company",
    opportunity,
    matchScore: Number(row.match_score || 0),
    matchLabel: row.match_label || getMatchLabel(Number(row.match_score || 0)),
    matchReasons: sanitizeMatchReasons(opportunity, Array.isArray(row.match_reasons) ? row.match_reasons : []),
    risks: Array.isArray(row.risks) ? row.risks : [],
    safetyStatus: row.safety_status || "needs_review",
    safetyReasons: Array.isArray(row.safety_reasons) ? row.safety_reasons : [],
    alertEligible: Boolean(row.alert_eligible),
    reviewRequired: Boolean(row.review_required),
    calculatedAt: row.calculated_at,
    aiReview: aiReview ? mapAiReview(aiReview) : null
  };
}

function mapAiReview(row) {
  return {
    id: row.id,
    fit: row.fit || "weak",
    confidence: Number(row.confidence || 0),
    sendToClient: Boolean(row.send_to_client),
    reason: row.reason || "",
    fitReasons: Array.isArray(row.fit_reasons) ? row.fit_reasons.map(String) : [],
    risksOrQuestions: Array.isArray(row.risks_or_questions) ? row.risks_or_questions.map(String) : [],
    suggestedClientSummary: row.suggested_client_summary || "",
    model: row.model || "",
    createdAt: row.created_at || "",
    updatedAt: row.updated_at || ""
  };
}

function mapAdminCompany(company, related) {
  const services = cleanStringArray((related.services || []).map((row) => row.service));
  const locations = cleanStringArray((related.locations || []).map((row) => row.location));
  const includeKeywords = cleanStringArray((related.keywords || []).filter((row) => row.type === "include").map((row) => row.keyword));
  const excludeKeywords = cleanStringArray((related.keywords || []).filter((row) => row.type === "exclude").map((row) => row.keyword));
  const reports = related.reports || [];
  const decisionMap = new Map((related.decisions || []).map((row) => [String(row.opportunity_id), row]));
  const evaluationMap = new Map((related.evaluationLabels || []).map((row) => [String(row.opportunity_id), row]));
  const matches = (related.matches || [])
    .filter((match) => match.safety_status !== "hidden")
    .map((match) => ({
      ...match,
      adminDecision: decisionMap.get(String(match.opportunity_id)) || null,
      evaluationLabel: evaluationMap.get(String(match.opportunity_id)) || null
    }));
  const members = (related.members || []).map((member) => ({
    id: member.id,
    company_id: member.company_id,
    user_id: member.user_id || "",
    email: member.email || "",
    role: member.role || "member",
    status: member.status || "invited",
    invited_at: member.invited_at || "",
    accepted_at: member.accepted_at || "",
    revoked_at: member.revoked_at || "",
    expires_at: member.expires_at || "",
  }));
  const complete = Boolean(company.company_name && company.contact_email && company.industry && services.length && (locations.length || company.base_location || cleanStringArray(company.service_areas).length));

  return {
    id: company.id,
    ownerId: company.owner_id || "",
    companyName: company.company_name || "Unnamed company",
    contactEmail: company.contact_email || "",
    kennitala: company.kennitala || "",
    billingEmail: company.billing_email || "",
    contactName: company.contact_name || "",
    phone: company.phone || "",
    address: company.address || "",
    website: company.website || "",
    industry: company.industry || "",
    plan: company.selected_plan || company.plan || company.subscription_plan || "Demo",
    selectedPlan: company.selected_plan || company.plan || "",
    billingStatus: company.billing_status || "",
    trialStartedAt: company.trial_started_at || "",
    trialEndsAt: company.trial_ends_at || "",
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
    autoAlertMode: company.auto_alert_mode || "auto_safe_only",
    reportFrequency: company.report_frequency || "weekly",
    reportDay: company.report_day || "monday",
    deadlineReminders: Boolean(company.deadline_reminders),
    autoAiReviewEnabled: Boolean(company.auto_ai_review_enabled),
    coreServices: cleanStringArray(company.core_services),
    secondaryServices: cleanStringArray(company.secondary_services),
    excludedServices: cleanStringArray(company.excluded_services),
    preferredProjectTypes: cleanStringArray(company.preferred_project_types),
    excludedProjectTypes: cleanStringArray(company.excluded_project_types),
    equipment: cleanStringArray(company.equipment),
    certifications: cleanStringArray(company.certifications),
    preferredBuyers: cleanStringArray(company.preferred_buyers),
    maxTravelDistanceKm: company.max_travel_distance_km,
    typicalProjectSize: company.typical_project_size || "",
    profileNotesForAi: company.profile_notes_for_ai || "",
    matchingProfileUpdatedAt: company.matching_profile_updated_at || "",
    matchingProfileHash: company.matching_profile_hash || "",
    members,
    matchCount: matches.length,
    savedCount: 0,
    latestReportDate: reports[0]?.created_at || "",
    latestMatches: matches.slice(0, 30),
    latestReports: reports.slice(0, 5)
  };
}

function setAdminCompanyAction(companyId, action) {
  state.adminCompanyActions = {
    ...(state.adminCompanyActions || {}),
    [companyId]: action
  };
}

function clearAdminCompanyAction(companyId) {
  const next = { ...(state.adminCompanyActions || {}) };
  delete next[companyId];
  state.adminCompanyActions = next;
}

function getAdminCompanyInviteEmail(company) {
  const draft = state.adminCompanyInviteDrafts?.[company.id];
  return draft == null ? (company.billingEmail || company.contactEmail || "") : draft;
}

function setAdminCompanyAccessAction(companyId, action) {
  state.adminCompanyAccessActions = {
    ...(state.adminCompanyAccessActions || {}),
    [companyId]: action
  };
}

function clearAdminCompanyAccessAction(companyId) {
  const next = { ...(state.adminCompanyAccessActions || {}) };
  delete next[companyId];
  state.adminCompanyAccessActions = next;
}

async function inviteAdminCompanyCustomer(companyId) {
  if (!state.isAdmin || !companyId) return;
  const company = (state.adminCompanies || []).find((item) => item.id === companyId);
  const email = normalizeAccessEmail(getAdminCompanyInviteEmail(company || { id: companyId }));
  if (!email) {
    state.adminMessage = { type: "error", text: "Enter a customer email before inviting access." };
    render();
    return;
  }

  setAdminCompanyAccessAction(companyId, "invite");
  state.adminMessage = null;
  render();
  try {
    const payload = await runAdminCompanyAction(companyId, "invite_customer", { email });
    const inviteLink = buildCompanyInviteLink(payload.invite_token || "");
    await loadAdminCompanies();
    state.adminCompanyInviteLinks = {
      ...(state.adminCompanyInviteLinks || {}),
      [companyId]: inviteLink
    };
    state.adminCompanyInviteDebug = {
      ...(state.adminCompanyInviteDebug || {}),
      [companyId]: payload.debug ? {
        ...payload.debug,
        copied_url_token_length: String(payload.invite_token || "").length,
        copied_invite_url_present: Boolean(inviteLink)
      } : null
    };
    state.adminCompanyInviteDrafts = {
      ...(state.adminCompanyInviteDrafts || {}),
      [companyId]: ""
    };
    state.adminMessage = {
      type: "success",
      text: `Invite link created for ${payload.member?.email || email}. Copy it and send it manually.`
    };
    showToast("Invite link created", "success");
  } catch (error) {
    console.error("Failed to invite company customer:", error);
    state.adminMessage = {
      type: "error",
      text: `Failed to invite customer access. ${formatSupabaseError(error)}`
    };
  } finally {
    clearAdminCompanyAccessAction(companyId);
    render();
  }
}

async function revokeAdminCompanyAccess(companyId, memberId) {
  if (!state.isAdmin || !companyId || !memberId) return;
  setAdminCompanyAccessAction(companyId, "revoke");
  state.adminMessage = null;
  render();
  try {
    await runAdminCompanyAction(companyId, "revoke_customer_access", { memberId });
    await loadAdminCompanies();
    state.adminMessage = { type: "success", text: "Customer access revoked." };
    showToast("Customer access revoked", "success");
  } catch (error) {
    console.error("Failed to revoke company access:", error);
    state.adminMessage = {
      type: "error",
      text: `Failed to revoke customer access. ${formatSupabaseError(error)}`
    };
  } finally {
    clearAdminCompanyAccessAction(companyId);
    render();
  }
}

async function saveAdminCompanyMatchingProfile(companyId, formElement) {
  if (!state.isAdmin || !companyId) return;
  setAdminCompanyAction(companyId, "matching_profile");
  state.adminMessage = null;
  render();
  try {
    await runAdminCompanyAction(companyId, "update_company_matching_profile", {
      matchingProfile: buildMatchingProfilePayload(formElement)
    });
    await loadAdminCompanies();
    state.adminMessage = { type: "success", text: "Matching profile saved. Production matching is unchanged." };
    showToast("Matching profile saved", "success");
  } catch (error) {
    console.error("Failed to save matching profile:", error);
    state.adminMessage = { type: "error", text: `Failed to save matching profile. ${formatSupabaseError(error)}` };
  } finally {
    clearAdminCompanyAction(companyId);
    render();
  }
}

async function saveAdminMatchDecision(companyId, formElement) {
  if (!state.isAdmin || !companyId) return;
  try {
    const payload = buildMatchDecisionPayload(formElement);
    await runAdminCompanyAction(companyId, "upsert_match_decision", payload);
    await loadAdminCompanies();
    showToast("Match decision saved", "success");
  } catch (error) {
    console.error("Failed to save match decision:", error);
    showToast(`Could not save decision. ${formatSupabaseError(error)}`, "error");
  }
}

async function saveAdminEvaluationLabel(companyId, formElement) {
  if (!state.isAdmin || !companyId) return;
  try {
    const payload = buildEvaluationLabelPayload(formElement);
    await runAdminCompanyAction(companyId, "upsert_evaluation_label", payload);
    await loadAdminCompanies();
    showToast("Evaluation label saved", "success");
  } catch (error) {
    console.error("Failed to save evaluation label:", error);
    showToast(`Could not save evaluation label. ${formatSupabaseError(error)}`, "error");
  }
}

async function copyAdminCompanyInviteLink(companyId) {
  const link = state.adminCompanyInviteLinks?.[companyId] || "";
  if (!link) {
    showToast("Create or regenerate an invite link first.", "error");
    return;
  }
  try {
    await navigator.clipboard.writeText(link);
    showToast("Invite link copied", "success");
  } catch (error) {
    console.error("Failed to copy invite link:", error);
    showToast("Could not copy invite link", "error");
  }
}

async function refreshAdminCompanyMatches(companyId, options = {}) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this action." };
    render();
    return [];
  }

  const company = (state.adminCompanies || []).find((item) => item.id === companyId);
  if (!company) {
    state.adminMessage = { type: "error", text: "Company not found. Refresh Admin companies and try again." };
    render();
    return [];
  }

  if (!options.skipAction) setAdminCompanyAction(companyId, "refresh");
  if (!options.silent) {
    state.adminMessage = null;
    render();
  }

  try {
    const payload = await runAdminCompanyAction(companyId, "refresh_matches");
    const refreshedCount = Number(payload.matches_refreshed || 0);

    await Promise.all([loadAdminCompanies(), loadAdminReviewQueue()]);
    if (state.companyId === companyId) await loadStoredMatchesForCurrentCompany();
    if (!options.silent) {
      state.adminMessage = {
        type: "success",
        text: `Refreshed ${refreshedCount} eligible matches for ${company.companyName}.`
      };
      showToast("Company matches refreshed", "success");
      render();
    }
    return payload;
  } catch (error) {
    console.error("Failed to refresh admin company matches:", error);
    state.adminMessage = {
      type: "error",
      text: `Failed to refresh matches for ${company.companyName}. ${formatSupabaseError(error)}`
    };
    render();
    if (options.throwOnError) throw error;
    return [];
  } finally {
    if (!options.skipAction) {
      clearAdminCompanyAction(companyId);
      render();
    }
  }
}

async function generateAdminCompanyReport(companyId) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this action." };
    render();
    return;
  }

  const company = (state.adminCompanies || []).find((item) => item.id === companyId);
  if (!company) {
    state.adminMessage = { type: "error", text: "Company not found. Refresh Admin companies and try again." };
    render();
    return;
  }

  setAdminCompanyAction(companyId, "report");
  state.adminMessage = null;
  render();

  try {
    const payload = await runAdminCompanyAction(companyId, "generate_report", {
      reportMode: state.adminReportMode || "all_current"
    });
    if (!payload.report_created) {
      state.adminMessage = {
        type: "error",
        text: getAdminNoReportMessage(payload, company.companyName)
      };
      render();
      return;
    }

    await Promise.all([loadAdminReports(), loadAdminCompanies(), loadAdminReviewQueue()]);
    if (state.companyId === companyId) await loadReportsForCurrentCompany();
    state.adminMessage = {
      type: "success",
      text: `Generated ${formatAdminReportMode(payload.report_mode || state.adminReportMode)} report for ${company.companyName} with ${Number(payload.report_items || 0)} item${Number(payload.report_items || 0) === 1 ? "" : "s"}. Open the Reports tab to review it.`
    };
    showToast("Company report generated", "success");
  } catch (error) {
    console.error("Failed to generate admin company report:", error);
    state.adminMessage = {
      type: "error",
      text: `Failed to generate report for ${company.companyName}. ${formatSupabaseError(error)}`
    };
  } finally {
    clearAdminCompanyAction(companyId);
    render();
  }
}

async function reviewAdminMatch(matchId, companyId, reviewAction) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this action." };
    render();
    return;
  }
  if (!matchId || !companyId || !["approve", "reject"].includes(reviewAction)) {
    state.adminMessage = { type: "error", text: "Missing review action details." };
    render();
    return;
  }

  state.adminReviewActions = {
    ...(state.adminReviewActions || {}),
    [matchId]: reviewAction
  };
  state.adminMessage = null;
  render();

  try {
    const payload = await runAdminCompanyAction(companyId, "review_match", {
      matchId,
      reviewAction
    });
    await Promise.all([loadAdminReviewQueue(), loadAdminCompanies()]);
    if (state.companyId === companyId) await loadStoredMatchesForCurrentCompany();
    state.adminMessage = {
      type: "success",
      text: payload.message || (reviewAction === "approve" ? "Match approved for customer reports." : "Match rejected and hidden.")
    };
    showToast(reviewAction === "approve" ? "Match approved" : "Match rejected", "success");
  } catch (error) {
    console.error("Failed to review admin match:", error);
    state.adminMessage = {
      type: "error",
      text: `Failed to ${reviewAction} match. ${formatSupabaseError(error)}`
    };
  } finally {
    const next = { ...(state.adminReviewActions || {}) };
    delete next[matchId];
    state.adminReviewActions = next;
    render();
  }
}

async function runAdminAiReview(matchId, options = {}) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this action." };
    render();
    return;
  }
  if (!matchId) {
    state.adminMessage = { type: "error", text: "Missing match ID for AI review." };
    render();
    return;
  }

  state.adminAiReviewActions = {
    ...(state.adminAiReviewActions || {}),
    [matchId]: true
  };
  state.adminAiReviewError = null;
  state.adminMessage = null;
  render();

  try {
    const payload = await requestAiMatchReview(matchId, { force: options.force === true });
    await loadAdminReviewQueue();
    await loadAdminCompanies();
    state.adminMessage = {
      type: "success",
      text: payload.cached ? "Loaded cached AI review." : options.force ? "AI review re-run completed." : "AI review completed."
    };
    showToast(payload.cached ? "AI review loaded" : options.force ? "AI review re-run completed" : "AI review completed", "success");
  } catch (error) {
    console.error("Failed to run AI match review:", error);
    state.adminAiReviewError = formatSupabaseError(error);
    state.adminMessage = {
      type: "error",
      text: `AI review failed. ${formatSupabaseError(error)}`
    };
  } finally {
    const next = { ...(state.adminAiReviewActions || {}) };
    delete next[matchId];
    state.adminAiReviewActions = next;
    render();
  }
}

async function runAdminCompanyAiReviewBatch(companyId, options = {}) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this action." };
    render();
    return;
  }
  if (!companyId) {
    state.adminMessage = { type: "error", text: "Missing company ID for AI review batch." };
    render();
    return;
  }

  state.adminCompanyAiReviewActions = {
    ...(state.adminCompanyAiReviewActions || {}),
    [companyId]: true
  };
  state.adminMessage = null;
  render();

  try {
    const payload = await requestCompanyAiReviewBatch(companyId, { limit: 10, force: options.force === true, revalidate: options.force === true });
    state.adminCompanyAiReviewResults = {
      ...(state.adminCompanyAiReviewResults || {}),
      [companyId]: payload
    };
    await Promise.all([loadAdminCompanies(), loadAdminReviewQueue()]);
    if (state.companyId === companyId) await loadStoredMatchesForCurrentCompany();
    state.adminMessage = {
      type: "success",
      text: `${options.force ? "AI revalidation" : "AI batch"} reviewed ${Number(payload.reviewed || 0)} matches. ${Number(payload.skipped || 0)} skipped.`
    };
    showToast(options.force ? "AI company revalidation completed" : "AI company review completed", "success");
  } catch (error) {
    console.error("Failed to run company AI review batch:", error);
    state.adminMessage = {
      type: "error",
      text: `AI company review failed. ${formatSupabaseError(error)}`
    };
  } finally {
    const next = { ...(state.adminCompanyAiReviewActions || {}) };
    delete next[companyId];
    state.adminCompanyAiReviewActions = next;
    render();
  }
}

async function runAdminAutomaticAiReview() {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this action." };
    render();
    return;
  }
  state.adminAutomaticAiReviewLoading = true;
  state.adminMessage = null;
  render();
  try {
    const payload = await requestAutomaticAiReviewRun({ limit: 10 });
    state.adminAutomaticAiReviewResult = payload;
    await Promise.all([loadAdminCompanies(), loadAdminReviewQueue()]);
    state.adminMessage = {
      type: "success",
      text: `Automatic AI review created ${Number(payload.ai_reviews_created || 0)} reviews across ${Number(payload.companies_checked || 0)} companies.`
    };
    showToast("Automatic AI review completed", "success");
  } catch (error) {
    console.error("Failed to run automatic AI review:", error);
    state.adminMessage = {
      type: "error",
      text: `Automatic AI review failed. ${formatSupabaseError(error)}`
    };
  } finally {
    state.adminAutomaticAiReviewLoading = false;
    render();
  }
}

async function runAdminDailyPipeline() {
  if (!state.isAdmin) return;
  state.adminDailyPipelineLoading = true;
  state.adminMessage = null;
  render();
  try {
    const payload = await requestDailyPipelineRun();
    state.adminDailyPipelineResult = payload;
    await Promise.all([refreshAdminOperationsData(), loadAdminCompanies(), loadAdminReviewQueue()]);
    state.adminMessage = {
      type: payload.errors?.length ? "error" : "success",
      text: `Daily pipeline finished: ${Number(payload.sources_imported || 0)} sources, ${Number(payload.companies_refreshed || 0)} companies, ${Number(payload.ai_reviews_created || 0)} AI reviews.`
    };
  } catch (error) {
    console.error("Failed to run daily pipeline:", error);
    state.adminMessage = { type: "error", text: `Daily pipeline failed. ${formatSupabaseError(error)}` };
  } finally {
    state.adminDailyPipelineLoading = false;
    render();
  }
}

async function toggleCompanyAutoAiReview(companyId, enabled) {
  if (!state.isAdmin || !companyId) return;
  const selectedCompany = (state.adminCompanies || []).find((company) => company.id === companyId);
  state.adminMessage = null;
  render();
  try {
    await updateCompanyAutoAiReviewEnabled(companyId, enabled);
    state.adminCompanies = (state.adminCompanies || []).map((company) => company.id === companyId ? {
      ...company,
      autoAiReviewEnabled: enabled
    } : company);
    await loadAdminCompanies();
    state.adminMessage = {
      type: "success",
      text: `Automatic AI review ${enabled ? "enabled" : "disabled"} for company.`
    };
    render();
  } catch (error) {
    console.error("Failed to toggle company automatic AI review:", error);
    const debug = error?.details || {};
    state.adminMessage = {
      type: "error",
      text: `Failed to update automatic AI review setting. ${formatSupabaseError(error)} Debug: company_id=${companyId}; company=${selectedCompany?.companyName || "unknown"}; email=${selectedCompany?.contactEmail || "unknown"}; returned_rows=${debug.rowCount ?? "unknown"}; returned_data=${debug.dataReturned === false ? "false" : "unknown"}.`
    };
    render();
  }
}

async function runAdminCompanyAction(companyId, action, extra = {}) {
  const endpoint = getAdminCompanyActionsEndpoint();
  if (!endpoint) {
    throw new Error("Admin company actions are not configured. Set window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL or window.VERKRADAR_SUPABASE_URL.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: await getTedImportHeaders(),
    body: JSON.stringify({ companyId, action, ...extra })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || `Admin company action failed with status ${response.status}`);
  }
  return payload;
}

function formatAdminReportMode(mode) {
  return mode === "all_current" ? "current active opportunities" : "new opportunities";
}

function getAdminNoReportMessage(payload, companyName) {
  const mode = payload?.report_mode || state.adminReportMode || "all_current";
  return payload?.message || (mode === "new_only"
    ? "No new eligible opportunities found since the previous report."
    : `No customer-report-ready matches found for ${companyName}.`);
}

async function refreshAdminOperationsData() {
  if (!state.isAdmin) return;
  await Promise.all([
    loadImportRunsForAdmin(),
    loadNewestImportedTedOpportunities(),
    loadAdminReports(),
    loadTrialRequestsForAdmin(),
    loadSourceCoverageForAdmin(),
    loadAdminCompanies(),
    loadAdminReviewQueue()
  ]);
  showToast("Automation status refreshed", "success");
  render();
}

function mapSupabaseOpportunity(row) {
  const rawPayload = row.raw_payload && typeof row.raw_payload === "object" ? row.raw_payload : {};
  const sourceName = row.sources?.name || rawPayload.source_name || "";
  const qualityStatus = normalizeOpportunityQualityStatus(rawPayload.quality_status || rawPayload.qualityStatus, {
    source: sourceName,
    sourceType: row.sources?.source_type || "",
    title: row.title || "",
    description: sanitizeOpportunityDescription(row.description || "", rawPayload, sourceName, row.title || ""),
    rawPayload
  });
  const intent = getOpportunityIntent({
    source: sourceName,
    sourceType: row.sources?.source_type || "",
    title: row.title || "",
    description: row.description || "",
    category: row.category || "",
    keywords: Array.isArray(row.keywords) ? row.keywords : [],
    qualityStatus,
    rawPayload
  });
  return {
    id: row.id,
    externalId: row.external_id || "",
    countryCode: row.country_code || "",
    title: row.title,
    buyer: getCleanOpportunityBuyer(row.buyer, sourceName, rawPayload),
    source: sourceName || "Supabase",
    sourceType: row.sources?.source_type || "",
    category: row.category || "Other",
    type: row.type || "tender",
    description: row.description || "",
    deadline: row.deadline,
    deadlineAt: rawPayload.deadline_at || "",
    publishedDate: row.published_date,
    createdAt: row.created_at,
    updatedAt: row.updated_at || "",
    location: sanitizeOpportunityLocation(row.location || "Unknown", rawPayload, sourceName, row.title || "", row.description || ""),
    estimatedValue: row.estimated_value,
    currency: row.currency || "ISK",
    url: row.url || "",
    cpvCode: row.cpv_code || "",
    requirements: Array.isArray(row.requirements) ? row.requirements : [],
    keywords: Array.isArray(row.keywords) ? row.keywords : [],
    difficulty: row.difficulty || "medium",
    status: row.status || "open",
    qualityStatus,
    intent,
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
    nextSteps: Array.isArray(row.next_steps) ? row.next_steps : [],
    safetyStatus: row.safety_status || "needs_review",
    safetyReasons: Array.isArray(row.safety_reasons) ? row.safety_reasons : [],
    alertEligible: Boolean(row.alert_eligible),
    reviewRequired: Boolean(row.review_required),
    reviewedAt: row.reviewed_at || "",
    reviewNote: row.review_note || ""
  };
}

function sanitizeOpportunityDescription(description, rawPayload = {}, sourceName = "", title = "") {
  rawPayload = rawPayload && typeof rawPayload === "object" ? rawPayload : {};
  const text = String(description || "").replace(/\s+/g, " ").trim();
  const source = normalizeLocationText(sourceName);
  if (!text) return "";

  if (source.includes("rikiskaup") || source.includes("utbodsvefur")) {
    const cleaned = extractUsefulUtbodsvefurDescription(text, rawPayload, title);
    if (cleaned) return cleaned;
    if (isGenericUtbodsvefurDescription(text) || isPollutedUtbodsvefurDescription(text)) {
      return state.language === "is"
        ? "Útboðstilkynning flutt inn af Útboðsvef. Opnið upprunasíðuna til að staðfesta kaupanda, skilafrest, kröfur og útboðsgögn."
        : "Procurement notice imported from Útboðsvefur. Open the source page to confirm buyer, deadline, requirements and tender documents.";
    }
  }

  return text;
}

function extractUsefulUtbodsvefurDescription(text, rawPayload = {}, title = "") {
  rawPayload = rawPayload && typeof rawPayload === "object" ? rawPayload : {};
  const compact = String(text || "").replace(/\s+/g, " ").trim();
  if (!compact) return "";
  const starts = [
    compact.search(/F\.h\.[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),
    compact.search(/(?:Reykjavíkurborg|sveitarfélag|bærinn|kaupandi)[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),
    compact.search(/óskar eftir tilboðum|óskað eftir tilboðum|oskar eftir tilbodum|oskad eftir tilbodum/i),
    compact.search(/verkefnið felst|verkið felst|verkið felur|gatna-|gatnagerð|stígagerð/i),
  ].filter((index) => index >= 0);
  if (!starts.length) return "";
  const start = Math.min(...starts);
  const stop = compact.slice(start).search(/\s+(Nánari upplýsingar|Útboðsgögn afhent|Opnun tilboða|Opnun tilboda|Auglýsandi|Flokkar|Tengdar fréttir|Fjöldi útboð)\b/i);
  const end = stop > 120 ? start + stop : start + 1200;
  const parts = [compact.slice(start, end).trim()];
  const deadlineText = rawPayload.extracted_deadline_text || rawPayload.deadline_text || "";
  if (deadlineText && !parts[0].includes(String(deadlineText))) parts.push(`Skilafrestur: ${deadlineText}`);
  const cleaned = uniqueStrings(parts)
    .join(" ")
    .replace(/^(Útboðsvefur\s*){1,}/i, "")
    .replace(/\s+/g, " ")
    .trim();
  if (isPollutedUtbodsvefurDescription(cleaned)) return "";
  return cleaned || title;
}

function isGenericUtbodsvefurDescription(text) {
  return /Procurement notice imported from Útboðsvefur|Open the source page for full buyer details/i.test(String(text || ""));
}

function isPollutedUtbodsvefurDescription(text) {
  const compact = String(text || "");
  const organizationSignals = [
    "Framkvæmdasýslan",
    "Ríkiseignir",
    "Garðabær",
    "Grímsnes",
    "Fjöldi útboð",
    "Útboðsvefur.is - Opinber útboð",
  ].filter((term) => compact.includes(term)).length;
  return organizationSignals >= 3 || /^Útboðsvefur\s+Útboðsvefur\.is/i.test(compact);
}

function sanitizeOpportunityLocation(location, rawPayload = {}, sourceName = "", title = "", description = "") {
  const inferred = inferLocationFromOpportunityText(`${title} ${description} ${JSON.stringify(rawPayload || {})}`);
  const current = String(location || "").trim();
  if (inferred && (!current || /unknown|all iceland|iceland/i.test(current))) return inferred;
  return current || inferred || "Unknown";
}

function inferLocationFromOpportunityText(text) {
  const normalized = normalizeLocationText(text);
  if (normalized.includes("vogabyggd") || normalized.includes("reykjavikurborg") || normalized.includes("strandstigur")) {
    return "Reykjavík / Höfuðborgarsvæðið";
  }
  return "";
}

function isDashboardVisibleOpportunity(opp) {
  if (!opp || opp.status !== "open") return false;
  if (!opp.url || opp.url === "#") return false;
  if (daysUntilDeadline(opp.deadline) < 0) return false;
  if (isDemoTestOpportunity(opp)) return false;
  if (opp.rawPayload?.extraction_method === "parent_article_with_child_opportunities") return false;
  if (isSecondaryDuplicateOpportunity(opp)) return false;
  if (isStaleCustomerOpportunity(opp)) return false;
  if (!isTedOpportunity(opp)) return true;
  const country = getOpportunityCountryCode(opp);
  return ["IS", "NO", "DK", "SE", "FI"].includes(country);
}

function isDemoTestOpportunity(opp) {
  const source = normalizeLocationText(opp?.source || "");
  const title = normalizeLocationText(opp?.title || "");
  const externalId = normalizeLocationText(opp?.externalId || "");
  const sourceType = normalizeLocationText(opp?.sourceType || "");
  const rawPayload = opp?.rawPayload || {};
  const haystack = `${source} ${title} ${externalId} ${sourceType}`;

  if (rawPayload.is_demo === true || rawPayload.demo === true) return true;
  if (source === "private lead" || source.includes("private lead")) return true;
  if (source === "grant portal" || source.includes("grant portal")) return true;
  if (source === "manual test") return true;
  if (source.includes("manual test")) return true;
  if (["demo", "test", "sample", "mock", "fake"].some((value) => sourceType.includes(value))) return true;
  if (/\b(demo|test|sample|mock|fake|manual)\b/.test(haystack)) return true;
  if (title.includes("manual test")) return true;
  if (title.includes("municipal websites example")) return true;
  if (externalId.includes("demo") || externalId.includes("test")) return true;
  return false;
}

function normalizeOpportunityQualityStatus(status, opp = {}) {
  const value = String(status || "").toLowerCase();
  const intentOverride = normalizeOpportunityIntent(opp?.rawPayload?.opportunity_intent || opp?.rawPayload?.intent);
  if (intentOverride === "confirmed_tender") return "confirmed_tender";
  if (intentOverride === "early_opportunity" || intentOverride === "market_signal") return "early_signal";
  if (intentOverride === "news_context" || intentOverride === "not_opportunity") return "needs_review";
  if (isTedOpportunity(opp)) return "confirmed_tender";
  if (isVegagerdinExtractedProject(opp)) {
    const tenderState = getVegagerdinExtractedTenderState(opp);
    if (["tender_awarded", "awarded", "already_tendered", "announced"].includes(tenderState)) return "confirmed_tender";
    if (tenderState === "upcoming_tender") return "early_signal";
    return "needs_review";
  }
  if (value === "early_signal" || value === "needs_review") return value;
  const text = getOpportunityQualityText(opp);
  if (containsAnyNormalizedPhrase(text, ["senn í útboð", "senn i utbod"])) return "early_signal";
  if (containsConfirmedTenderIntent(text)) return "confirmed_tender";
  if (containsTitleNewsIntent(opp?.title || "") && !containsConfirmedTenderIntent(text)) return "needs_review";
  if (containsEarlySignalIntent(text)) return "early_signal";
  if (containsObviousNewsIntent(text)) return "needs_review";
  if (value === "confirmed_tender" || value === "likely_opportunity" || value === "verified") return "needs_review";
  return "needs_review";
}

function normalizeOpportunityIntent(value) {
  const normalized = String(value || "").toLowerCase().trim();
  const aliases = {
    confirmed: "confirmed_tender",
    confirmed_tender: "confirmed_tender",
    likely_opportunity: "confirmed_tender",
    verified: "confirmed_tender",
    early_signal: "early_opportunity",
    early_opportunity: "early_opportunity",
    upcoming_tender: "early_opportunity",
    market_signal: "market_signal",
    project_signal: "market_signal",
    needs_review: "market_signal",
    news_context: "news_context",
    news: "news_context",
    noise: "not_opportunity",
    not_opportunity: "not_opportunity",
    stale_opportunity: "not_opportunity",
    stale: "not_opportunity",
    expired: "not_opportunity",
  };
  return aliases[normalized] || "";
}

function getOpportunityIntent(opp = {}) {
  const override = normalizeOpportunityIntent(opp?.rawPayload?.opportunity_intent || opp?.rawPayload?.intent);
  const adminStatus = String(opp?.rawPayload?.admin_report_status || "").toLowerCase();
  if (adminStatus === "include") return "confirmed_tender";
  if (["hidden", "hide", "noise", "deleted"].includes(adminStatus)) return override || "not_opportunity";
  if (override) return override;
  if (isTedOpportunity(opp)) return "confirmed_tender";

  const text = getOpportunityQualityText(opp);
  const title = opp?.title || "";
  if (isVegagerdinExtractedProject(opp)) {
    const tenderState = getVegagerdinExtractedTenderState(opp);
    if (["tender_awarded", "awarded", "already_tendered", "announced"].includes(tenderState)) return "confirmed_tender";
    if (tenderState === "upcoming_tender") return "early_opportunity";
    return "market_signal";
  }
  if (containsConfirmedTenderIntent(text)) return "confirmed_tender";
  if (containsTitleNewsIntent(title) || containsObviousNewsIntent(text)) return "news_context";
  if (containsEarlyOpportunityIntent(text)) return "early_opportunity";
  if (containsMarketSignalIntent(text)) return "market_signal";
  return "market_signal";
}

function isVegagerdinExtractedProject(opp) {
  return opp?.rawPayload?.extraction_method === "vegagerdin_article_project_parser";
}

function getVegagerdinExtractedTenderState(opp) {
  const stored = String(opp?.rawPayload?.tender_state || "").trim();
  const inferred = inferVegagerdinExtractedTenderState(opp);
  const aliases = {
    awarded: "tender_awarded",
    open_or_published: "announced",
    planned_tender: "upcoming_tender",
    unclear: "project_signal"
  };
  const normalizedStored = aliases[stored] || stored;
  if (inferred === "tender_awarded") return "tender_awarded";
  if (inferred === "already_tendered" && !["tender_awarded", "announced"].includes(normalizedStored)) return "already_tendered";
  if (inferred === "announced" && !["tender_awarded", "already_tendered"].includes(normalizedStored)) return "announced";
  if (inferred === "upcoming_tender" && ["", "project_signal", "needs_review", "unclear"].includes(normalizedStored)) return "upcoming_tender";
  if (normalizedStored) return normalizedStored;
  return inferred;
}

function inferVegagerdinExtractedTenderState(opp) {
  const text = getOpportunityQualityText(opp);
  if (containsAnyNormalizedPhrase(text, [
    "lægstbjóðandi",
    "laegstbjodandi",
    "samningur var",
    "samið var",
    "samid var",
    "skrifað var undir verksamning",
    "skrifad var undir verksamning"
  ])) {
    return "tender_awarded";
  }
  if (containsAnyNormalizedPhrase(text, [
    "útboð var auglýst",
    "utbod var auglyst",
    "útboðið var auglýst",
    "utbodid var auglyst",
    "útboð hefur farið fram",
    "utbod hefur farid fram",
    "útboðið hefur farið fram",
    "utbodid hefur farid fram",
    "boðið út",
    "bodid ut",
    "verkið var boðið út",
    "verkid var bodid ut",
    "útboð var opnað",
    "utbod var opnad",
    "tilboð opnuð",
    "tilbod opnud"
  ])) {
    return "already_tendered";
  }
  if (containsAnyNormalizedPhrase(text, [
    "óskað eftir tilboðum",
    "oskad eftir tilbodum",
    "tilboðsfrestur",
    "tilbodsfrestur",
    "skilafrestur",
    "verðfyrirspurn",
    "verdfyrirspurn",
    "rammasamningur",
    "forval"
  ])) {
    return "announced";
  }
  if (containsAnyNormalizedPhrase(text, [
    "áætlað útboð",
    "aaetlad utbod",
    "áætlað er að bjóða út",
    "aaetlad er ad bjoda ut",
    "fyrirhugað útboð",
    "fyrirhugad utbod",
    "senn í útboð",
    "senn i utbod",
    "útboð verður",
    "utbod verdur"
  ])) {
    return "upcoming_tender";
  }
  return "project_signal";
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
    "útboðsauglýsing",
    "utbodsauglysing",
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
    "forval",
    "tender",
    "procurement",
    "skilafrestur",
    "útboðsgögn",
    "utbodsgogn"
  ]);
}

function isStaleCustomerOpportunity(opp = {}) {
  const payload = opp.rawPayload || {};
  if (payload.stale_status === "stale_or_expired" || payload.opportunity_intent === "stale_opportunity") return true;
  return getStaleOpportunityInfo({
    title: opp.title,
    description: opp.description,
    content: [
      opp.category,
      opp.source,
      Array.isArray(opp.keywords) ? opp.keywords.join(" ") : "",
    ].filter(Boolean).join(" "),
    publishedDate: opp.publishedDate,
    deadline: opp.deadline,
    sourceName: opp.source,
    sourceType: opp.sourceType,
    connectorType: payload.connector_type,
  }).isStale;
}

function getStaleOpportunityInfo(input = {}) {
  const deadline = String(input.deadline || "").slice(0, 10);
  if (deadline && daysUntilDeadline(deadline) >= 0) {
    return { isStale: false, reason: "", thresholdDays: null, ageDays: null, oldYears: [], expiredKeywords: [] };
  }

  const text = normalizeLocationText([input.title, input.description, input.content].filter(Boolean).join(" "));
  const oldYears = getOldYearsFromText(text);
  const expiredKeywords = getExpiredResultKeywordsFromText(text);
  const publishedDate = parseIsoDate(input.publishedDate);
  const ageDays = publishedDate ? Math.floor((Date.now() - new Date(`${publishedDate}T00:00:00Z`).getTime()) / 86400000) : null;
  const thresholdDays = isStrictStaleSource(input) ? 45 : 60;

  if (oldYears.length) {
    return { isStale: true, reason: `Old year detected (${oldYears.join(", ")}) and no future deadline found.`, thresholdDays, ageDays, oldYears, expiredKeywords };
  }
  if (expiredKeywords.length) {
    return { isStale: true, reason: `Expired/result wording detected (${expiredKeywords.slice(0, 3).join(", ")}) and no future deadline found.`, thresholdDays, ageDays, oldYears, expiredKeywords };
  }
  if (ageDays !== null && ageDays > thresholdDays) {
    return { isStale: true, reason: `Published ${ageDays} days ago with no current deadline.`, thresholdDays, ageDays, oldYears, expiredKeywords };
  }
  return { isStale: false, reason: "", thresholdDays, ageDays, oldYears, expiredKeywords };
}

function isStrictStaleSource(input = {}) {
  const text = normalizeLocationText(`${input.sourceName || ""} ${input.sourceType || ""} ${input.connectorType || ""}`);
  return String(input.connectorType || "") === "rss_feed" && [
    "municipal",
    "sveitarfelag",
    "akranes",
    "borgarbyggd",
    "arborg",
    "selfoss",
    "gardabaer",
    "reykjanesbaer",
    "hafnarfjordur",
    "mosfellsbaer",
    "kopavogur",
    "mulathing",
    "fjardabyggd",
  ].some((value) => text.includes(normalizeLocationText(value)));
}

function getOldYearsFromText(text) {
  const currentYear = new Date().getUTCFullYear();
  const years = new Set();
  String(text || "").replace(/\b(20[0-9]{2})\b/g, (_match, yearValue) => {
    const year = Number(yearValue);
    if (year >= 2020 && year < currentYear) years.add(year);
    return yearValue;
  });
  return Array.from(years).sort();
}

function getExpiredResultKeywordsFromText(text) {
  const phrases = [
    "niðurstaða útboðs",
    "nidurstada utbods",
    "niðurstöður útboðs",
    "nidurstodur utbods",
    "opnun tilboða",
    "opnun tilboda",
    "tilboð opnuð",
    "tilbod opnud",
    "lokið",
    "lokid",
    "lokið útboði",
    "lokid utbodi",
    "búið",
    "buid",
    "útrunnið",
    "ut runnid",
    "eldri útboð",
    "eldri utbod",
    "útboðssaga",
    "utbodssaga",
    "samningur gerður",
    "samningur gerdur",
    "verksamningur",
    "awarded",
    "tender results",
    "contract awarded",
    "expired",
  ];
  return phrases.filter((phrase) => containsAnyNormalizedPhrase(text, [phrase]));
}

function parseIsoDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
}

function containsEarlyOpportunityIntent(text) {
  return containsAnyNormalizedPhrase(text, [
    "senn í útboð",
    "senn i utbod",
    "áætlað útboð",
    "aaetlad utbod",
    "áætlað er að bjóða út",
    "aaetlad er ad bjoda ut",
    "fyrirhugað útboð",
    "fyrirhugad utbod",
    "markaðskönnun",
    "markadskonnun",
    "rfi"
  ]);
}

function containsEarlySignalIntent(text) {
  if (containsEarlyOpportunityIntent(text)) return true;
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
    "brúargerð",
    "bruargerd",
    "jarðvinna",
    "jardvinna",
    "gatnagerð",
    "gatnagerd"
  ]);
}

function containsMarketSignalIntent(text) {
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
    "brúargerð",
    "bruargerd",
    "jarðvinna",
    "jardvinna",
    "gatnagerð",
    "gatnagerd",
    "fræsing",
    "fraesing"
  ]);
}

function containsTitleNewsIntent(title) {
  return containsAnyNormalizedPhrase(title, [
    "lokun",
    "lokað",
    "lokad",
    "lokanir",
    "umferð",
    "umferd",
    "tafir",
    "hjáleið",
    "hjaleid",
    "akstursleið",
    "akstursleid",
    "vegfarendur",
    "frétt",
    "frett",
    "myndband",
    "tekur á sig mynd",
    "tekur a sig mynd",
    "opið aftur",
    "opid aftur"
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
    "kynningarfundur",
    "tilkynning",
    "fundur",
    "fjölskylduganga",
    "fjolskylduganga",
    "tafir",
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

  const location = getEffectiveOpportunityLocation(opp);
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
    password: "",
    newPassword: "",
    confirmPassword: ""
  };
}

function clearResetPasswordFields() {
  state.authForm.newPassword = "";
  state.authForm.confirmPassword = "";
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

function getAdminCompanyActionsEndpoint() {
  if (window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL) return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL;
  if (window.VERKRADAR_SUPABASE_URL) return `${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`;
  if (SUPABASE_URL) return `${SUPABASE_URL}/functions/v1/admin-company-actions`;
  return null;
}

async function readFunctionResponsePayload(response) {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { errors: [text] };
  }
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
    const payload = await readFunctionResponsePayload(response);
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
      body: JSON.stringify({
        limit: sourceId ? 50 : 20,
        maxSources: sourceId ? 1 : 6,
        sourceId: sourceId || undefined,
        refreshMatches: Boolean(sourceId),
        generateReports: false,
      }),
    });
    const payload = await readFunctionResponsePayload(response);
    const responseErrors = Array.isArray(payload.errors) ? payload.errors : [];
    const failedSources = Array.isArray(payload.failedSources) ? payload.failedSources : [];
    state.connectorImportStatus = response.ok
      ? { ...payload, failedSources }
      : {
          ...payload,
          failedSources,
          errors: responseErrors.length
            ? responseErrors
            : [`Source import failed with status ${response.status}${response.statusText ? ` ${response.statusText}` : ""}`],
        };
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
    throw new Error("You must be logged in to run this admin action.");
  }

  headers.authorization = `Bearer ${accessToken}`;
  return headers;
}

function getAuthRedirectUrl() {
  const inviteToken = state.pendingInviteToken || getStoredPendingInviteToken();
  if (inviteToken && shouldPreserveInviteForRoute(state.route)) {
    return getAuthCallbackRedirectUrl(inviteToken);
  }
  return getAppHashUrl("/onboarding");
}

function getPasswordResetRedirectUrl() {
  return getAppHashUrl("/reset-password");
}

function isExistingSignupResponse(data) {
  const identities = data?.user?.identities;
  return Array.isArray(identities) && identities.length === 0;
}

function getExistingAccountAuthActions() {
  return [
    { label: t("login"), href: getInviteAwareAuthHref("/login"), variant: "primary" },
    { label: t("forgotPassword"), href: getInviteAwareAuthHref("/forgot-password"), variant: "secondary" }
  ];
}

async function signUp(email, password) {
  syncPendingSignupPlanFromRoute();
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
    if (isExistingSignupResponse(data)) {
      state.user = null;
      state.currentUser = null;
      state.authMessage = {
        type: "error",
        text: t("signupExistingAccount"),
        actions: getExistingAccountAuthActions()
      };
      state.authForm.password = "";
      render();
      return;
    }
    if (!data.session?.user) {
      state.user = null;
      state.currentUser = null;
      const hasConfirmedNewIdentity = Array.isArray(data?.user?.identities) && data.user.identities.length > 0;
      state.authMessage = {
        type: "success",
        text: state.pendingInviteToken
          ? t("inviteSignupCreatedConfirm")
          : (hasConfirmedNewIdentity ? t("signupCreatedConfirm") : t("signupNeutralNextSteps"))
      };
      state.authForm.password = "";
      render();
      return;
    }
    state.user = data.session.user;
    state.currentUser = state.user;
    state.profileDraft = null;
    state.profileDraftDirty = false;
    await checkAdminAccess(state.user);
    state.authMessage = { type: "success", text: t("signupCreatedConfirm") };
    await loadProfileFromSupabase({ overwriteDraft: true });
    clearAuthForm();
    navigate(getPostAuthRoute());
  } catch (error) {
    console.error("Signup failed:", error);
    const isExistingAccount = isExistingAccountError(error);
    state.authMessage = {
      type: "error",
      text: formatAuthError(error, "signup"),
      actions: isExistingAccount ? getExistingAccountAuthActions() : []
    };
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

async function sendPasswordResetEmail(email) {
  state.authSubmitting = true;
  state.authMessage = null;
  render();

  try {
    if (!supabaseClient) throw new Error("Supabase client is not configured.");
    const { error } = await supabaseClient.auth.resetPasswordForEmail(String(email || "").trim(), {
      redirectTo: getPasswordResetRedirectUrl()
    });
    if (error) throw error;
    state.authMessage = {
      type: "success",
      text: "If an account exists for this email, a reset link has been sent."
    };
  } catch (error) {
    console.error("Password reset request failed:", error);
    state.authMessage = {
      type: "error",
      text: "We could not send a reset link right now. Please try again."
    };
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function updatePasswordFromReset(newPassword, confirmPassword) {
  const password = String(newPassword || "");
  const confirm = String(confirmPassword || "");

  if (!password) {
    state.authMessage = { type: "error", text: "Enter a new password." };
    render();
    return;
  }
  if (password.length < 8) {
    state.authMessage = { type: "error", text: "Password must be at least 8 characters." };
    render();
    return;
  }
  if (password !== confirm) {
    state.authMessage = { type: "error", text: "Passwords do not match." };
    render();
    return;
  }

  state.authSubmitting = true;
  state.authMessage = null;
  render();

  try {
    if (!supabaseClient) throw new Error("Supabase client is not configured.");
    const { error } = await supabaseClient.auth.updateUser({ password });
    if (error) throw error;
    clearResetPasswordFields();
    navigate("/login");
    state.authMessage = { type: "success", text: "Password updated. You can now log in." };
    render();
  } catch (error) {
    console.error("Password update failed:", error);
    state.authMessage = {
      type: "error",
      text: "This reset link may be expired or invalid. Request a new reset link and try again."
    };
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
    clearPendingInviteState();
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
      <h1>${escapeHtml(t("authRequiredTitle"))}</h1>
      <p>${escapeHtml(t("authRequiredText"))}</p>
      <button class="btn btn-primary" data-action="go" data-href="/login">${escapeHtml(t("login"))}</button>
      <button class="btn btn-secondary" data-action="go" data-href="/trial">${escapeHtml(t("createFreeDemoProfile"))}</button>
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

    state.inviteAuthEvent = event || "";
    state.user = session?.user || null;
    state.currentUser = state.user;

    if (state.user) {
      if (event === "PASSWORD_RECOVERY") {
        state.authLoaded = true;
        state.adminLoaded = true;
        state.profileLoaded = true;
        state.authMessage = null;
        navigate("/reset-password");
        return;
      }
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
    state.companyMembership = null;
    state.profileDraft = null;
    state.profileDraftDirty = false;
    state.profileLoading = false;
    state.profileLoadError = null;
    state.companyId = null;
    state.storedMatches = [];
    clearOpportunityDetailsState();
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
    await handleAuthCallbackIfPresent();
    await loadCurrentSession();
    state.authLoaded = true;

    if (state.currentUser && getPendingInviteToken()) {
      const inviteToken = getPendingInviteToken();
      state.pendingInviteToken = setStoredPendingInviteToken(inviteToken);
      state.adminLoaded = true;
      state.profileLoaded = true;
      replaceHashRoute(`/accept-invite?token=${encodeURIComponent(inviteToken)}`);
      await updateInviteDebug({
        callback_invite_present: Boolean(getInviteTokenFromRoute(state.route)),
        pending_invite_present: true,
        onboarding_redirect_blocked: true,
        accept_started_from_callback: true,
        final_route: `/accept-invite?token=${encodeURIComponent(inviteToken)}`,
      });
    } else if (state.currentUser) {
      await checkAdminStatus();
      await loadProfileFromSupabase({ overwriteDraft: true, showGlobalLoading: true });
    } else {
      state.profile = null;
      state.companyMembership = null;
      state.profileDraft = null;
      state.profileDraftDirty = false;
      state.profileLoading = false;
      state.profileLoadError = null;
      state.companyId = null;
      clearOpportunityDetailsState();
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
    if (isPasswordRecoveryRoute()) replaceHashRoute("/reset-password");
    else redirectAuthenticatedPublicRoute({ replace: true });
    render();
    afterRouteRender();
  }
}

async function loadAuthenticatedCompany() {
  if (!supabaseClient || !state.user) return { company: null, membership: null };

  const { data: ownedCompany, error: ownerError } = await supabaseClient
    .from("companies")
    .select("*")
    .eq("owner_id", state.user.id)
    .maybeSingle();
  if (ownerError) throw ownerError;
  if (ownedCompany) return { company: ownedCompany, membership: null };

  const memberships = await loadActiveCompanyMemberships(supabaseClient, state.user);
  const membership = memberships[0] || null;
  if (!membership?.company_id) return { company: null, membership: null };

  const { data: memberCompany, error: companyError } = await supabaseClient
    .from("companies")
    .select("*")
    .eq("id", membership.company_id)
    .maybeSingle();
  if (companyError) throw companyError;
  return { company: memberCompany || null, membership };
}

async function loadCompanyProfile(options = {}) {
  const { overwriteDraft = false } = options;
  if (!supabaseClient || !state.user) {
    state.profile = null;
    state.companyMembership = null;
    if (overwriteDraft || !state.profileDraftDirty) state.profileDraft = null;
    render();
    return;
  }

  try {
    await claimInvitedCompanyMemberships(supabaseClient, state.user).catch((error) => {
      console.warn("Failed to claim invited company memberships:", error);
      return [];
    });
    const { company, membership } = await loadAuthenticatedCompany();
    if (!company) {
      state.companyId = null;
      state.companyMembership = null;
      state.storedMatches = [];
      clearOpportunityDetailsState();
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
      clearOpportunityDetailsState();
      state.reports = [];
      state.reportsLoaded = false;
      state.reportsLoadError = null;
      state.selectedReportId = null;
    }
    state.companyId = company.id;
    state.companyMembership = membership || null;
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
    await loadOpportunityActionsForCurrentCompany();
    await loadStoredMatchesForCurrentCompany();
    render();
    afterRouteRender();
  } catch (error) {
    console.error("Failed to load Supabase company profile:", error);
    state.profileLoadError = formatSupabaseError(error);
    if (!state.profileDraftDirty) {
      state.companyId = null;
      state.companyMembership = null;
      state.storedMatches = [];
      clearOpportunityDetailsState();
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
    kennitala: String(profile.kennitala || "").trim(),
    contactEmail: String(profile.contactEmail || "").trim(),
    billingEmail: String(profile.billingEmail || "").trim(),
    contactName: String(profile.contactName || "").trim(),
    phone: String(profile.phone || "").trim(),
    address: String(profile.address || "").trim(),
    website: String(profile.website || "").trim(),
    industry: String(profile.industry || "").trim(),
    selectedPlan: normalizeSelectedPlan(profile.selectedPlan || state.pendingSignupPlan || state.profile?.selectedPlan || state.profile?.plan) || "basic",
    billingStatus: profile.billingStatus || state.profile?.billingStatus || "trial",
    trialStartedAt: profile.trialStartedAt || state.profile?.trialStartedAt || new Date().toISOString(),
    trialEndsAt: profile.trialEndsAt || state.profile?.trialEndsAt || new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
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
    includeLowConfidence: Boolean(profile.includeLowConfidence),
    autoAlertMode: profile.autoAlertMode || "auto_safe_only"
  };
  const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
  if (userError) throw userError;
  if (!user) {
    throw new Error("You must be logged in to save a company profile.");
  }
  state.user = user;

  const companyPayload = {
    company_name: cleanProfile.companyName,
    contact_email: cleanProfile.contactEmail || user.email,
    kennitala: cleanProfile.kennitala || null,
    billing_email: cleanProfile.billingEmail || cleanProfile.contactEmail || user.email,
    contact_name: cleanProfile.contactName || null,
    phone: cleanProfile.phone || null,
    address: cleanProfile.address || null,
    website: cleanProfile.website || null,
    industry: cleanProfile.industry,
    plan: cleanProfile.selectedPlan,
    selected_plan: cleanProfile.selectedPlan,
    billing_status: cleanProfile.billingStatus,
    trial_started_at: cleanProfile.trialStartedAt,
    trial_ends_at: cleanProfile.trialEndsAt,
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
    include_low_confidence: cleanProfile.includeLowConfidence,
    auto_alert_mode: cleanProfile.autoAlertMode
  };
  const companyRequest = state.companyId
    ? supabaseClient.from("companies").update(companyPayload).eq("id", state.companyId).select().single()
    : supabaseClient.from("companies").upsert({ ...companyPayload, owner_id: user.id }, { onConflict: "owner_id" }).select().single();
  const { data: company, error: companyError } = await companyRequest;

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
  state.pendingSignupPlan = "";
  clearStoredSelectedPlan();
  saveProfile(cleanProfile);
}

function mapSupabaseCompanyProfile(company, services, locations, keywords) {
  return {
    id: company.id || "",
    ownerId: company.owner_id || "",
    companyName: company.company_name || "",
    kennitala: company.kennitala || "",
    contactEmail: company.contact_email || "",
    billingEmail: company.billing_email || company.contact_email || "",
    contactName: company.contact_name || "",
    phone: company.phone || "",
    address: company.address || "",
    website: company.website || "",
    industry: company.industry || "",
    plan: company.plan || company.selected_plan || "basic",
    selectedPlan: company.selected_plan || company.plan || "basic",
    billingStatus: company.billing_status || "trial",
    trialStartedAt: company.trial_started_at || "",
    trialEndsAt: company.trial_ends_at || "",
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
    includeLowConfidence: Boolean(company.include_low_confidence),
    autoAlertMode: company.auto_alert_mode || "auto_safe_only"
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
    const storedMatches = (data || [])
      .filter((row) => row.opportunities)
      .map(mapStoredMatch)
      .filter(isCustomerMatchEligibleOpportunity)
      .filter(isDashboardVisibleOpportunity);
    const opportunityIds = storedMatches.map((match) => match.id).filter(Boolean);
    let aiReviews = [];
    if (opportunityIds.length) {
      const { data: reviewRows, error: reviewError } = await supabaseClient
        .from("ai_match_reviews")
        .select("company_id, opportunity_id, fit, confidence, send_to_client, reason, fit_reasons, risks_or_questions, suggested_client_summary, created_at, updated_at")
        .eq("company_id", state.companyId)
        .in("opportunity_id", opportunityIds);
      if (reviewError) console.warn("Failed to load AI reviews for report ranking:", reviewError);
      aiReviews = reviewRows || [];
    }
    state.storedMatches = mergeAiReviewsIntoReportMatches(storedMatches, aiReviews);
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
          match_reasons,
          risks,
          sort_order,
          opportunities (
            *,
            sources (
              name,
              source_type
            )
          )
        )
      `)
      .eq("company_id", state.companyId)
      .is("archived_at", null)
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
        match_reasons: opp.matchReasons || [],
        risks: opp.risks || [],
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

async function archiveReport(reportId) {
  if (!reportId || !supabaseClient || !state.user) return;
  const confirmed = window.confirm(state.language === "is"
    ? "Ertu viss um að þú viljir fela þetta yfirlit? Þetta er ekki hægt að afturkalla í mælaborðinu."
    : "Are you sure you want to hide this report? This cannot be undone from the dashboard.");
  if (!confirmed) return;

  state.reportArchiveLoading = true;
  state.reportMessage = null;
  render();

  try {
    const { error } = await supabaseClient
      .from("reports")
      .update({
        archived_at: new Date().toISOString(),
        archived_by: state.user.id
      })
      .eq("id", reportId)
      .eq("company_id", state.companyId);

    if (error) throw error;
    if (state.selectedReportId === reportId) state.selectedReportId = null;
    state.reports = state.reports.filter((report) => report.id !== reportId);
    state.reportMessage = {
      type: "success",
      text: state.language === "is" ? "Yfirlitið var falið." : "Report hidden."
    };
    showToast(state.language === "is" ? "Yfirlit falið" : "Report hidden", "success");
  } catch (error) {
    console.error("Failed to archive report:", error);
    state.reportMessage = {
      type: "error",
      text: state.language === "is"
        ? `Gat ekki falið yfirlitið. ${formatSupabaseError(error)}`
        : `Could not hide report. ${formatSupabaseError(error)}`
    };
  } finally {
    state.reportArchiveLoading = false;
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
    const { company } = await loadAuthenticatedCompany();
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
    await loadOpportunityActionsForCurrentCompany();
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
    const description = String(values.description || "").trim() || `Manual opportunity: ${title}`;

    const sourceId = await getOrCreateSource(sourceName);
    const insertPayload = {
      source_id: sourceId,
      external_id: `manual-${Date.now()}`,
      title: title,
      buyer: String(values.buyer || "").trim() || null,
      category: String(values.category || "").trim() || null,
      type: String(values.type || "").trim() || "tender",
      description,
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
    state.adminOpportunityDraft = createEmptyAdminOpportunityDraft();
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

async function updateOpportunityReportOverride(id, override) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this page." };
    render();
    return;
  }

  const opp = state.opportunities.find((item) => item.id === id);
  if (!opp) return;

  const overrideMap = {
    include: {
      opportunity_intent: "confirmed_tender",
      quality_status: "confirmed_tender",
      hidden_from_reports: false,
      admin_report_status: "include"
    },
    hide: {
      hidden_from_reports: true,
      admin_report_status: "hidden"
    },
    noise: {
      opportunity_intent: "not_opportunity",
      quality_status: "needs_review",
      hidden_from_reports: true,
      admin_report_status: "noise"
    },
    confirmed_tender: {
      opportunity_intent: "confirmed_tender",
      quality_status: "confirmed_tender",
      hidden_from_reports: false,
      admin_report_status: "include"
    },
    early_opportunity: {
      opportunity_intent: "early_opportunity",
      quality_status: "early_signal",
      hidden_from_reports: false,
      admin_report_status: "include"
    }
  };
  const patch = overrideMap[override];
  if (!patch) return;

  state.adminUpdatingId = id;
  state.adminMessage = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client is not configured.");
    }

    const rawPayload = {
      ...(opp.rawPayload || {}),
      ...patch,
      admin_reviewed_at: new Date().toISOString()
    };
    const { error } = await supabaseClient
      .from("opportunities")
      .update({ raw_payload: rawPayload })
      .eq("id", id);
    if (error) throw error;

    state.adminMessage = { type: "success", text: "Report visibility updated." };
    await loadOpportunities();
    showToast("Report visibility updated", "success");
  } catch (error) {
    const message = formatSupabaseError(error);
    console.error("Failed to update report visibility:", error);
    state.adminMessage = { type: "error", text: `Failed to update report visibility. ${message}` };
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
    return t("emailOrPasswordIncorrect");
  }

  if (message.includes("email not confirmed")) {
    return t("confirmEmailBeforeLogin");
  }

  if (isExistingAccountError(error)) {
    return t("signupExistingAccount");
  }

  if (message.includes("password") && message.includes("characters")) {
    return t("passwordTooShort");
  }

  if (message.includes("rate limit") || message.includes("too many")) {
    return t("tooManyAttempts");
  }

  if (mode === "signup") {
    return t("couldNotCreateAccount");
  }

  return t("couldNotLogin");
}

function isExistingAccountError(error) {
  const message = String(error?.message || error || "").toLowerCase();
  const code = String(error?.code || error?.status || "").toLowerCase();
  return (
    message.includes("user already registered") ||
    message.includes("already registered") ||
    message.includes("already exists") ||
    code.includes("user_already_exists") ||
    code.includes("email_exists")
  );
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

function arrayFieldText(value) {
  return cleanStringArray(value).join(", ");
}

function nullableNumber(value) {
  if (value == null || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

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

function initializeAdminTrialCompanyDraft() {
  if (state.adminTrialCompanyDraft) return;
  const request = getSelectedAdminTrialRequest();
  state.adminTrialCompanyDraft = buildCompanyDraftFromTrialRequest(request, () => createEmptyProfile(""));
}

function startAdminTrialCompanyCreation(requestId) {
  const request = getAdminTrialRequestById(requestId);
  if (!request || request.converted_company_id || request.status === "converted") return;
  state.selectedAdminTrialRequestId = request.id;
  state.adminTrialCompanyDraft = buildCompanyDraftFromTrialRequest(request, () => createEmptyProfile(""));
  state.adminTrialCompanyMessage = "";
  state.adminTrialCompanyError = "";
  render();
}

function toggleAdminTrialCompanySuggestion(field, value) {
  if (!["services", "includeKeywords", "excludeKeywords"].includes(field) || !value) return;
  initializeAdminTrialCompanyDraft();
  const currentValues = Array.isArray(state.adminTrialCompanyDraft[field]) ? state.adminTrialCompanyDraft[field] : [];
  const normalized = normalizeSuggestionValue(value);
  const exists = currentValues.some((item) => normalizeSuggestionValue(item) === normalized);
  state.adminTrialCompanyDraft[field] = exists
    ? currentValues.filter((item) => normalizeSuggestionValue(item) !== normalized)
    : [...currentValues, value];
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
  if (state.pendingSignupPlan) state.profileDraft.selectedPlan = state.pendingSignupPlan;
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
  if (hasFormControl(formElement, "kennitala")) nextDraft.kennitala = String(form.get("kennitala") || "").trim();
  if (hasFormControl(formElement, "contactEmail")) nextDraft.contactEmail = String(form.get("contactEmail") || "").trim();
  if (hasFormControl(formElement, "billingEmail")) nextDraft.billingEmail = String(form.get("billingEmail") || "").trim();
  if (hasFormControl(formElement, "contactName")) nextDraft.contactName = String(form.get("contactName") || "").trim();
  if (hasFormControl(formElement, "phone")) nextDraft.phone = String(form.get("phone") || "").trim();
  if (hasFormControl(formElement, "address")) nextDraft.address = String(form.get("address") || "").trim();
  if (hasFormControl(formElement, "website")) nextDraft.website = String(form.get("website") || "").trim();
  if (hasFormControl(formElement, "selectedPlan")) nextDraft.selectedPlan = normalizeSelectedPlan(form.get("selectedPlan")) || "basic";
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

function updateAdminTrialCompanyDraftFromForm(formElement) {
  initializeAdminTrialCompanyDraft();
  state.adminTrialCompanyDraft = readProfileDraftFromForm(formElement, state.adminTrialCompanyDraft);
}

function readProfileDraftFromForm(formElement, currentDraft = {}) {
  const form = new FormData(formElement);
  const nextDraft = { ...currentDraft };
  if (hasFormControl(formElement, "companyName")) nextDraft.companyName = String(form.get("companyName") || "").trim();
  if (hasFormControl(formElement, "kennitala")) nextDraft.kennitala = String(form.get("kennitala") || "").trim();
  if (hasFormControl(formElement, "contactEmail")) nextDraft.contactEmail = String(form.get("contactEmail") || "").trim();
  if (hasFormControl(formElement, "billingEmail")) nextDraft.billingEmail = String(form.get("billingEmail") || "").trim();
  if (hasFormControl(formElement, "contactName")) nextDraft.contactName = String(form.get("contactName") || "").trim();
  if (hasFormControl(formElement, "phone")) nextDraft.phone = String(form.get("phone") || "").trim();
  if (hasFormControl(formElement, "address")) nextDraft.address = String(form.get("address") || "").trim();
  if (hasFormControl(formElement, "website")) nextDraft.website = String(form.get("website") || "").trim();
  if (hasFormControl(formElement, "selectedPlan")) nextDraft.selectedPlan = normalizeSelectedPlan(form.get("selectedPlan")) || "basic";
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
  return nextDraft;
}

function hasFormControl(formElement, name) {
  return Boolean(formElement.querySelector(`[name="${CSS.escape(name)}"]`));
}

function normalizeProfileDraftForSave() {
  initializeProfileDraft();
  return {
    ...state.profileDraft,
    companyName: String(state.profileDraft.companyName || "").trim(),
    kennitala: String(state.profileDraft.kennitala || "").trim(),
    contactEmail: String(state.profileDraft.contactEmail || "").trim(),
    billingEmail: String(state.profileDraft.billingEmail || "").trim(),
    contactName: String(state.profileDraft.contactName || "").trim(),
    phone: String(state.profileDraft.phone || "").trim(),
    address: String(state.profileDraft.address || "").trim(),
    website: String(state.profileDraft.website || "").trim(),
    selectedPlan: normalizeSelectedPlan(state.profileDraft.selectedPlan || state.pendingSignupPlan) || "basic",
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

function normalizeAdminTrialCompanyDraftForSave() {
  initializeAdminTrialCompanyDraft();
  const draft = state.adminTrialCompanyDraft || {};
  return {
    ...draft,
    companyName: String(draft.companyName || "").trim(),
    kennitala: String(draft.kennitala || "").trim(),
    contactEmail: String(draft.contactEmail || "").trim(),
    billingEmail: String(draft.billingEmail || "").trim(),
    contactName: String(draft.contactName || "").trim(),
    phone: String(draft.phone || "").trim(),
    address: String(draft.address || "").trim(),
    website: String(draft.website || "").trim(),
    selectedPlan: normalizeSelectedPlan(draft.selectedPlan) || "basic",
    billingStatus: draft.billingStatus || "trial",
    trialStartedAt: draft.trialStartedAt || new Date().toISOString(),
    trialEndsAt: draft.trialEndsAt || new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    industry: String(draft.industry || ""),
    services: cleanStringArray(draft.services),
    includeKeywords: cleanStringArray(draft.includeKeywords),
    excludeKeywords: cleanStringArray(draft.excludeKeywords),
    locations: cleanStringArray(draft.locations),
    baseLocation: String(draft.baseLocation || ""),
    serviceAreas: cleanStringArray(draft.serviceAreas),
    willingToTravel: Boolean(draft.willingToTravel),
    nationalProjects: Boolean(draft.nationalProjects),
    remoteProjects: Boolean(draft.remoteProjects),
    minimumProjectValueForTravel: nullableNumber(draft.minimumProjectValueForTravel),
    minProjectValue: nullableNumber(draft.minProjectValue),
    maxProjectValue: nullableNumber(draft.maxProjectValue),
    allowUnknownValue: Boolean(draft.allowUnknownValue),
    reportFrequency: draft.reportFrequency || "weekly",
    reportDay: draft.reportDay || "monday",
    deadlineReminders: Boolean(draft.deadlineReminders),
    includeLowConfidence: Boolean(draft.includeLowConfidence),
    autoAlertMode: draft.autoAlertMode || "auto_safe_only"
  };
}

function textIncludes(text, keyword) {
  return String(text || "").toLowerCase().includes(String(keyword || "").toLowerCase());
}

function opportunityText(opp) {
  return [opp.title, opp.description, opp.category, opp.location, ...(opp.keywords || [])].join(" ").toLowerCase();
}

const CIVIL_STRONG_SERVICE_TERMS = [
  "jarðvinna",
  "gatnagerð",
  "gatna- og stígagerð",
  "gatna og stígagerð",
  "stígagerð",
  "lóðarframkvæmdir",
  "lagnavinna",
  "lagnir",
  "fráveita",
  "fráveitulagnir",
  "vatnsveita",
  "hitaveita",
  "vatnslagnir",
  "regnvatnslagnir",
  "drenlagnir",
  "endurnýjun lagna",
  "brunnar",
  "dælubrunnar",
  "malbikun",
  "gangstétt",
  "gangstéttir",
  "stígar",
  "bílastæði",
  "vegagerð",
  "gröftur",
  "fyllingar",
  "grjóthleðsla",
  "jarðvegsskipti",
  "undirbygging",
  "yfirborðsfrágangur",
  "hellulögn",
  "hellulagnir",
  "kantsteinn",
  "kantsteinar",
  "landmótun",
  "afvötnun",
  "jarðvegsvinna",
  "útiframkvæmdir",
  "gatnaframkvæmdir"
];

const CIVIL_OPTIONAL_WINTER_SERVICE_TERMS = [
  "snjómokstur",
  "snjóruðningur",
  "hálkuvarnir",
  "vetrarþjónusta",
  "gangstéttir",
  "stofnanalóðir"
];

const CIVIL_WEAK_GENERIC_TERMS = [
  "framkvæmdir",
  "framkvæmd",
  "útboð",
  "verðfyrirspurn",
  "tilboð",
  "viðhald",
  "verktaki",
  "verk"
];

const CIVIL_INDOOR_DOWNGRADE_TERMS = [
  "innanhússfrágangur",
  "innanhúss",
  "smíði",
  "smíðavinna",
  "málun",
  "gólfefni",
  "innréttingar",
  "raflagnir",
  "pípulagnir",
  "leikskóli",
  "skóli",
  "húsnæði",
  "byggingarvinna"
];

const CIVIL_INDOOR_ALLOWED_SERVICE_TERMS = [
  "innanhússfrágangur",
  "innanhúss",
  "smíði",
  "smíðavinna",
  "málun",
  "gólfefni",
  "innréttingar",
  "raflagnir",
  "pípulagnir",
  "byggingarvinna"
];

const CIVIL_CONSULTING_DOWNGRADE_TERMS = [
  "for- og verkhönnun",
  "verkhönnun",
  "forhönnun",
  "hönnun",
  "ráðgjöf",
  "verkfræðiráðgjöf",
  "eftirlit",
  "umsjón",
  "verkefnastjórn",
  "verkefnastjórnun"
];

const CIVIL_CONSULTING_ALLOWED_SERVICE_TERMS = [
  "hönnun",
  "for- og verkhönnun",
  "verkhönnun",
  "forhönnun",
  "ráðgjöf",
  "verkfræðiráðgjöf",
  "eftirlit",
  "umsjón",
  "verkefnastjórn",
  "verkefnastjórnun"
];

const CIVIL_CORE_EXECUTION_PROFILE_TERMS = [
  "jarðvinna",
  "jarðvegsvinna",
  "gatnagerð",
  "gatna- og stígagerð",
  "stígagerð",
  "vegagerð",
  "lóðarframkvæmdir",
  "gröftur",
  "jarðvegsskipti",
  "fyllingar",
  "afvötnun",
  "landmótun",
  "yfirborðsfrágangur",
  "malbikun",
  "útiframkvæmdir"
];

function normalizeMatchText(value) {
  return normalizeLocationText(value);
}

function normalizedContainsAny(text, terms) {
  const normalized = normalizeMatchText(text);
  return terms.some((term) => normalized.includes(normalizeMatchText(term)));
}

function isCivilWeakGenericTerm(value) {
  const normalized = normalizeMatchText(value);
  return CIVIL_WEAK_GENERIC_TERMS.some((term) => normalized === normalizeMatchText(term));
}

function rankMatchTerm(value) {
  const normalized = normalizeMatchText(value);
  if (CIVIL_STRONG_SERVICE_TERMS.some((term) => normalized === normalizeMatchText(term))) return 0;
  if (CIVIL_STRONG_SERVICE_TERMS.some((term) => normalized.includes(normalizeMatchText(term)) || normalizeMatchText(term).includes(normalized))) return 1;
  if (CIVIL_OPTIONAL_WINTER_SERVICE_TERMS.some((term) => normalized === normalizeMatchText(term))) return 2;
  if (isCivilWeakGenericTerm(value)) return 10;
  return 3;
}

function sortMatchTermsBySpecificity(values) {
  return [...values].sort((a, b) => rankMatchTerm(a) - rankMatchTerm(b) || String(b).length - String(a).length || String(a).localeCompare(String(b)));
}

function getStrongCivilTermsInText(text) {
  const normalizedText = normalizeMatchText(text);
  return CIVIL_STRONG_SERVICE_TERMS.filter((term) => normalizedText.includes(normalizeMatchText(term)));
}

function getOptionalWinterTermsInText(text) {
  const normalizedText = normalizeMatchText(text);
  return CIVIL_OPTIONAL_WINTER_SERVICE_TERMS.filter((term) => normalizedText.includes(normalizeMatchText(term)));
}

function promoteWeakGenericHitsToSpecificCivilTerms(hits, opportunityTextValue) {
  const strongTerms = getStrongCivilTermsInText(opportunityTextValue);
  if (!strongTerms.length || !hits.some(isCivilWeakGenericTerm)) return hits;
  const nonWeakHits = hits.filter((hit) => !isCivilWeakGenericTerm(hit));
  return [...new Set([...strongTerms, ...nonWeakHits])];
}

function isCivilContractorProfile(profile = {}) {
  const profileText = [
    profile.industry,
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : [])
  ].filter(Boolean).join(" ");
  return normalizedContainsAny(profileText, [
    ...CIVIL_STRONG_SERVICE_TERMS,
    ...CIVIL_OPTIONAL_WINTER_SERVICE_TERMS,
    "construction",
    "contractor",
    "verktaki",
    "mannvirki",
    "jarðtækni"
  ]);
}

function hasExplicitWinterService(profile = {}) {
  const profileText = [
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : [])
  ].filter(Boolean).join(" ");
  return normalizedContainsAny(profileText, CIVIL_OPTIONAL_WINTER_SERVICE_TERMS);
}

function hasExplicitIndoorService(profile = {}) {
  const profileText = [
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : [])
  ].filter(Boolean).join(" ");
  return normalizedContainsAny(profileText, CIVIL_INDOOR_ALLOWED_SERVICE_TERMS);
}

function hasExplicitConsultingService(profile = {}) {
  const profileText = [
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : [])
  ].filter(Boolean).join(" ");
  return normalizedContainsAny(profileText, CIVIL_CONSULTING_ALLOWED_SERVICE_TERMS);
}

function hasCoreExecutionService(profile = {}) {
  const profileText = [
    profile.industry,
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : [])
  ].filter(Boolean).join(" ");
  return normalizedContainsAny(profileText, CIVIL_CORE_EXECUTION_PROFILE_TERMS);
}

function getCivilContractorFit(profile, opp, serviceHits, keywordHits) {
  const isCivilProfile = isCivilContractorProfile(profile);
  if (!isCivilProfile) {
    return {
      isCivilProfile: false,
      serviceHits,
      keywordHits,
      hasWeakOnlyFit: false,
      hasIndoorMismatch: false,
      hasConsultingMismatch: false,
      hasSecondaryOnlyFit: false,
      hasPromotedBroadFit: false,
      hasWinterOnlyFit: false
    };
  }

  const text = opportunityText(opp);
  const hasStrongCivilTerm = normalizedContainsAny(text, CIVIL_STRONG_SERVICE_TERMS);
  const hasWinterTerm = normalizedContainsAny(text, CIVIL_OPTIONAL_WINTER_SERVICE_TERMS);
  const allowsWinterWork = hasExplicitWinterService(profile);
  const hasEligibleWinterTerm = hasWinterTerm && allowsWinterWork;
  const hasIndoorTerm = normalizedContainsAny(text, CIVIL_INDOOR_DOWNGRADE_TERMS);
  const allowsIndoorWork = hasExplicitIndoorService(profile);
  const hasConsultingTerm = normalizedContainsAny(text, CIVIL_CONSULTING_DOWNGRADE_TERMS);
  const allowsConsultingWork = hasExplicitConsultingService(profile);
  const detectedStrongTerms = getStrongCivilTermsInText(text);
  const detectedWinterTerms = hasEligibleWinterTerm ? getOptionalWinterTermsInText(text) : [];
  const serviceHitsAreWeakOnly = serviceHits.length > 0 && serviceHits.every(isCivilWeakGenericTerm);
  const keywordHitsAreWeakOnly = keywordHits.length > 0 && keywordHits.every(isCivilWeakGenericTerm);
  const hasAnySpecificHit = [...serviceHits, ...keywordHits].some((hit) => !isCivilWeakGenericTerm(hit));
  const hasWeakGenericHit = [...serviceHits, ...keywordHits].some(isCivilWeakGenericTerm);
  const shouldPromoteWeakTerms = !hasAnySpecificHit && hasWeakGenericHit && hasStrongCivilTerm;
  const expandedServiceHits = (shouldPromoteWeakTerms || hasEligibleWinterTerm)
    ? [...new Set([...serviceHits, ...(shouldPromoteWeakTerms ? detectedStrongTerms : []), ...detectedWinterTerms])]
    : serviceHits;

  const shouldScoreWeakTerms = hasStrongCivilTerm || hasEligibleWinterTerm || hasAnySpecificHit;
  const filteredServiceHits = shouldScoreWeakTerms
    ? (shouldPromoteWeakTerms ? promoteWeakGenericHitsToSpecificCivilTerms(expandedServiceHits, text) : expandedServiceHits.filter((service) => !isCivilWeakGenericTerm(service)))
    : expandedServiceHits.filter((service) => !isCivilWeakGenericTerm(service));
  const filteredKeywordHits = shouldScoreWeakTerms
    ? (shouldPromoteWeakTerms ? promoteWeakGenericHitsToSpecificCivilTerms(keywordHits, text) : keywordHits.filter((keyword) => !isCivilWeakGenericTerm(keyword)))
    : keywordHits.filter((keyword) => !isCivilWeakGenericTerm(keyword));
  const specificHits = [...new Set([...filteredServiceHits, ...filteredKeywordHits].filter((hit) => !isCivilWeakGenericTerm(hit)))];
  const lacksCoreExecutionProfile = !hasCoreExecutionService(profile);

  return {
    isCivilProfile: true,
    serviceHits: sortMatchTermsBySpecificity(filteredServiceHits),
    keywordHits: sortMatchTermsBySpecificity(filteredKeywordHits),
    hasWeakOnlyFit: !hasStrongCivilTerm && !hasEligibleWinterTerm && !hasAnySpecificHit && (serviceHitsAreWeakOnly || keywordHitsAreWeakOnly),
    hasIndoorMismatch: hasIndoorTerm && !hasStrongCivilTerm && !allowsIndoorWork,
    hasConsultingMismatch: hasConsultingTerm && !allowsConsultingWork,
    hasWinterOnlyFit: hasEligibleWinterTerm && !hasStrongCivilTerm,
    hasSecondaryOnlyFit: hasAnySpecificHit && lacksCoreExecutionProfile && specificHits.length <= 2 && detectedStrongTerms.length >= 3,
    hasPromotedBroadFit: shouldPromoteWeakTerms
  };
}

function isNationalOpportunity(opp) {
  const location = normalizeLocationText(opp.location);
  if (isGenericIcelandLocation(location) && inferOpportunityLocationFromText(opp)) return false;
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
    const opportunityLocation = normalizeLocationText(getEffectiveOpportunityLocation(opp));
    return country === "IS" || opportunityLocation.includes("iceland") || opportunityLocation.includes("island");
  }
  if (selectedLocations.includes("Remote / Online") && getEffectiveOpportunityLocation(opp) === "Remote / Online") return true;
  if (!country) return false;
  if (country !== "IS" && selectedLocations.some((location) => normalizeLocationText(location).includes("iceland"))) return false;

  const opportunityLocation = normalizeLocationText(getEffectiveOpportunityLocation(opp));
  return selectedLocations.some((loc) => {
    const selected = normalizeLocationText(loc);
    if (!selected) return false;
    if (selected === opportunityLocation) return true;
    if (selected === "reykjavik" && ["reykjavik", "capital area", "hofudborgarsvaedid"].includes(opportunityLocation)) return true;
    if (selected === "capital area" && ["reykjavik", "capital area", "hofudborgarsvaedid"].includes(opportunityLocation)) return true;
    return opportunityLocation.includes(selected) || selected.includes(opportunityLocation);
  });
}

function getLocationMatchCategory(profile, opp) {
  if (!profile) return "outside_area_low_confidence";
  if (localLocationMatches(profile, opp)) return "local_match";
  if (profile.locations?.includes("Remote / Online") && getEffectiveOpportunityLocation(opp) === "Remote / Online") {
    return "remote_match";
  }
  if (isNationalOpportunity(opp) && (isIcelandicOpportunity(opp) || getOpportunityCountryCode(opp) === "IS")) {
    return "national_match";
  }
  if (getEffectiveOpportunityLocation(opp) === "Remote / Online" && profile.remoteProjects) return "remote_match";
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
  const location = normalizeLocationText(getEffectiveOpportunityLocation(opp));
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

function getEffectiveOpportunityLocation(opp = {}) {
  const rawLocation = String(opp.location || "").trim();
  const normalized = normalizeLocationText(rawLocation);
  if (rawLocation && !isGenericIcelandLocation(normalized)) return rawLocation;
  return inferOpportunityLocationFromText(opp) || rawLocation;
}

function isGenericIcelandLocation(normalizedLocation) {
  return !normalizedLocation ||
    normalizedLocation === "unknown" ||
    normalizedLocation === "all iceland" ||
    normalizedLocation === "iceland" ||
    normalizedLocation === "island";
}

function inferOpportunityLocationFromText(opp = {}) {
  const payload = opp.rawPayload && typeof opp.rawPayload === "object" ? opp.rawPayload : {};
  const text = normalizeLocationText([
    opp.title,
    opp.description,
    opp.buyer,
    payload.buyer,
    payload.extracted_buyer,
    payload.source_name,
    payload.extracted_location,
    payload.location,
  ].filter(Boolean).join(" "));
  if (
    text.includes("reykjavik") ||
    text.includes("reykjavikurborg") ||
    text.includes("hofudborgarsvaedid")
  ) return "Reykjavík / Höfuðborgarsvæðið";
  return "";
}

function isEuRegionCode(value) {
  return /^[A-Z]{2}[A-Z0-9]{2,4}$/i.test(String(value || "").trim());
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

  const serviceHits = (profile.services || []).filter((service) => textIncludes(text, service));
  const keywordHits = (profile.includeKeywords || []).filter((keyword) => textIncludes(text, keyword));
  const civilFit = getCivilContractorFit(profile, opp, serviceHits, keywordHits);

  for (const service of civilFit.serviceHits) {
    score += 10;
    reasons.push(`Mentions your service: ${service}`);
  }

  for (const keyword of civilFit.keywordHits) {
    score += 8;
    reasons.push(`Contains your keyword: ${keyword}`);
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

  if (civilFit.hasWinterOnlyFit && locationCategory === "local_match") {
    score += 12;
    reasons.push("Local winter service fit");
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
    risks.push(getOpportunityMissingDeadlineRisk(opp));
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

  if (civilFit.hasWeakOnlyFit) {
    score = Math.min(score, 40);
    risks.push("Only broad construction/procurement terms matched; verify fit");
  }

  if (civilFit.hasIndoorMismatch) {
    score = Math.min(score - 20, 40);
    risks.push("Appears to be indoor/building finishing work outside your core civil services");
  }

  if (civilFit.hasConsultingMismatch) {
    score = Math.min(score - 30, 35);
    risks.push("Appears to be design, consulting, supervision, or project management work outside your execution services");
  }

  if (civilFit.hasSecondaryOnlyFit) {
    score = Math.min(score, 84);
    risks.push("Secondary service match in a broader infrastructure tender; verify scope");
  }

  if (civilFit.hasPromotedBroadFit) {
    score = Math.min(score, 72);
    risks.push("Broad construction terms matched; verify the specific work type");
  }

  if (civilFit.hasWinterOnlyFit) {
    score = Math.min(score, 68);
    risks.push("Winter/snow service fit; verify capacity and scope");
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

function reconcileStoredMatchForCurrentProfile(opp) {
  if (!state.profile || !isCivilContractorProfile(state.profile)) return opp;
  const recalculated = calculateMatch(state.profile, opp);
  if (Number(recalculated.matchScore || 0) >= Number(opp.matchScore || 0)) return opp;
  return {
    ...opp,
    matchScore: recalculated.matchScore,
    matchLabel: recalculated.matchLabel,
    matchReasons: recalculated.matchReasons,
    risks: recalculated.risks,
    nextSteps: recalculated.nextSteps
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
      .filter(isCustomerMatchEligibleOpportunity)
      .filter(isStrictDashboardEligibleOpportunity)
      .filter(isDashboardVisibleOpportunity)
      .filter((opp) => !state.ignored.includes(opp.id))
      .map(reconcileStoredMatchForCurrentProfile)
      .sort((a, b) => b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline));
  }

  const profile = state.profile || (state.user ? null : defaultProfile);
  if (!profile) return [];
  return state.opportunities
    .filter(isCustomerMatchEligibleOpportunity)
    .map((opp) => calculateMatch(profile, opp))
    .filter(isStrictDashboardEligibleOpportunity)
    .filter(isDashboardVisibleOpportunity)
    .filter((opp) => !state.ignored.includes(opp.id))
    .sort((a, b) => b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline));
}

function getStoredDashboardMatches() {
  return state.storedMatches
    .filter(isCustomerMatchEligibleOpportunity)
    .filter(isStrictDashboardEligibleOpportunity)
    .filter(isDashboardVisibleOpportunity)
    .filter((opp) => !state.ignored.includes(opp.id))
    .sort((a, b) => b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline));
}

function getAvailableDashboardOpportunities() {
  const profile = state.profile || (state.user ? null : defaultProfile);
  if (!profile) return [];
  return state.opportunities
    .filter(isCustomerMatchEligibleOpportunity)
    .map((opp) => calculateMatch(profile, opp))
    .filter(isStrictDashboardEligibleOpportunity)
    .filter(isDashboardVisibleOpportunity)
    .filter((opp) => !state.ignored.includes(opp.id))
    .sort((a, b) => {
      const qualityDiff = getOpportunityQualityRank(a) - getOpportunityQualityRank(b);
      if (qualityDiff) return qualityDiff;
      return b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline);
    });
}

function isStrictDashboardEligibleOpportunity(opp) {
  if (state.isAdmin && state.filters.label === "all_opportunities") return true;
  return isStrictCustomerReportEligible(opp);
}

function isCustomerSafetyVisible(opp) {
  const safety = getSafetyStatus(opp);
  if (safety === "hidden") return false;
  return safety === "auto_approved" || safety === "needs_review";
}

function getSafetyStatus(opp = {}) {
  return String(opp.safetyStatus || opp.safety_status || "auto_approved");
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
  const baseMatches = getDashboardFilterBaseMatches(matches);

  if (state.filters.label === "recommended") {
    const recommended = baseMatches.filter(isRecommendedDashboardMatch);
    const fallback = baseMatches.filter(isFallbackDashboardMatch);
    return sortDashboardMatches(recommended.length ? recommended : fallback);
  }

  return sortDashboardMatches(baseMatches.filter(matchesSelectedLabelFilter));
}

function getDashboardFilterBaseMatches(matches) {
  return matches.filter((opp) => {
    const search = state.filters.search.toLowerCase();
    if (search && !opportunityText(opp).includes(search)) return false;
    if (state.filters.category !== "all" && opp.category !== state.filters.category) return false;
    if (state.filters.location !== "all" && opp.location !== state.filters.location) return false;
    if (state.filters.type !== "all" && opp.type !== state.filters.type) return false;
    if (state.filters.savedOnly && !state.saved.includes(opp.id)) return false;
    return true;
  });
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
  if (isCustomerReportExcludedIntent(opp)) return false;
  if (opp.matchScore >= 85 || opp.matchLabel === "Strong match") return true;
  if (normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "needs_review") return false;
  if (containsObviousNewsIntent(getOpportunityQualityText(opp))) return false;
  return true;
}

function isFallbackDashboardMatch(opp) {
  if (!isRecommendedScore(opp)) return false;
  if (isCustomerReportExcludedIntent(opp)) return false;
  if (opp.matchScore >= 85 || opp.matchLabel === "Strong match") return true;
  if (normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "needs_review") return false;
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
  const intent = getOpportunityIntent(opp);
  if (intent === "confirmed_tender") return 0;
  if (intent === "early_opportunity") return 1;
  if (intent === "market_signal") return 2;
  if (intent === "news_context") return 8;
  if (intent === "not_opportunity") return 9;
  const status = normalizeOpportunityQualityStatus(opp.qualityStatus, opp);
  if (status === "confirmed_tender") return 0;
  if (status === "early_signal") return 1;
  return 2;
}

function getDashboardFilterSummary({ visibleCount, storedMatchCount, filteredStoredCount, availableCount, recommendedCount, strongCount, companyName }) {
  const selected = state.filters.label;
  if (state.language === "is") {
    if (selected === "all_opportunities") return `${availableCount} tækifæri eru til í kerfinu. Sýni ${visibleCount} sýnileg tækifæri til yfirferðar.`;
    if (selected === "needs_review") return `${availableCount} tækifæri eru til í kerfinu. Sýni ${visibleCount} atriði sem þarf að staðfesta.`;
    if (selected === "all") return `${storedMatchCount} tækifæri fundust sem gætu passað við ${companyName}. Sýni ${visibleCount}.`;
    if (selected === "strong") return `${storedMatchCount} tækifæri fundust sem gætu passað við ${companyName}. Sýni ${visibleCount} sterkar samsvaranir.`;
    if (selected === "recommended") {
      if (!visibleCount) {
        if (strongCount > 0) return `${strongCount} sterkar samsvaranir eru til fyrir ${companyName}, en þær eru faldar af núverandi síum.`;
        if (filteredStoredCount > 0) return `${filteredStoredCount} tækifæri eru falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`;
        return `Engar ráðlagðar samsvaranir fyrir ${companyName} enn. ${availableCount} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`;
      }
      return `${storedMatchCount} tækifæri fundust sem gætu passað við ${companyName}. Sýni ${visibleCount} ráðlögð eða möguleg tækifæri.`;
    }
    if (selected === "possible") return `${storedMatchCount} tækifæri fundust sem gætu passað við ${companyName}. Sýni ${visibleCount} mögulegar eða veikar samsvaranir.`;
    return `${storedMatchCount} tækifæri fundust sem gætu passað við ${companyName}. Sýni ${visibleCount} tækifæri.`;
  }
  if (selected === "all_opportunities") {
    return `${availableCount} opportunities are available in the system. Showing ${visibleCount} visible opportunities for inspection.`;
  }
  if (selected === "needs_review") {
    return `${availableCount} opportunities are available in the system. Showing ${visibleCount} needs-review opportunities.`;
  }
  if (selected === "all") return `${storedMatchCount} opportunities may fit ${companyName}. Showing all ${visibleCount}.`;
  if (selected === "strong") return `${storedMatchCount} opportunities may fit ${companyName}. Showing ${visibleCount} strong matches.`;
  if (selected === "recommended") {
    if (!visibleCount) {
      if (strongCount > 0) {
        return `${strongCount} strong ${strongCount === 1 ? "match exists" : "matches exist"} for ${companyName}, but ${strongCount === 1 ? "it is" : "they are"} hidden by your current filters.`;
      }
      if (filteredStoredCount > 0) {
        return `${filteredStoredCount} ${filteredStoredCount === 1 ? "opportunity is" : "opportunities are"} hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`;
      }
      return `No recommended matches for ${companyName} yet. ${availableCount} opportunities are available in the system, but none match this profile strongly enough.`;
    }
    return `${storedMatchCount} opportunities may fit ${companyName}. Showing ${visibleCount} recommended or possible matches.`;
  }
  if (selected === "possible") return `${storedMatchCount} opportunities may fit ${companyName}. Showing ${visibleCount} possible or weak matches.`;
  return `${storedMatchCount} opportunities may fit ${companyName}. Showing ${visibleCount} ${selected.toLowerCase()} opportunities.`;
}

async function loadOpportunityActionsForCurrentCompany() {
  if (!supabaseClient || !state.companyId) {
    state.opportunityActions = [];
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from("company_opportunity_actions")
      .select("id, company_id, opportunity_id, action_type, note, created_at, updated_at")
      .eq("company_id", state.companyId);

    if (error) throw error;
    state.opportunityActions = data || [];
    state.saved = state.opportunityActions
      .filter((action) => ["saved", "watched"].includes(action.action_type))
      .map((action) => action.opportunity_id);
    state.ignored = state.opportunityActions
      .filter((action) => action.action_type === "ignored")
      .map((action) => action.opportunity_id);
  } catch (error) {
    console.error("Failed to load company opportunity actions:", error);
    state.opportunityActions = [];
    state.saved = [];
    state.ignored = [];
  }
}

async function setCompanyOpportunityAction(opportunityId, actionType) {
  if (!supabaseClient || !state.companyId) {
    if (actionType === "saved" || actionType === "watched") {
      state.saved = Array.from(new Set([...state.saved, opportunityId]));
      state.ignored = state.ignored.filter((id) => id !== opportunityId);
    }
    if (actionType === "ignored") {
      state.ignored = Array.from(new Set([...state.ignored, opportunityId]));
      state.saved = state.saved.filter((id) => id !== opportunityId);
    }
    saveArray(STORAGE_KEYS.saved, state.saved);
    saveArray(STORAGE_KEYS.ignored, state.ignored);
    return;
  }

  const { error } = await supabaseClient
    .from("company_opportunity_actions")
    .upsert({
      company_id: state.companyId,
      opportunity_id: opportunityId,
      action_type: actionType,
      updated_at: new Date().toISOString()
    }, { onConflict: "company_id,opportunity_id" });

  if (error) throw error;
  await loadOpportunityActionsForCurrentCompany();
}

async function clearCompanyOpportunityAction(opportunityId) {
  if (!supabaseClient || !state.companyId) {
    state.saved = state.saved.filter((id) => id !== opportunityId);
    state.ignored = state.ignored.filter((id) => id !== opportunityId);
    saveArray(STORAGE_KEYS.saved, state.saved);
    saveArray(STORAGE_KEYS.ignored, state.ignored);
    return;
  }

  const { error } = await supabaseClient
    .from("company_opportunity_actions")
    .delete()
    .eq("company_id", state.companyId)
    .eq("opportunity_id", opportunityId);

  if (error) throw error;
  await loadOpportunityActionsForCurrentCompany();
}

async function toggleSave(id) {
  let message = "Opportunity saved";
  try {
    if (state.saved.includes(id)) {
      await clearCompanyOpportunityAction(id);
      message = "Removed from saved";
    } else {
      await setCompanyOpportunityAction(id, "saved");
    }
    showToast(message, "success");
    render();
  } catch (error) {
    console.error("Failed to update saved opportunity:", error);
    showToast("Could not update saved opportunity", "error");
  }
}

async function ignoreOpportunity(id) {
  try {
    await setCompanyOpportunityAction(id, "ignored");
    if (state.selectedOpportunityId === id) state.selectedOpportunityId = null;
    showToast("Opportunity hidden", "success");
    render();
  } catch (error) {
    console.error("Failed to ignore opportunity:", error);
    showToast("Could not hide opportunity", "error");
  }
}

async function unignoreOpportunity(id) {
  try {
    await clearCompanyOpportunityAction(id);
    render();
  } catch (error) {
    console.error("Failed to unignore opportunity:", error);
    showToast("Could not restore opportunity", "error");
  }
}

function openDetails(id) {
  state.selectedOpportunityId = id;
  document.body.classList.add("modal-open");
  render();
}

function closeDetails() {
  clearOpportunityDetailsState();
  render();
}

function clearOpportunityDetailsState() {
  state.selectedOpportunityId = null;
  document.body.classList.remove("modal-open");
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

function getDeadlineDisplay(value) {
  if (!value) {
    return {
      label: formatReportRisk(MISSING_DEADLINE_RISK),
      className: "deadline danger"
    };
  }

  const days = daysUntilDeadline(value);
  if (days === 999) {
    return {
      label: formatReportRisk(MISSING_DEADLINE_RISK),
      className: "deadline danger"
    };
  }

  return {
    label: t("daysLeft", { count: days }),
    className: days <= 14 ? "deadline danger" : "deadline"
  };
}

function formatOpportunityDeadlineAt(value) {
  const text = String(value || "").trim();
  const match = text.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/);
  if (!match) return "";
  return `${formatCustomerReportDate(match[1])} kl. ${match[2]}:${match[3]}`;
}

function formatOpportunityDeadline(value) {
  return value ? formatShortDate(value) : formatReportRisk(MISSING_DEADLINE_RISK);
}

function formatOpportunityDeadlineForReport(opp) {
  if (opp?.deadlineAt) return formatOpportunityDeadlineAt(opp.deadlineAt);
  return opp?.deadline ? formatCustomerReportDate(opp.deadline) : formatReportRisk(getOpportunityMissingDeadlineRisk(opp));
}

function getOpportunityMissingDeadlineRisk(opp) {
  if (isVegagerdinExtractedProject(opp)) {
    const tenderState = getVegagerdinExtractedTenderState(opp);
    if (["tender_awarded", "awarded", "already_tendered", "announced"].includes(tenderState)) {
      return "Tender appears already announced/awarded — verify source article.";
    }
    if (tenderState === "upcoming_tender") {
      return "Formal tender deadline not found yet — monitor source article.";
    }
    return EXTRACTED_PROJECT_DEADLINE_RISK;
  }
  const rawWarning = String(opp?.rawPayload?.deadline_warning || "").trim();
  if (rawWarning) return rawWarning;
  return MISSING_DEADLINE_RISK;
}

function getOpportunityDeadlineDisplay(opp) {
  if (!opp?.deadline) {
    return {
      label: formatReportRisk(getOpportunityMissingDeadlineRisk(opp)),
      className: "deadline danger"
    };
  }
  const deadlineAt = formatOpportunityDeadlineAt(opp.deadlineAt);
  if (deadlineAt) {
    return {
      label: deadlineAt,
      className: daysUntilDeadline(opp.deadline) <= 14 ? "deadline danger" : "deadline"
    };
  }
  return getDeadlineDisplay(opp.deadline);
}

function formatISK(value) {
  if (!value) return state.language === "is" ? "Ekki gefið upp" : "Value unknown";
  return formatCurrencyAmount(value, "ISK");
}

function formatEstimatedValue(value, currency = "ISK") {
  if (!value) return state.language === "is" ? "Ekki gefið upp" : "Value unknown";
  return formatCurrencyAmount(value, currency);
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
  const route = getRoutePath(state.route);

  let html = "";
  if (state.isBooting || !state.authLoaded || !state.profileLoaded || !state.adminLoaded) html = renderLoadingPage();
  else if (route === "/") html = renderLanding();
  else if (route === "/login") html = renderLogin();
  else if (route === "/signup") html = renderSignup();
  else if (route === "/forgot-password") html = renderForgotPassword();
  else if (route === "/reset-password") html = renderResetPassword();
  else if (route === "/accept-invite") html = renderAcceptInvite();
  else if (route === "/onboarding") html = renderOnboarding();
  else if (route === "/dashboard") html = state.user ? renderDashboard() : requireAuthPage();
  else if (route === "/report") html = state.user ? renderReport() : requireAuthPage();
  else if (route === "/pricing") html = renderPricing();
  else if (route === "/trial") html = renderTrialRequest();
  else if (route === "/privacy") html = renderPrivacyPolicy();
  else if (route === "/terms") html = renderTermsOfService();
  else if (route === "/data-sources") html = renderDataSourcesPage();
  else if (route === "/cookies") html = renderCookiePolicy();
  else if (route === "/security") html = renderSecurityPage();
  else if (route === "/contact") html = renderContactPage();
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

function renderPreservingInputAndScroll(input) {
  if (!input || !document.body.contains(input)) {
    render();
    return;
  }
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const selector = getStableInputSelector(input);
  const selectionStart = typeof input.selectionStart === "number" ? input.selectionStart : null;
  const selectionEnd = typeof input.selectionEnd === "number" ? input.selectionEnd : null;

  render();

  requestAnimationFrame(() => {
    window.scrollTo(scrollX, scrollY);
    if (!selector) return;
    const nextInput = document.querySelector(selector);
    if (!nextInput) return;
    nextInput.focus({ preventScroll: true });
    if (
      selectionStart !== null &&
      selectionEnd !== null &&
      typeof nextInput.setSelectionRange === "function" &&
      ["text", "search", "email", "url", "tel", "password", ""].includes(nextInput.type || "")
    ) {
      nextInput.setSelectionRange(selectionStart, selectionEnd);
    }
  });
}

function scrollActiveAdminTabIntoView() {
  requestAnimationFrame(() => {
    const tab = document.querySelector(".admin-tabs button.is-active");
    tab?.scrollIntoView?.({ block: "nearest", inline: "nearest" });
  });
}

function getStableInputSelector(input) {
  if (!input?.dataset) return "";
  if (input.dataset.adminFilter) return `[data-admin-filter="${cssEscape(input.dataset.adminFilter)}"]`;
  if (input.dataset.adminCompanyFilter) return `[data-admin-company-filter="${cssEscape(input.dataset.adminCompanyFilter)}"]`;
  return "";
}

function cssEscape(value) {
  if (window.CSS?.escape) return window.CSS.escape(String(value));
  return String(value).replace(/["\\]/g, "\\$&");
}

function renderLoadingPage() {
  return renderShell(`
    <div class="app-loader">
      <div class="loader-mark" aria-label="${escapeHtml(t("loadingLabel"))}">
        <span></span>
      </div>
    </div>
  `);
}

function renderShell(content) {
  const isLoggedIn = Boolean(state.user);
  const hasProfile = Boolean(state.profile);
  const navItems = getHeaderNavItems(isLoggedIn, hasProfile);
  const headerCta = getHeaderCta(isLoggedIn, hasProfile);

  return `
    <header class="site-header ${state.isMobileMenuOpen ? "is-menu-open" : ""} ${state.isMobileMenuClosing ? "is-menu-closing" : ""}">
      <div class="header-top">
        <button class="brand" data-action="go" data-href="/">
          <img class="brand-logo" src="/logo.png" alt="VerkRadar" />
        </button>
        <div class="mobile-header-actions">
          <button class="language-toggle mobile-header-language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${state.language === "is" ? "active" : ""}">IS</span>
            <span class="${state.language === "en" ? "active" : ""}">EN</span>
          </button>
          <button
            class="menu-toggle"
            type="button"
            data-action="toggle-mobile-menu"
            aria-label="${state.isMobileMenuOpen ? t("closeMenu") : t("openMenu")}"
            aria-expanded="${state.isMobileMenuOpen ? "true" : "false"}"
            aria-controls="mobile-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div class="header-menu" id="site-menu">
        <nav class="site-nav">
          ${navItems.map(([label, href]) => href.startsWith("#")
            ? `<button data-action="scroll-to" data-target="${href.slice(1)}">${label}</button>`
            : `<button data-action="go" data-href="${href}" ${state.route === href ? 'class="active"' : ""}>${label}</button>`
          ).join("")}
        </nav>
        <div class="header-actions">
          <button class="language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${state.language === "is" ? "active" : ""}">IS</span>
            <span class="${state.language === "en" ? "active" : ""}">EN</span>
          </button>
          ${!isLoggedIn ? `<button class="btn btn-secondary header-login-btn btn-login" data-action="go" data-href="/login">${t("login")}</button>` : ""}
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

function getHeaderNavItems(isLoggedIn = Boolean(state.user), hasProfile = Boolean(state.profile)) {
  const items = !isLoggedIn
    ? [
        [t("navHowItWorks"), "#how-it-works"],
        [t("navSampleReport"), "#sample-report"],
        [t("navPricing"), "/pricing"]
      ]
    : hasProfile
      ? [
          [t("navDashboard"), "/dashboard"],
          [t("navReport"), "/report"],
          [t("navSettings"), "/settings"]
        ]
      : [
          [t("setupCompany"), "/onboarding"],
          [t("navSettings"), "/settings"]
        ];

  if (isLoggedIn && state.isAdmin) items.push(["Admin", "/admin"]);
  return items;
}

function renderFooter() {
  const links = [
    [t("privacyPolicy"), "/privacy"],
    [t("termsOfService"), "/terms"],
    [t("dataSources"), "/data-sources"],
    [t("security"), "/security"],
    [t("contact"), "/contact"]
  ];
  return `
    <footer class="site-footer">
      <div>
        <strong>VerkRadar</strong>
        <p>${escapeHtml(t("footerText"))}</p>
      </div>
      <nav aria-label="Legal and trust pages">
        ${links.map(([label, href]) => `<button type="button" data-action="go" data-href="${href}">${label}</button>`).join("")}
      </nav>
    </footer>
  `;
}

function legalPageData(key) {
  return getLegalPageData(key, state.language);
}

function renderLegalDataPage(key) {
  const data = legalPageData(key);
  return renderShell(renderLegalPageContent({
    language: state.language,
    escapeHtml,
    eyebrow: data.eyebrow,
    title: data.title,
    intro: data.intro,
    sections: data.sections
  }));
}

function renderPrivacyPolicy() {
  return renderLegalDataPage("privacy");
}

function renderTermsOfService() {
  return renderLegalDataPage("terms");
}

function renderDataSourcesPage() {
  return renderLegalDataPage("data");
}

function renderCookiePolicy() {
  return renderPrivacyPolicy();
}

function renderSecurityPage() {
  return renderLegalDataPage("security");
}

function renderContactPage() {
  return renderLegalDataPage("contact");
}

function renderMobileMenuPanel(navItems, headerCta, isLoggedIn) {
  const linkItems = navItems.map(([label, href]) => href.startsWith("#")
    ? `<button type="button" data-action="mobile-scroll-to" data-target="${href.slice(1)}">${label}</button>`
    : `<button type="button" data-action="mobile-nav" data-href="${href}">${label}</button>`
  ).join("");

  return `
    <nav class="mobile-menu-panel" id="mobile-menu" data-action="close-mobile-menu">
      <div class="mobile-menu-scroll">
      <div class="mobile-menu-links">
        ${linkItems}
      </div>
      ${renderMobileAccountSection(headerCta, isLoggedIn)}
      </div>
    </nav>
  `;
}

function renderMobileAccountSection(headerCta, isLoggedIn) {
  if (!isLoggedIn) {
    return `
      <div class="mobile-account-section">
        ${headerCta ? `<button class="btn btn-primary mobile-cta" type="button" data-action="mobile-nav" data-href="${headerCta.href}">${headerCta.label}</button>` : ""}
        <button class="btn btn-secondary" type="button" data-action="mobile-nav" data-href="/login">${t("login")}</button>
      </div>
    `;
  }

  const companyName = state.profile?.companyName || t("noCompanyProfile");
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
          ? `<button type="button" data-action="mobile-nav" data-href="/dashboard">${t("navDashboard")}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${t("navSettings")}</button>`
          : `<button type="button" data-action="mobile-nav" data-href="/onboarding">${t("setupCompany")}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${t("navSettings")}</button>`
        }
        <button type="button" class="mobile-logout" data-action="logout">${t("logout")}</button>
      </div>
    </div>
  `;
}

function getHeaderCta(isLoggedIn, hasProfile) {
  if (!isLoggedIn) return { href: "/trial", label: t("getStarted") };
  if (!hasProfile) return { href: "/onboarding", label: t("createProfile") };
  return null;
}

function renderProfileMenu() {
  const companyName = state.profile?.companyName || t("noCompanyProfile");
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
            <button type="button" data-action="go" data-href="/dashboard" role="menuitem">${t("navDashboard")}</button>
            <button type="button" data-action="go" data-href="/settings" role="menuitem">${t("navSettings")}</button>
            ${state.isAdmin ? `<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>` : ""}
          ` : `
            <button type="button" data-action="go" data-href="/onboarding" role="menuitem">${t("createProfile")}</button>
            ${state.isAdmin ? `<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>` : ""}
          `}
          <div class="profile-dropdown-divider"></div>
          <button type="button" class="danger" data-action="logout" role="menuitem">${t("logout")}</button>
        </div>
      ` : ""}
    </div>
  `;
}

function getProfileInitials(companyName, email) {
  const source = companyName && !["No company profile", t("noCompanyProfile")].includes(companyName) ? companyName : email || "VR";
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
      <button class="btn btn-primary" data-action="go" data-href="/onboarding">${escapeHtml(t("createProfile"))}</button>
      <button class="btn btn-secondary" data-action="load-demo">${escapeHtml(t("loadDemoCompany"))}</button>
    </section>
  `);
}

function renderLogin() {
  if (state.user) return requireProfilePage(state.language === "is" ? "Þú ert þegar skráð(ur) inn" : "Already logged in", state.language === "is" ? "Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum." : "Open your dashboard or edit your company profile.");

  return renderShell(renderLoginPage({
    t,
    escapeHtml,
    authForm: state.authForm,
    authSubmitting: state.authSubmitting,
    authMessage: state.authMessage,
    signupHref: state.pendingInviteToken ? getInviteAwareAuthHref("/signup") : "/trial",
    signupLabel: state.pendingInviteToken ? t("createAccount") : t("createFreeDemoProfile"),
    forgotPasswordHref: getInviteAwareAuthHref("/forgot-password")
  }));
}

function renderForgotPassword() {
  if (state.user) return requireProfilePage(state.language === "is" ? "Þú ert þegar skráð(ur) inn" : "Already logged in", state.language === "is" ? "Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum." : "Open your dashboard or edit your company profile.");

  return renderShell(renderForgotPasswordPage({
    t,
    escapeHtml,
    authForm: state.authForm,
    authSubmitting: state.authSubmitting,
    authMessage: state.authMessage
  }));
}

function renderResetPassword() {
  return renderShell(renderResetPasswordPage({
    t,
    escapeHtml,
    authForm: state.authForm,
    authSubmitting: state.authSubmitting,
    authMessage: state.authMessage
  }));
}

function renderAcceptInvite() {
  const routeToken = getInviteTokenFromRoute(state.route);
  const token = routeToken || (state.invitePreviewErrorToken === routeToken ? "" : state.pendingInviteToken);
  if (token && token !== state.pendingInviteToken && state.invitePreviewErrorToken !== token) {
    state.pendingInviteToken = setStoredPendingInviteToken(token);
  }
  return renderShell(renderAcceptInvitePage({
    escapeHtml,
    invite: state.invitePreview,
    loading: state.invitePreviewLoading,
    error: state.invitePreviewError,
    debugInfo: state.invitePreviewDebug,
    showDebug: isInviteDebugEnabled(),
    user: state.user,
    accepting: state.inviteAccepting,
    signupHref: getInviteAwareAuthHref("/signup"),
    loginHref: getInviteAwareAuthHref("/login"),
    language: state.language
  }));
}

async function loadCompanyInvitePreview() {
  const token = getInviteTokenFromRoute(state.route) || state.pendingInviteToken || getStoredPendingInviteToken();
  if (!token || state.invitePreviewLoading) return;
  if (state.invitePreview?.token === token || state.invitePreviewErrorToken === token) return;
  state.pendingInviteToken = setStoredPendingInviteToken(token);
  state.invitePreviewLoading = true;
  state.invitePreviewError = null;
  await updateInviteDebug({ preview_request_sent: true });
  render();
  try {
    const payload = await previewCompanyInvite(token);
    await updateInviteDebug({
      ...(payload.__debug || {}),
      ...(payload.diagnostics || {}),
    });
    if (payload.status && payload.status !== "valid") {
      const error = new Error("Invite is not valid.");
      error.details = payload;
      throw error;
    }
    state.invitePreview = { ...payload, token };
    state.authForm.email = payload.invited_email || payload.email || state.authForm.email;
  } catch (error) {
    console.error("Failed to preview company invite:", error);
    if (error?.details?.diagnostics) console.warn("Invite preview diagnostics:", error.details.diagnostics);
    const diagnostics = {
      ...(error?.details?.__debug || {}),
      ...(error?.details?.diagnostics || {}),
    };
    state.invitePreview = null;
    await updateInviteDebug(diagnostics);
    const invalidReason = diagnostics.invalid_reason || error?.details?.status || error?.details?.code;
    if (shouldClearInviteTokenForReason(invalidReason)) {
      clearStoredPendingInviteToken();
      state.pendingInviteToken = "";
    }
    state.invitePreviewErrorToken = token;
    state.invitePreviewError = formatInvitePreviewError(invalidReason);
  } finally {
    state.invitePreviewLoading = false;
    render();
  }
}

async function acceptPendingCompanyInvite() {
  const routeToken = getInviteTokenFromRoute(state.route);
  const storedToken = getStoredPendingInviteToken();
  const token = routeToken || state.pendingInviteToken || storedToken;
  const tokenSource = getStoredPendingInviteTokenSource(state.route);
  if (!token) return;
  if (!state.user) {
    navigate(getInviteAwareAuthHref("/login"));
    return;
  }
  state.inviteAccepting = true;
  state.invitePreviewError = null;
  await updateInviteDebug({
    accept_request_sent: true,
    token_source: tokenSource,
  });
  render();
  try {
    const payload = await acceptCompanyInvite(token);
    await updateInviteDebug({
      ...(payload.__debug || {}),
      ...(payload.diagnostics || {}),
      token_source: tokenSource,
    });
    clearStoredPendingInviteToken();
    state.pendingInviteToken = "";
    state.invitePreview = null;
    state.invitePreviewError = null;
    await updateInviteDebug({ membership_refresh_attempted: true });
    await loadProfileFromSupabase({ overwriteDraft: true });
    await updateInviteDebug({
      membership_refresh_succeeded: Boolean(state.companyId),
      final_route: "/dashboard",
    });
    navigate("/dashboard");
  } catch (error) {
    console.error("Failed to accept company invite:", error);
    const invitedEmail = error?.details?.invited_email || state.invitePreview?.invited_email || state.invitePreview?.email || "";
    const diagnostics = {
      ...(error?.details?.__debug || {}),
      ...(error?.details?.diagnostics || {}),
      token_source: tokenSource,
      user_email: state.user?.email || "",
      invited_email: invitedEmail,
      accept_error_reason: error?.details?.code || error?.details?.diagnostics?.accept_error_reason || errorMessage(error)
    };
    await updateInviteDebug(diagnostics);
    console.warn("Invite accept diagnostics:", state.invitePreviewDebug);
    state.invitePreviewError = formatInviteAcceptError(error, invitedEmail);
  } finally {
    state.inviteAccepting = false;
    render();
  }
}

function formatInvitePreviewError(reason) {
  const normalized = String(reason || "").toLowerCase();
  if (normalized === "expired") return state.language === "is" ? "Aðgangsboðið er útrunnið." : "This invite has expired.";
  if (normalized === "revoked") return state.language === "is" ? "Aðgangsboðið hefur verið afturkallað." : "This invite has been revoked.";
  if (normalized === "already_accepted") return state.language === "is" ? "Aðgangsboðið hefur þegar verið samþykkt. Skráðu þig inn með rétta netfanginu." : "This invite has already been accepted. Log in with the correct email address.";
  if (normalized === "no_hash_match" || normalized === "invite_invalid") return state.language === "is" ? "Aðgangsboðið fannst ekki." : "The invite was not found.";
  if (normalized === "query_error") return state.language === "is" ? "Villa kom upp við að staðfesta aðgangsboðið. Reyndu aftur eða hafðu samband." : "There was a problem validating the invite. Try again or contact support.";
  return state.language === "is"
    ? "Aðgangsboðið fannst ekki, er útrunnið eða hefur verið afturkallað."
    : "The invite was not found, has expired, or has been revoked.";
}

function formatInviteAcceptError(error, invitedEmail = "") {
  const code = String(error?.details?.code || "").toLowerCase();
  const reason = String(error?.details?.diagnostics?.invalid_reason || error?.details?.diagnostics?.accept_error_reason || "").toLowerCase();
  const normalized = code || reason;
  if (normalized === "no_session") {
    return state.language === "is"
      ? "Bíð eftir innskráningu til að virkja aðganginn. Ef þú varst að staðfesta netfangið skaltu skrá þig inn og opna boðið aftur."
      : "Waiting for login to activate the invite. If you just confirmed your email, log in and open the invite again.";
  }
  if ((normalized === "email_mismatch" || code === "email_mismatch") && invitedEmail) {
    return state.language === "is"
      ? `Þetta boð var sent á ${invitedEmail}. Skráðu þig inn með því netfangi.`
      : `This invite was sent to ${invitedEmail}. Log in with that email address.`;
  }
  if (reason === "expired") return state.language === "is" ? "Aðgangsboðið er útrunnið." : "This invite has expired.";
  if (reason === "revoked") return state.language === "is" ? "Aðgangsboðið hefur verið afturkallað." : "This invite has been revoked.";
  if (code === "invite_already_accepted" || reason === "already_accepted") {
    return state.language === "is" ? "Aðgangsboðið hefur þegar verið samþykkt." : "This invite has already been accepted.";
  }
  return formatSupabaseError(error);
}

function renderSignup() {
  if (state.user) {
    const route = getPostAuthRoute();
    setTimeout(() => navigate(route), 0);
    return renderShell(`
      <section class="empty-state">
        <h1>${escapeHtml(t("alreadyLoggedInTitle"))}</h1>
        <p>${escapeHtml(t("alreadyLoggedInText"))}</p>
      </section>
    `);
  }

  const inviteToken = state.pendingInviteToken || getInviteTokenFromRoute(state.route);
  if (!inviteToken) {
    return renderShell(renderPublicSignupUnavailablePage({
      t,
      escapeHtml,
      trialHref: "/trial"
    }));
  }

  return renderShell(renderSignupPage({
    t,
    escapeHtml,
    authForm: state.authForm,
    authSubmitting: state.authSubmitting,
    authMessage: state.authMessage,
    loginHref: getInviteAwareAuthHref("/login"),
    inviteEmail: state.invitePreview?.invited_email || state.invitePreview?.email || "",
    isInviteSignup: Boolean(state.pendingInviteToken && (state.invitePreview?.invited_email || state.invitePreview?.email))
  }));
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
    return `<section class="import-panel"><strong>Running automatic source imports...</strong><p>Fetching enabled source connectors in a limited batch. Refresh matches separately after imports finish.</p></section>`;
  }

  const status = state.connectorImportStatus || {};
  const errors = Array.isArray(status.errors) ? status.errors : [];
  const failedSources = Array.isArray(status.failedSources) ? status.failedSources : [];
  const timedOutSources = Array.isArray(status.timedOutSources) ? status.timedOutSources : [];
  const hasFailures = errors.length || failedSources.length || timedOutSources.length;
  const sourceProgress = Number.isFinite(Number(status.sources_processed))
    ? `<p>${Number(status.sources_processed || 0)} source${Number(status.sources_processed || 0) === 1 ? "" : "s"} processed${Number(status.sources_remaining || 0) ? ` · ${Number(status.sources_remaining || 0)} remaining for next run` : ""}.</p>`
    : "";

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
      ${status.message ? `<p>${escapeHtml(status.message)}</p>` : sourceProgress}
      ${status.matching_skipped ? `<p>Matching was skipped for this batch to stay within Edge Function CPU limits. Refresh company matches from Admin after imports finish.</p>` : ""}
      ${status.reports_skipped ? `<p>Report generation was skipped for this batch.</p>` : ""}
      ${failedSources.length ? `
        <div class="import-failure-list">
          <h3>${failedSources.length} source${failedSources.length === 1 ? "" : "s"} failed</h3>
          ${failedSources.map((failure) => `
            <div class="import-failure-row">
              <strong>${escapeHtml(failure.source || "Unknown source")}</strong>
              <p>${escapeHtml(failure.message || failure.error || "Unknown source import error")}</p>
              ${failure.endpoint_url ? `<small>${escapeHtml(failure.endpoint_url)}</small>` : ""}
            </div>
          `).join("")}
        </div>
      ` : ""}
      ${timedOutSources.length ? `
        <div class="import-failure-list">
          <h3>${timedOutSources.length} source${timedOutSources.length === 1 ? "" : "s"} timed out or were skipped</h3>
          ${timedOutSources.map((failure) => `
            <div class="import-failure-row">
              <strong>${escapeHtml(failure.source || "Unknown source")}</strong>
              <p>${escapeHtml(failure.message || failure.reason || "Skipped because the source import was close to the runtime limit")}</p>
              ${failure.endpoint_url ? `<small>${escapeHtml(failure.endpoint_url)}</small>` : ""}
            </div>
          `).join("")}
        </div>
      ` : ""}
      ${errors.length ? `<ul class="risk-list">${errors.map((error) => `<li>${escapeHtml(error)}</li>`).join("")}</ul>` : ""}
      ${!hasFailures ? `<p>Automatic source import completed.</p>` : `<p>Automatic source import completed with source-level failures. Successful sources were still imported.</p>`}
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
        <p>${escapeHtml(formatOpportunityBuyer(opp))}</p>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(renderAdminReportRow).join("")}
            </tbody>
          </table>
        </div>
      ` : `<div class="empty-card">No generated reports yet.</div>`}
      ${state.selectedAdminReportId ? renderAdminReportDetails() : ""}
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

function getSourceOpportunityStats(opportunities = []) {
  return opportunities.reduce((stats, opportunity) => {
    const rawPayload = opportunity.raw_payload && typeof opportunity.raw_payload === "object" ? opportunity.raw_payload : {};
    const quality = normalizeOpportunityQualityStatus(rawPayload.quality_status || rawPayload.qualityStatus, opportunity);
    stats.active += 1;
    if (quality === "confirmed_tender") stats.confirmed += 1;
    else if (quality === "early_signal") stats.early += 1;
    else stats.needsReview += 1;
    return stats;
  }, {
    active: 0,
    confirmed: 0,
    early: 0,
    needsReview: 0
  });
}

function getSourceCoverageStatus(source) {
  const status = source.source_status || {};
  const connector = source.source_connectors || {};
  const rawStatus = String(connector.status || status.status || "").toLowerCase();
  const connectorType = String(connector.connector_type || "").toLowerCase();

  if (rawStatus.includes("error")) {
    return { label: "Error", className: "is-error", tone: "error" };
  }

  if (rawStatus === "permission_required" || connectorType === "permission_required") {
    return { label: "Permission required", className: "is-permission", tone: "planned" };
  }

  if (connector.enabled && ["connected", "success", "completed", "complete"].includes(rawStatus)) {
    return { label: "Connected", className: "is-success", tone: "connected" };
  }

  if (connector.enabled && ["rss_feed", "wordpress_rest", "ted_api"].includes(connectorType)) {
    return { label: "Connected", className: "is-success", tone: "connected" };
  }

  if (rawStatus === "planned" || connectorType === "planned") {
    return { label: "Planned", className: "is-planned", tone: "planned" };
  }

  return { label: "Disabled", className: "is-disabled", tone: "disabled" };
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
                <th>Source type</th>
                <th>Connector</th>
                <th>Enabled</th>
                <th>Status</th>
                <th>Last success</th>
                <th>Last error</th>
                <th>Active</th>
                <th>Confirmed</th>
                <th>Early</th>
                <th>Needs review</th>
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
  const coverageStatus = getSourceCoverageStatus(source);
  const canTestConnector = connector.enabled && ["rss_feed", "wordpress_rest"].includes(connector.connector_type);
  const isTesting = state.connectorTestingSourceId === source.id;
  const stats = source.opportunityStats || { active: Number(status.active_opportunities_count || 0), confirmed: 0, early: 0, needsReview: 0 };
  const latest = source.latestOpportunities || [];
  const isExpanded = state.expandedSourceId === source.id;
  const lastError = connector.last_error || status.last_error || "";
  const rowClass = coverageStatus.tone === "connected" ? "source-row-connected" : "source-row-muted";
  return `
    <tr class="${rowClass}">
      <td>
        <strong>${escapeHtml(source.name || "Unknown source")}</strong>
        ${connector.endpoint_url || source.base_url ? `<br><a href="${escapeHtml(connector.endpoint_url || source.base_url)}" target="_blank" rel="noreferrer">${escapeHtml(connector.endpoint_url || source.base_url)}</a>` : ""}
      </td>
      <td>${escapeHtml(formatSourceType(source.source_type))}</td>
      <td>
        <strong>${escapeHtml(formatConnectorType(connector.connector_type))}</strong>
        ${connector.require_any_keyword === false ? `<br><span>Keyword match optional</span>` : `<br><span>Requires keyword match</span>`}
        ${Array.isArray(connector.include_keywords) && connector.include_keywords.length ? `<br><span>Includes: ${escapeHtml(connector.include_keywords.slice(0, 5).join(", "))}${connector.include_keywords.length > 5 ? "..." : ""}</span>` : ""}
        ${Array.isArray(connector.exclude_keywords) && connector.exclude_keywords.length ? `<br><span>Excludes: ${escapeHtml(connector.exclude_keywords.slice(0, 5).join(", "))}${connector.exclude_keywords.length > 5 ? "..." : ""}</span>` : ""}
      </td>
      <td>
        <span class="status-pill ${connector.enabled ? "is-success" : "is-disabled"}">${connector.enabled ? "Enabled" : "Disabled"}</span>
      </td>
      <td><span class="status-pill ${coverageStatus.className}">${escapeHtml(coverageStatus.label)}</span></td>
      <td>${escapeHtml(formatDateTime(connector.last_success_at || status.last_success_at))}</td>
      <td>${lastError ? escapeHtml(lastError) : `<span class="muted-text">None</span>`}</td>
      <td>${Number(stats.active || 0)}</td>
      <td>${Number(stats.confirmed || 0)}</td>
      <td>${Number(stats.early || 0)}</td>
      <td>${Number(stats.needsReview || 0)}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="test-source-connector" data-id="${escapeHtml(source.id)}" ${(!canTestConnector || isTesting || state.connectorImportLoading) ? "disabled" : ""}>
          ${isTesting ? "Testing..." : "Test source"}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="toggle-source-items" data-id="${escapeHtml(source.id)}" ${!latest.length ? "disabled" : ""}>
          ${isExpanded ? "Hide items" : "View latest items"}
        </button>
      </td>
    </tr>
    ${isExpanded ? renderSourceLatestItemsRow(source) : ""}
  `;
}

function renderSourceLatestItemsRow(source) {
  const latest = source.latestOpportunities || [];
  return `
    <tr class="source-items-row">
      <td colspan="12">
        <div class="source-items-panel">
          <div class="source-items-header">
            <strong>Latest active items</strong>
            <span>${latest.length} shown</span>
          </div>
          ${latest.length ? `
            <div class="source-items-list">
              ${latest.map((opportunity) => {
                const rawPayload = opportunity.raw_payload && typeof opportunity.raw_payload === "object" ? opportunity.raw_payload : {};
                const quality = normalizeOpportunityQualityStatus(rawPayload.quality_status || rawPayload.qualityStatus, opportunity);
                return `
                  <div class="source-item">
                    <div>
                      <strong>${escapeHtml(opportunity.title || "Untitled opportunity")}</strong>
                      <span>${escapeHtml(formatReportMetadataValue("buyer", getCleanOpportunityBuyer(opportunity.buyer, source.name)))} · ${escapeHtml(formatOpportunityDeadline(opportunity.deadline))}</span>
                    </div>
                    <span class="quality-badge ${escapeHtml(quality)}">${escapeHtml(formatQualityStatus(quality))}</span>
                    ${opportunity.url ? `<a class="btn btn-ghost btn-small" href="${escapeHtml(opportunity.url)}" target="_blank" rel="noreferrer">Open</a>` : ""}
                  </div>
                `;
              }).join("")}
            </div>
          ` : `<div class="empty-card">No active items for this source.</div>`}
        </div>
      </td>
    </tr>
  `;
}

function renderAdminReportRow(report) {
  const companyName = report.companies?.company_name || "Unknown company";
  const itemCount = Array.isArray(report.report_items) ? report.report_items.length : 0;
  return `
    <tr>
      <td>${escapeHtml(getCustomerReportTitle(report, companyName))}</td>
      <td>${escapeHtml(companyName)}</td>
      <td>${escapeHtml(formatDateTime(report.created_at))}</td>
      <td>${escapeHtml(`${formatShortDate(report.period_start)} - ${formatShortDate(report.period_end)}`)}</td>
      <td>${escapeHtml(report.status || "draft")}</td>
      <td>${itemCount}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-report" data-id="${escapeHtml(report.id)}">${escapeHtml(state.language === "is" ? "Skoða yfirlit" : "View report")}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="copy-admin-report" data-id="${escapeHtml(report.id)}">${escapeHtml(getReportUiLabel("copyReportEmail", state.language))}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="view-admin-report" data-id="${escapeHtml(report.id)}">${escapeHtml(state.language === "is" ? "Opna fyrir PDF" : "Open for PDF")}</button>
        </div>
      </td>
    </tr>
  `;
}

function renderAdminReportDetails() {
  const listReport = (state.adminReports || []).find((item) => item.id === state.selectedAdminReportId);
  const report = state.selectedAdminReport?.id === state.selectedAdminReportId ? state.selectedAdminReport : listReport;
  if (!report && !state.selectedAdminReportLoading && !state.selectedAdminReportError) return "";
  if (!report) {
    return `
      <div class="modal-backdrop">
        <div class="modal admin-report-modal" role="dialog" aria-modal="true">
          <div class="modal-header">
            <div>
              <span class="status-pill is-success">generated</span>
              <h2>Loading report</h2>
              <p>Loading saved report items...</p>
            </div>
            <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-report" aria-label="Close report">×</button>
          </div>
          <div class="modal-body">
            ${state.selectedAdminReportError ? `<div class="admin-message is-error">${escapeHtml(state.selectedAdminReportError)}</div>` : `<div class="empty-card">Loading saved report items...</div>`}
          </div>
        </div>
      </div>
    `;
  }
  const companyName = report.companies?.company_name || "Unknown company";
  const itemCount = Array.isArray(report.report_items) ? report.report_items.length : 0;
  const cleanTitle = getCustomerReportTitle(report, companyName);
  return `
    <div class="modal-backdrop">
      <div class="modal admin-report-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill is-success">${escapeHtml(formatReportArchiveStatus(report.status))}</span>
            <h2>${escapeHtml(cleanTitle)}</h2>
            <p>${escapeHtml(companyName)} · ${escapeHtml(formatReportDateRange(report.period_start, report.period_end))} · ${escapeHtml(formatDateTime(report.created_at))}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-report" aria-label="Close report">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-report-actions">
            <button class="btn btn-primary" type="button" data-action="download-admin-report-pdf" ${state.selectedAdminReportLoading ? "disabled" : ""}>${escapeHtml(getReportUiLabel("downloadPdf", state.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="copy-admin-report" data-id="${escapeHtml(report.id)}">${escapeHtml(getReportUiLabel("copyReportEmail", state.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="mark-admin-report-sent" data-id="${escapeHtml(report.id)}" ${state.adminReportDeliveryActions[report.id] === "sent" ? "disabled" : ""}>${escapeHtml(state.adminReportDeliveryActions[report.id] === "sent" ? getReportUiLabel("marking", state.language) : getReportUiLabel("markAsSent", state.language))}</button>
            <button class="btn btn-ghost" type="button" data-action="close-admin-report">${escapeHtml(getReportUiLabel("close", state.language))}</button>
          </div>

          ${state.selectedAdminReportLoading ? `<div class="empty-card">Loading saved report items...</div>` : ""}
          ${state.selectedAdminReportError ? `<div class="admin-message is-error">${escapeHtml(state.selectedAdminReportError)}</div>` : ""}
          ${!state.selectedAdminReportLoading ? renderAdminReportMetadataStrip(report, itemCount, companyName) : ""}

          ${!state.selectedAdminReportLoading && itemCount ? renderSavedReportPreview(report, { companyName }, {
            id: "admin-report-preview",
            closeButton: false,
            includeTextArea: false
          }) : !state.selectedAdminReportLoading ? `
            <div class="empty-card">${escapeHtml(state.language === "is" ? "Engin virk tækifæri eru í þessu yfirliti." : "No active eligible opportunities in this report.")}</div>
          ` : ""}

          ${!state.selectedAdminReportLoading && itemCount ? renderAdminReportItems(report) : ""}
        </div>
      </div>
    </div>
  `;
}

function renderAdminReportMetadataStrip(report, itemCount, companyName) {
  const mode = report.status === "generated_all_current"
    ? "all_current"
    : report.status === "generated_new_only"
      ? "new_only"
      : report.status || "draft";
  return `
    <div class="admin-report-meta-strip">
      <span><strong>${escapeHtml(getReportUiLabel("company", state.language))}:</strong> ${escapeHtml(companyName || "Unknown company")}</span>
      <span><strong>${escapeHtml(getReportUiLabel("period", state.language))}:</strong> ${escapeHtml(formatReportDateRange(report.period_start, report.period_end))}</span>
      <span><strong>${escapeHtml(getReportUiLabel("generatedAt", state.language))}:</strong> ${escapeHtml(formatDateTime(report.created_at))}</span>
      <span><strong>${escapeHtml(getReportUiLabel("mode", state.language))}:</strong> ${escapeHtml(mode === "all_current" ? getReportUiLabel("currentActive", state.language) : getReportUiLabel("newOpportunities", state.language))}</span>
      <span><strong>${escapeHtml(getReportUiLabel("items", state.language))}:</strong> ${Number(itemCount || 0)}</span>
    </div>
  `;
}

function renderAdminReportItems(report) {
  const items = Array.isArray(report.report_items) ? [...report.report_items] : [];
  const sortedItems = items.sort((a, b) => Number(a.sort_order || 0) - Number(b.sort_order || 0));
  return `
    <section class="admin-report-items">
      <h3>${escapeHtml(state.language === "is" ? "Atriði í yfirliti" : "Report items")}</h3>
      <div class="admin-report-item-list">
        ${sortedItems.map((item) => renderAdminReportItem(item)).join("")}
      </div>
    </section>
  `;
}

function renderAdminReportItem(item) {
  const opp = item.opportunities ? mapSupabaseOpportunity(item.opportunities) : null;
  if (!opp) {
    return `<article class="admin-report-item"><p>${escapeHtml(state.language === "is" ? "Gögn um tækifæri eru ekki lengur aðgengileg." : "Opportunity data is no longer available.")}</p></article>`;
  }
  const safeUrl = getSafeExternalUrl(opp.url);
  const deadline = getOpportunityDeadlineDisplay(opp);
  const reasons = cleanReportReasons(Array.isArray(item.match_reasons) ? item.match_reasons : [], state.language);
  return `
    <article class="admin-report-item">
      <div class="opportunity-badges">
        <span class="source-pill source-badge">${escapeHtml(getReportStatusBadge({ matchScore: Number(item.match_score || 0) }, state.language))}</span>
        <span class="${badgeClass(getMatchLabel(Number(item.match_score || 0)))}">${escapeHtml(`${getReportScoreLabel({ matchScore: Number(item.match_score || 0) }, state.language)} ${Number(item.match_score || 0)}`)}</span>
      </div>
      <h4>${escapeHtml(opp.title)}</h4>
      <p><strong>${escapeHtml(state.language === "is" ? "Staða" : "Status")}:</strong> ${escapeHtml(getReportStatusBadge({ matchScore: Number(item.match_score || 0) }, state.language))}</p>
      <p>${escapeHtml(getReportVerificationSentence(state.language))}</p>
      <div class="admin-report-meta-grid">
        <span><strong>${escapeHtml(t("buyer"))}</strong>${escapeHtml(formatOpportunityBuyer(opp))}</span>
        <span><strong>${escapeHtml(t("source"))}</strong>${escapeHtml(formatReportMetadataValue("source", opp.source))}</span>
        <span><strong>${escapeHtml(t("area"))}</strong>${escapeHtml(formatOpportunityLocation(opp))}</span>
        <span><strong>${escapeHtml(t("deadline"))}</strong>${escapeHtml(deadline.label)}</span>
        <span><strong>${escapeHtml(t("estimatedValue"))}</strong>${escapeHtml(opp.estimatedValue ? formatISK(opp.estimatedValue) : t("notListed"))}</span>
        <span><strong>${escapeHtml(getReportUiLabel("sentStatus", state.language))}</strong>${escapeHtml(item.sent_at ? `${getReportUiLabel("sentOn", state.language)} ${formatDateTime(item.sent_at)}` : getReportUiLabel("notSent", state.language))}</span>
      </div>
      ${reasons.length ? `<div><strong>${escapeHtml(getReportUiLabel("reasons", state.language))}</strong><ul>${reasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}</ul></div>` : ""}
      <p>${escapeHtml(opp.description || "")}</p>
      ${safeUrl ? `<a class="btn btn-secondary btn-small" href="${escapeHtml(safeUrl)}" target="_blank" rel="noreferrer">${escapeHtml(getReportUiLabel("openSource", state.language))}</a>` : ""}
    </article>
  `;
}

async function copyAdminReportEmail(reportId) {
  const report = state.selectedAdminReport?.id === reportId
    ? state.selectedAdminReport
    : (state.adminReports || []).find((item) => item.id === reportId);
  if (!report) {
    showToast("Report not found", "error");
    return;
  }
  const companyName = report.companies?.company_name || "Company";
  const detailedMatches = getSavedReportItemMatches(report);
  const text = buildReportEmail({
    companyName,
    language: state.language,
    matches: detailedMatches.map((match) => ({
      ...match,
      buyer: formatOpportunityBuyer(match),
      deadline: formatOpportunityDeadlineForReport(match),
      matchReasons: cleanReportReasons(match.matchReasons, state.language),
    })),
  });
  try {
    await navigator.clipboard.writeText(text);
    showToast("Report email copied", "success");
  } catch (error) {
    console.error("Failed to copy admin report:", error);
    showToast("Could not copy report email", "error");
  }
}

async function markAdminReportSent(reportId) {
  const report = state.selectedAdminReport?.id === reportId
    ? state.selectedAdminReport
    : (state.adminReports || []).find((item) => item.id === reportId);
  if (!report?.company_id) {
    showToast("Report not found", "error");
    return;
  }
  state.adminReportDeliveryActions[reportId] = "sent";
  render();
  try {
    const payload = await runAdminCompanyAction(report.company_id, "mark_report_sent", { reportId });
    await loadAdminReportDetails(reportId);
    showToast(`Marked ${Number(payload.marked_sent || 0)} report item${Number(payload.marked_sent || 0) === 1 ? "" : "s"} as sent`, "success");
  } catch (error) {
    console.error("Failed to mark report as sent:", error);
    showToast(`Could not mark report as sent. ${formatSupabaseError(error)}`, "error");
  } finally {
    delete state.adminReportDeliveryActions[reportId];
    render();
  }
}

function getFilteredAdminOpportunities() {
  const filters = getAdminOpportunityFilters();
  const filtered = (state.opportunities || []).filter((opp) => {
    const isTed = isTedOpportunity(opp);
    if (filters.tedOnly && !isTed) return false;
    if (filters.manualOnly && isTed) return false;
    if (!filters.showDemoTest && isDemoTestOpportunity(opp)) return false;
    if (!isOpportunityInAddedWindow(opp, filters.addedWindow)) return false;
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
  return sortAdminOpportunities(filtered, filters.sortBy);
}

function getAdminOpportunityFilters() {
  return {
    source: "all",
    missingDeadlineSource: "all",
    status: "all",
    country: "all",
    search: "",
    debugCompanyId: "",
    tedOnly: false,
    manualOnly: false,
    showDemoTest: false,
    sortBy: "created_desc",
    addedWindow: "all",
    ...(state.adminOpportunityFilters || {})
  };
}

function normalizeAdminOpportunitySort(value) {
  return ["created_desc", "created_asc", "deadline_asc", "deadline_desc", "updated_desc"].includes(value)
    ? value
    : "created_desc";
}

function normalizeAdminOpportunityAddedWindow(value) {
  return ["today", "3d", "7d", "all"].includes(value) ? value : "all";
}

function getAdminOpportunitySortOptions() {
  return [
    ["created_desc", "Nýjast bætt við"],
    ["created_asc", "Elst bætt við"],
    ["deadline_asc", "Skilafrestur næst"],
    ["deadline_desc", "Skilafrestur lengst frá"],
    ["updated_desc", "Nýjast uppfært"]
  ];
}

function getAdminOpportunityAddedWindowOptions() {
  return [
    ["today", "Bætt við í dag"],
    ["3d", "Síðustu 3 dagar"],
    ["7d", "Síðustu 7 dagar"],
    ["all", "Allt"]
  ];
}

function isOpportunityInAddedWindow(opp, windowValue) {
  const windowKey = normalizeAdminOpportunityAddedWindow(windowValue);
  if (windowKey === "all") return true;
  const createdTime = getDateTimeValue(opp.createdAt);
  if (!Number.isFinite(createdTime)) return false;
  const now = new Date();
  if (windowKey === "today") {
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    return createdTime >= start;
  }
  const days = windowKey === "3d" ? 3 : 7;
  return createdTime >= now.getTime() - days * 24 * 60 * 60 * 1000;
}

function sortAdminOpportunities(opportunities, sortBy) {
  const sortKey = normalizeAdminOpportunitySort(sortBy);
  return [...opportunities].sort((a, b) => {
    if (sortKey === "created_asc") return compareDateValues(a.createdAt, b.createdAt, "asc");
    if (sortKey === "deadline_asc") return compareDateValues(getAdminOpportunityDeadlineSortValue(a), getAdminOpportunityDeadlineSortValue(b), "asc", { nullsLast: true });
    if (sortKey === "deadline_desc") return compareDateValues(getAdminOpportunityDeadlineSortValue(a), getAdminOpportunityDeadlineSortValue(b), "desc", { nullsLast: true });
    if (sortKey === "updated_desc") return compareDateValues(a.updatedAt || a.createdAt, b.updatedAt || b.createdAt, "desc");
    return compareDateValues(a.createdAt, b.createdAt, "desc");
  });
}

function getAdminOpportunityDeadlineSortValue(opp) {
  return opp.deadlineAt || opp.rawPayload?.deadline_at || opp.deadline || "";
}

function compareDateValues(a, b, direction = "desc", options = {}) {
  const aTime = getDateTimeValue(a);
  const bTime = getDateTimeValue(b);
  const aValid = Number.isFinite(aTime);
  const bValid = Number.isFinite(bTime);
  if (!aValid && !bValid) return 0;
  if (!aValid) return options.nullsLast ? 1 : direction === "asc" ? -1 : 1;
  if (!bValid) return options.nullsLast ? -1 : direction === "asc" ? 1 : -1;
  return direction === "asc" ? aTime - bTime : bTime - aTime;
}

function getDateTimeValue(value) {
  if (!value) return Number.NaN;
  const parsed = new Date(value).getTime();
  if (!Number.isNaN(parsed)) return parsed;
  const isoDate = String(value).match(/^(\d{4}-\d{2}-\d{2})$/);
  if (isoDate) return new Date(`${isoDate[1]}T00:00:00Z`).getTime();
  return Number.NaN;
}

function getAdminFilterOptions(items, getter) {
  return Array.from(new Set(items.map(getter).filter(Boolean))).sort((a, b) => String(a).localeCompare(String(b)));
}

function renderAdminOpportunityFilters(opportunities) {
  const filters = getAdminOpportunityFilters();
  const sources = getAdminFilterOptions(state.opportunities || [], (opp) => opp.source || "Unknown");
  const statuses = getAdminFilterOptions(state.opportunities || [], (opp) => opp.status || "Unknown");
  const countries = getAdminFilterOptions(state.opportunities || [], (opp) => getOpportunityCountryCode(opp) || opp.countryCode || "Unknown");
  const companies = state.adminCompanies || [];
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
      <select data-admin-filter="sortBy" aria-label="Röðun">
        ${getAdminOpportunitySortOptions().map(([value, label]) => `<option value="${escapeHtml(value)}" ${normalizeAdminOpportunitySort(filters.sortBy) === value ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
      </select>
      <select data-admin-filter="addedWindow" aria-label="Bætt við">
        ${getAdminOpportunityAddedWindowOptions().map(([value, label]) => `<option value="${escapeHtml(value)}" ${normalizeAdminOpportunityAddedWindow(filters.addedWindow) === value ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
      </select>
      <select data-admin-filter="debugCompanyId">
        <option value="">Match debug company...</option>
        ${companies.map((company) => `<option value="${escapeHtml(company.id)}" ${filters.debugCompanyId === company.id ? "selected" : ""}>${escapeHtml(company.companyName)}</option>`).join("")}
      </select>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="tedOnly" ${filters.tedOnly ? "checked" : ""}/><span>TED only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="manualOnly" ${filters.manualOnly ? "checked" : ""}/><span>Manual only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="showDemoTest" ${filters.showDemoTest ? "checked" : ""}/><span>Show demo/test opportunities</span></label>
    </div>
    <p class="admin-filter-count">${opportunities.length} of ${(state.opportunities || []).length} opportunities shown.</p>
  `;
}

function hasOpportunityDeadline(opp) {
  return Boolean(opp?.deadline || opp?.deadlineAt || opp?.rawPayload?.deadline_at || opp?.rawPayload?.deadlineAt);
}

function getMissingDeadlineOpportunities() {
  const selectedSource = getAdminOpportunityFilters().missingDeadlineSource || "all";
  return (state.opportunities || [])
    .filter((opp) => !hasOpportunityDeadline(opp))
    .filter((opp) => !isDemoTestOpportunity(opp))
    .filter((opp) => selectedSource === "all" || opp.source === selectedSource)
    .sort((a, b) => String(a.source || "").localeCompare(String(b.source || "")) || String(a.title || "").localeCompare(String(b.title || "")));
}

function getMissingDeadlineSourceOptions() {
  const prioritySources = [
    "Ríkiskaup / island.is procurement",
    "Vegagerðin",
    "Akranes útboð",
    "Garðabær Municipality"
  ];
  const dynamicSources = getAdminFilterOptions(
    (state.opportunities || []).filter((opp) => !hasOpportunityDeadline(opp)),
    (opp) => opp.source || "Unknown"
  );
  return uniqueStrings([...prioritySources, ...dynamicSources]);
}

function getFetchableSourceUrlInfo(opp) {
  const raw = opp?.rawPayload || {};
  const url = String(opp?.url || raw.source_url || raw.link || "").trim();
  if (!url) return { label: "No source URL", isSafe: false };
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return { label: "Invalid URL", isSafe: false };
  }
  if (!["http:", "https:"].includes(parsed.protocol)) return { label: `Unsupported protocol: ${parsed.protocol}`, isSafe: false };
  const host = parsed.hostname.replace(/^www\./i, "").toLowerCase();
  const safeHosts = [
    "utbodsvefur.is",
    "vegagerdin.is",
    "akranes.is",
    "gardabaer.is",
    "borgarbyggd.is",
    "arborg.is",
    "faxafloahafnir.is",
    "reykjavik.is",
    "hafnarfjordur.is",
    "reykjanesbaer.is",
    "mulathing.is",
    "akureyri.is"
  ];
  const isSafe = safeHosts.some((safeHost) => host === safeHost || host.endsWith(`.${safeHost}`));
  return { label: isSafe ? `Yes (${host})` : `Unknown host (${host})`, isSafe };
}

function getMissingDeadlineReason(opp) {
  const raw = opp?.rawPayload || {};
  const debug = raw.deadline_debug && typeof raw.deadline_debug === "object" ? raw.deadline_debug : {};
  const parts = [
    raw.deadline_debug_reason,
    raw.deadline_reenrichment_error,
    debug.source ? `debug source: ${debug.source}` : "",
    debug.extractedText ? `extracted: ${debug.extractedText}` : "",
    debug.parserVersion ? `parser: ${debug.parserVersion}` : "",
    raw.stale_reason ? `stale: ${raw.stale_reason}` : ""
  ].filter(Boolean);
  return parts.length ? parts.join(" · ") : "Still missing after import/re-enrichment, or no debug reason stored yet.";
}

function renderMissingDeadlineDebugSection() {
  const missing = getMissingDeadlineOpportunities();
  const counts = getMissingDeadlineDebugCounts(missing);
  const grouped = missing.reduce((acc, opp) => {
    const source = opp.source || "Unknown";
    if (!acc[source]) acc[source] = [];
    acc[source].push(opp);
    return acc;
  }, {});
  const sources = Object.keys(grouped).sort((a, b) => a.localeCompare(b));
  const selectedSource = getAdminOpportunityFilters().missingDeadlineSource || "all";
  const sourceOptions = getMissingDeadlineSourceOptions();
  return `
    <section class="ops-card admin-debug-card">
      <div class="card-header">
        <div>
          <h2>Missing deadline debug</h2>
          <p>${missing.length} opportunities missing deadlines${selectedSource !== "all" ? ` for ${escapeHtml(selectedSource)}` : ""}. Grouped by source.</p>
          <p class="admin-filter-count">
            total=${counts.total} · alert_eligible=false=${counts.alertFalse} · alert_eligible not false=${counts.alertNotFalse} · confirmed_tender=${counts.confirmedTender} · needs_review=${counts.needsReview}
          </p>
        </div>
        <label class="admin-inline-control">
          <span>Source</span>
          <select data-admin-filter="missingDeadlineSource">
            <option value="all">All sources</option>
            ${sourceOptions.map((source) => `<option value="${escapeHtml(source)}" ${selectedSource === source ? "selected" : ""}>${escapeHtml(source)}</option>`).join("")}
          </select>
        </label>
      </div>
      ${sources.length ? sources.map((source) => renderMissingDeadlineSourceGroup(source, grouped[source])).join("") : `<div class="empty-card">No missing-deadline opportunities for this filter.</div>`}
    </section>
  `;
}

function getMissingDeadlineDebugCounts(opportunities) {
  return (opportunities || []).reduce((acc, opp) => {
    const payload = opp?.rawPayload || {};
    const alertValue = String(payload.alert_eligible ?? "").toLowerCase();
    const quality = String(payload.quality_status || "").toLowerCase();
    acc.total += 1;
    if (alertValue === "false") acc.alertFalse += 1;
    else acc.alertNotFalse += 1;
    if (quality === "confirmed_tender") acc.confirmedTender += 1;
    if (quality === "needs_review") acc.needsReview += 1;
    return acc;
  }, {
    total: 0,
    alertFalse: 0,
    alertNotFalse: 0,
    confirmedTender: 0,
    needsReview: 0,
  });
}

function renderMissingDeadlineSourceGroup(source, opportunities) {
  return `
    <div class="missing-deadline-source-group">
      <h3>${escapeHtml(source)} <span class="muted">(${opportunities.length})</span></h3>
      <div class="ops-table-wrap">
        <table class="ops-table missing-deadline-table">
          <thead>
            <tr>
              <th>ID / external</th>
              <th>Title</th>
              <th>Source URL</th>
              <th>Published</th>
              <th>Safety</th>
              <th>Fetchable</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            ${opportunities.map(renderMissingDeadlineRow).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderMissingDeadlineRow(opp) {
  const fetchable = getFetchableSourceUrlInfo(opp);
  const safeUrl = getSafeExternalUrl(opp.url || opp.rawPayload?.source_url || "");
  const safetyStatus = opp.rawPayload?.safety_status || opp.rawPayload?.quality_status || getOpportunityQualityLabel(opp);
  const rawAlertEligible = opp.rawPayload?.alert_eligible;
  const alertEligible = rawAlertEligible === true ? "true" : "false";
  const alertWarning = String(rawAlertEligible ?? "").toLowerCase() !== "false" ? `<br><span class="status-pill is-warning">Missing deadline alert flag needs fix</span>` : "";
  const reason = getMissingDeadlineReason(opp);
  return `
    <tr>
      <td><code>${escapeHtml(String(opp.id || ""))}</code><br><span>${escapeHtml(opp.externalId || "No external ID")}</span></td>
      <td><strong>${escapeHtml(opp.title || "Untitled")}</strong><br><span>${escapeHtml(opp.source || "Unknown source")}</span></td>
      <td>${safeUrl ? `<a href="${escapeHtml(safeUrl)}" target="_blank" rel="noreferrer" title="${escapeHtml(safeUrl)}">${escapeHtml(safeUrl)}</a>` : "No source URL"}</td>
      <td>${opp.publishedDate ? escapeHtml(formatDateTime(opp.publishedDate)) : "Not listed"}</td>
      <td>${escapeHtml(safetyStatus || "unknown")}<br><span>alert_eligible=${escapeHtml(alertEligible)}</span>${alertWarning}</td>
      <td><span class="status-pill ${fetchable.isSafe ? "is-success" : "is-running"}">${escapeHtml(fetchable.label)}</span></td>
      <td title="${escapeHtml(reason)}">${escapeHtml(reason)}</td>
    </tr>
  `;
}

function renderLanding() {
  return renderShell(renderLandingPage({
    t,
    escapeHtml,
    language: state.language,
    trialHref: getTrialAccessHref()
  }));
}


function renderOnboarding() {
  if (!state.user) return requireAuthPage();

  initializeProfileDraft();
  return renderShell(`
    <section class="page-head pricing-head">
      <p class="eyebrow">${escapeHtml(t("onboarding"))}</p>
      <h1>${escapeHtml(t("onboardingTitle"))}</h1>
      <p>${escapeHtml(t("onboardingText"))}</p>
    </section>

    ${renderProfileForm()}
  `);
}

function renderProfileForm() {
  initializeProfileDraft();
  return renderProfileFormPage({
    t,
    escapeHtml,
    capitalize,
    arrayFieldText,
    formatCustomerLocation,
    getFilterOptions,
    getProfileSuggestions,
    renderCustomDropdown,
    renderSuggestionChips,
    profileDraft: state.profileDraft || getEmptyProfile(),
    accountEmail: state.user?.email || "",
    hasProfile: Boolean(state.profile),
    isSavingProfile: state.isSavingProfile,
    profileSaved: state.profileSaved,
    profileSaveMessage: state.profileSaveMessage,
    profileSaveError: state.profileSaveError
  });
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
      { value: "strong", label: state.language === "is" ? "Aðeins sterkar" : "Strong only" },
      { value: "recommended", label: state.language === "is" ? "Mælt með" : "Recommended" },
      { value: "all", label: state.language === "is" ? "Allar samsvaranir" : "All matches" },
      { value: "all_opportunities", label: state.language === "is" ? "Öll tækifæri" : "All opportunities" },
      { value: "needs_review", label: t("needsReview") },
      { value: "possible", label: state.language === "is" ? "Mögulegar samsvaranir" : "Possible matches" },
      { value: "Good match", label: t("goodMatch") },
      { value: "Weak match", label: t("weakMatch") }
    ];
  }

  if (key === "category") {
    return [
      { value: "all", label: state.language === "is" ? "Allir flokkar" : "All categories" },
      ...categories().map((value) => ({ value, label: value }))
    ];
  }

  if (key === "location") {
    return [
      { value: "all", label: state.language === "is" ? "Öll svæði" : "All locations" },
      ...locations().map((value) => ({ value, label: formatCustomerLocation(value) }))
    ];
  }

  if (key === "type") {
    return [
      { value: "all", label: state.language === "is" ? "Allar tegundir" : "All types" },
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
  return options.find((option) => option.value === selectedValue)?.label || (key === "industry" ? t("selectIndustry") : options[0]?.label) || "";
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
  const selectedLabel = options.find((option) => option.value === selectedValue)?.label || (key === "industry" ? t("selectIndustry") : options[0]?.label) || "";

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
      t("setupCompanyFirst"),
      t("dashboardNeedsProfile")
    );
  }

  const matches = getFilteredMatches();
  const allMatches = getStoredDashboardMatches();
  const filteredStoredMatches = getDashboardFilterBaseMatches(allMatches);
  const availableOpportunities = getAvailableDashboardOpportunities();
  const strong = filteredStoredMatches.filter((o) => o.matchScore >= 85).length;
  const closingSoon = filteredStoredMatches.filter((o) => daysUntilDeadline(o.deadline) <= 14 && daysUntilDeadline(o.deadline) >= 0).length;
  const savedCount = state.saved.length;
  const totalValue = filteredStoredMatches.filter((o) => o.matchScore >= 65).reduce((sum, o) => sum + (o.estimatedValue || 0), 0);
  const recommendedCount = filteredStoredMatches.filter(isRecommendedDashboardMatch).length;
  const filterSummary = getDashboardFilterSummary({
    visibleCount: matches.length,
    storedMatchCount: allMatches.length,
    filteredStoredCount: filteredStoredMatches.length,
    availableCount: availableOpportunities.length,
    recommendedCount,
    strongCount: strong,
    companyName: state.profile.companyName,
  });
  const matchRefreshText = state.lastMatchedAt
    ? t("matchesLastRefreshed", { time: formatDateTime(state.lastMatchedAt) })
    : t("matchesAutoRefresh");

  return renderShell(renderDashboardPage({
    profile: state.profile,
    matches,
    stats: {
      strong,
      closingSoon,
      savedCount,
      totalValue: formatISK(totalValue)
    },
    filters: state.filters,
    filterSummary,
    matchStatus: state.matchStatus,
    opportunityLoadError: state.opportunityLoadError,
    isAdmin: state.isAdmin,
    matchingLoading: state.matchingLoading,
    labels: {
      dashboard: t("dashboard"),
      welcomeCompany: t("welcomeCompany", { company: state.profile.companyName }),
      dashboardIntro: t("dashboardIntro", { refresh: matchRefreshText }),
      refreshing: t("refreshing"),
      refreshMatches: t("refreshMatches"),
      viewWeeklyReport: t("viewWeeklyReport"),
      strongMatches: t("strongMatches"),
      closingSoon: t("closingSoon"),
      savedLabel: t("savedLabel"),
      totalPotentialValue: t("totalPotentialValue"),
      searchOpportunities: t("searchOpportunities"),
      savedOnly: t("savedOnly")
    },
    renderFilterDropdown,
    renderOpportunityCard,
    renderEmptyState: () => renderDashboardEmptyState(state.profile, state.filters.label, {
      availableCount: availableOpportunities.length,
      storedMatchCount: allMatches.length,
      filteredStoredCount: filteredStoredMatches.length,
      recommendedCount,
      strongCount: strong,
    }),
    escapeHtml
  }));
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
    suggestions.push(state.language === "is" ? "Bætið við Allt landið til að ná landsdekkandi útboðum og rammasamningum." : "Add All Iceland to catch national tenders and framework agreements.");
  }
  if (!profile?.nationalProjects) {
    suggestions.push(state.language === "is" ? "Kveikið á landsdekkandi verkefnum svo slík tækifæri birtist sem mögulegar samsvaranir." : "Enable national projects so All Iceland opportunities appear as possible matches.");
  }
  if (services.length < 5) {
    suggestions.push(state.language === "is" ? "Bætið við nákvæmari þjónustu svo VerkRadar þekki betur útboð sem passa við ykkar vinnu." : "Add more specific services so VerkRadar can recognize notices that fit your work.");
  }
  if (excludesReykjavik) {
    suggestions.push(state.language === "is" ? "Yfirfarið útilokunarorð fyrir Reykjavík eða höfuðborgarsvæðið. Þau geta falið útboð sem fyrirtæki utan svæðisins geta samt boðið í." : "Review exclude keywords for Reykjavík or Capital Area. They may hide tenders that companies outside Reykjavík can still bid on.");
  }
  if (includeKeywords.length < 4) {
    suggestions.push(state.language === "is" ? "Bætið við fleiri leitarorðum, sérstaklega íslenskum hugtökum sem kaupendur nota í útboðum." : "Add more include keywords, including Icelandic terms buyers may use in notices.");
  }

  if (!suggestions.length) {
    suggestions.push(state.language === "is" ? "Yfirfarið þjónustu, svæði og leitarorð svo þau lýsi verkefnunum sem þið viljið raunverulega bjóða í." : "Review services, locations and keywords to make sure they describe the work you actually want to bid on.");
  }

  return suggestions;
}

function getDashboardEmptyCopy(filter, context = {}) {
  if (state.language === "is") {
    if (filter === "all") {
      return { eyebrow: "Engar samsvaranir", title: "Engin tækifæri fundust fyrir þennan prófíl enn.", body: "Víkkið þjónustu, svæði eða leitarorð til að finna fleiri tækifæri." };
    }
    if (filter === "all_opportunities") {
      return { eyebrow: "Engin tækifæri", title: "Engin tiltæk tækifæri enn.", body: "Flytjið inn fleiri heimildir eða skoðið heimildayfirlit í Admin." };
    }
    if (filter === "needs_review") {
      return { eyebrow: "Ekkert þarf staðfestingu", title: "Engin tækifæri þarfnast staðfestingar núna.", body: "Tækifæri úr breiðum heimildum sem þarf að yfirfara birtast hér." };
    }
    if (filter === "strong") {
      return { eyebrow: "Engar sterkar samsvaranir", title: "Engar sterkar samsvaranir enn.", body: "Þið gætuð samt átt gagnlegar mögulegar samsvaranir. Prófið Mælt með eða Allar samsvaranir." };
    }
    if (filter === "possible" || filter === "Possible match" || filter === "Weak match") {
      return { eyebrow: "Engar mögulegar samsvaranir", title: "Engar mögulegar samsvaranir enn.", body: "Prófið að víkka þjónustu, svæði eða leitarorð til að finna óvissari tækifæri." };
    }
    return { eyebrow: "Engar ráðlagðar samsvaranir", title: getRecommendedEmptyTitle(context), body: getRecommendedEmptyBody(context) };
  }
  if (filter === "all") {
    return {
      eyebrow: "No matches",
      title: "No opportunities found for this profile yet.",
      body: "Broaden your services, locations or keywords to find more opportunities."
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
    title: getRecommendedEmptyTitle(context),
    body: getRecommendedEmptyBody(context)
  };
}

function getRecommendedEmptyTitle(context = {}) {
  const companyName = context.companyName || (state.language === "is" ? "þennan prófíl" : "this profile");
  if (Number(context.strongCount || 0) > 0) {
    if (state.language === "is") return `${context.strongCount} sterkar samsvaranir eru faldar af síum.`;
    return `${context.strongCount} strong ${Number(context.strongCount) === 1 ? "match is" : "matches are"} hidden by filters.`;
  }
  if (state.language === "is") return `Engar ráðlagðar samsvaranir fyrir ${companyName} enn.`;
  return `No recommended matches for ${companyName} yet.`;
}

function getRecommendedEmptyBody(context = {}) {
  const strongCount = Number(context.strongCount || 0);
  const filteredStoredCount = Number(context.filteredStoredCount || 0);
  const availableCount = Number(context.availableCount || 0);
  if (strongCount > 0) {
    if (state.language === "is") return "Hreinsið leit/flokka/svæðissíur eða slökkvið á Aðeins vistað til að sjá sterku samsvaranirnar.";
    return "Clear search/category/location filters or turn off Saved only to see the strong matches.";
  }
  if (filteredStoredCount > 0) {
    if (state.language === "is") return `${filteredStoredCount} tækifæri eru til, en falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`;
    return `${filteredStoredCount} ${filteredStoredCount === 1 ? "opportunity is" : "opportunities are"} available, but hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`;
  }
  if (state.language === "is") return `${availableCount} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`;
  return `${availableCount} opportunities are available in the system, but none match this profile strongly enough.`;
}

function renderDashboardEmptyState(profile, filter = state.filters.label, context = {}) {
  const suggestions = getDashboardProfileSuggestions(profile);
  const copy = getDashboardEmptyCopy(filter, {
    ...context,
    companyName: profile?.companyName,
  });
  return renderDashboardEmptyStatePage({
    copy,
    suggestions,
    labels: {
      improveProfile: t("improveProfile"),
      includeNationalOpportunities: t("includeNationalOpportunities"),
      showAllStoredMatches: t("showAllStoredMatches"),
      inspectAllOpportunities: t("inspectAllOpportunities")
    },
    escapeHtml
  });
}

function renderOpportunityCard(opp) {
  const saved = state.saved.includes(opp.id);
  const deadline = getOpportunityDeadlineDisplay(opp);
  return renderOpportunityCardPage({
    opp,
    saved,
    deadline,
    sourceBadgeHtml: `<span class="source-pill source-badge">${escapeHtml(opp.source)}</span>`,
    qualityBadgeHtml: renderQualityBadge(opp),
    safetyBadgeHtml: renderSafetyBadge(opp),
    extractedBadgeHtml: renderExtractedArticleBadge(opp),
    originalLanguageBadgeHtml: isTedOpportunity(opp) ? `<span class="source-pill source-badge muted-badge">${escapeHtml(t("originalLanguage"))}</span>` : "",
    matchBadgeClass: badgeClass(opp.matchLabel),
    matchLabel: formatReportMatchLabel(opp.matchLabel),
    buyer: formatOpportunityBuyer(opp),
    location: formatOpportunityLocation(opp),
    value: formatISK(opp.estimatedValue),
    reasons: opp.matchReasons.slice(0, 3).map(formatReportReason),
    labels: {
      details: t("details"),
      saved: t("saved"),
      save: t("save"),
      ignore: t("ignore")
    },
    escapeHtml
  });
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

function formatOpportunityIntent(intent) {
  const labels = {
    confirmed_tender: "Confirmed tender",
    early_opportunity: "Early opportunity",
    market_signal: "Market signal",
    news_context: "News context",
    not_opportunity: "Not an opportunity"
  };
  return labels[normalizeOpportunityIntent(intent) || intent] || capitalize(String(intent || "market_signal").replace(/_/g, " "));
}

function getOpportunityQualityLabel(opp) {
  const intent = getOpportunityIntent(opp);
  if (intent === "news_context" || intent === "not_opportunity" || intent === "market_signal") {
    return formatOpportunityIntent(intent);
  }
  if (isVegagerdinExtractedProject(opp)) {
    return formatTenderState(getVegagerdinExtractedTenderState(opp));
  }
  return formatQualityStatus(normalizeOpportunityQualityStatus(opp.qualityStatus, opp));
}

function renderQualityBadge(opp) {
  const status = getOpportunityIntent(opp) || normalizeOpportunityQualityStatus(opp.qualityStatus, opp);
  return `<span class="source-pill source-badge quality-badge ${escapeHtml(status)}">${escapeHtml(formatReportQualityLabel(getOpportunityQualityLabel(opp)))}</span>`;
}

function renderSafetyBadge(opp) {
  if (!opp || !opp.safetyStatus) return "";
  const status = getSafetyStatus(opp);
  return `<span class="source-pill source-badge safety-badge ${escapeHtml(status)}">${escapeHtml(formatSafetyStatus(status))}</span>`;
}

function formatSafetyStatus(status) {
  const value = String(status || "").toLowerCase();
  const labels = state.language === "is"
    ? {
        auto_approved: "Sjálfkrafa samþykkt",
        needs_review: "Þarfnast yfirferðar",
        hidden: "Falið"
      }
    : {
        auto_approved: "Auto-approved",
        needs_review: "Needs review",
        hidden: "Hidden"
      };
  return labels[value] || capitalize(value.replace(/_/g, " "));
}

function formatAlertEligible(value) {
  return value
    ? (state.language === "is" ? "Hæft í tilkynningu" : "Alert eligible")
    : (state.language === "is" ? "Ekki hæft í tilkynningu" : "Not alert eligible");
}

function formatSafetyReason(reason) {
  const value = String(reason || "");
  if (state.language !== "is") return value;
  const map = {
    "Valid future deadline found": "Gildur framtíðarskilafrestur fannst",
    "Recent high-intent procurement signal": "Nýlegt merki frá sterkri útboðsheimild",
    "Strong service/work-type fit": "Sterk samsvörun við þjónustu eða verkflokk",
    "No reliable deadline was found": "Áreiðanlegur skilafrestur fannst ekki",
    "Buyer is missing or generic": "Kaupandi vantar eða er of almennur",
    "Match depends on broad or low-confidence terms": "Samsvörun byggir á breiðum eða óvissum orðum",
    "Possible service mismatch for this company profile": "Mögulegt ósamræmi við þjónustu fyrirtækisins",
    "Mentions design, consulting, supervision, or project management terms": "Inniheldur orð tengd hönnun, ráðgjöf, eftirliti eða verkefnastjórnun",
    "Tender appears already awarded or already tendered": "Útboð virðist þegar auglýst eða útboði lokið",
    "Stale or expired opportunity signal": "Gamalt eða útrunnið tækifæri",
    "Current opportunity is plausible but needs review before customer alerts": "Tækifærið gæti átt við en þarf yfirferð áður en það fer í tilkynningu",
    "Admin override includes this opportunity in customer reports": "Admin hefur samþykkt birtingu í viðskiptavinayfirlitum",
    "Excluded by customer eligibility, duplicate, stale, hidden, demo, or expired filters": "Falið vegna reglna um birtingu, afrit, aldur, prófunargögn eða útrunnið tækifæri"
  };
  return map[value] || formatReportRisk(value);
}

function renderExtractedArticleBadge(opp) {
  if (opp?.rawPayload?.extraction_method !== "vegagerdin_article_project_parser") return "";
  const region = opp.rawPayload?.region ? ` · ${opp.rawPayload.region}` : "";
  return `<span class="source-pill source-badge muted-badge">${escapeHtml(t("extractedProject"))}${escapeHtml(region)}</span>`;
}

function renderTenderStateBadge(opp) {
  if (!isVegagerdinExtractedProject(opp)) return "";
  const stateValue = getVegagerdinExtractedTenderState(opp);
  const labels = {
    tender_awarded: t("tenderAwarded"),
    awarded: t("tenderAwarded"),
    already_tendered: t("tenderAlreadyAnnounced"),
    announced: t("tenderAlreadyAnnounced"),
    upcoming_tender: t("upcomingTender"),
    project_signal: t("projectSignal")
  };
  const label = labels[stateValue] || "";
  return label ? `<span class="source-pill source-badge muted-badge">${escapeHtml(label)}</span>` : "";
}

function formatTenderState(value) {
  const labels = {
    tender_awarded: t("tenderAwarded"),
    awarded: t("tenderAwarded"),
    already_tendered: t("tenderAlreadyAnnounced"),
    announced: t("tenderAlreadyAnnounced"),
    upcoming_tender: t("upcomingTender"),
    project_signal: t("projectSignal"),
    open_or_published: t("tenderAlreadyAnnounced"),
    planned_tender: t("upcomingTender"),
    unclear: t("projectSignal")
  };
  return labels[String(value || "")] || capitalize(String(value || "").replace(/_/g, " "));
}

function renderQualityWarning(opp) {
  const intent = getOpportunityIntent(opp);
  if (intent === "news_context" || intent === "not_opportunity") {
    return `<div class="note-panel quality-warning">${escapeHtml(state.language === "is" ? "Þetta lítur út eins og frétta- eða umferðarefni, ekki tækifæri fyrir viðskiptavin." : "This looks like news or traffic context, not a customer-facing opportunity.")}</div>`;
  }
  if (normalizeOpportunityQualityStatus(opp.qualityStatus, opp) !== "needs_review") return "";
  if (isVegagerdinExtractedProject(opp)) {
    return `<div class="note-panel quality-warning">${escapeHtml(state.language === "is" ? "Útdregin verkefnavísbending — staðfestið útboðstímasetningu í heimildargrein." : "Extracted project signal — verify tender timing in the source article.")}</div>`;
  }
  return `<div class="note-panel quality-warning">${escapeHtml(state.language === "is" ? "Innflutt úr breiðum straumi — staðfestið á upprunasíðu." : "Imported from broad feed — verify source page.")}</div>`;
}

function renderOpportunityModal(opp) {
  const saved = state.saved.includes(opp.id);
  const deadline = getOpportunityDeadlineDisplay(opp);
  const requirements = Array.isArray(opp.requirements) ? opp.requirements : [];
  const matchReasons = Array.isArray(opp.matchReasons) ? opp.matchReasons : [];
  const risks = Array.isArray(opp.risks) ? opp.risks : [];
  const nextSteps = Array.isArray(opp.nextSteps) ? opp.nextSteps : [];
  const extractedDetails = [
    isVegagerdinExtractedProject(opp) ? `<p><strong>${escapeHtml(t("extraction"))}:</strong> ${escapeHtml(state.language === "is" ? "Útdregið úr grein Vegagerðarinnar" : "Extracted from Vegagerðin article")}</p>` : "",
    opp.rawPayload?.parent_article_title ? `<p><strong>${escapeHtml(t("sourceArticle"))}:</strong> ${escapeHtml(opp.rawPayload.parent_article_title)}</p>` : "",
    opp.rawPayload?.parent_url ? `<p><strong>${escapeHtml(t("parentArticle"))}:</strong> <a href="${escapeHtml(opp.rawPayload.parent_url)}" target="_blank" rel="noreferrer">${escapeHtml(t("openSourceArticle"))}</a></p>` : "",
    opp.rawPayload?.region ? `<p><strong>${escapeHtml(t("extractedRegion"))}:</strong> ${escapeHtml(opp.rawPayload.region)}</p>` : "",
    opp.rawPayload?.project_number ? `<p><strong>${escapeHtml(t("projectNumber"))}:</strong> ${escapeHtml(opp.rawPayload.project_number)}</p>` : "",
    isVegagerdinExtractedProject(opp) ? `<p><strong>${escapeHtml(t("tenderState"))}:</strong> ${escapeHtml(formatTenderState(getVegagerdinExtractedTenderState(opp)))}</p>` : ""
  ].join("");

  return renderOpportunityModalPage({
    opp,
    saved,
    deadline,
    requirements,
    matchReasons: matchReasons.length ? matchReasons.map(formatReportReason) : [],
    risks: risks.length ? risks.map(formatReportRisk) : [t("noMajorRisks")],
    safetyReasons: [
      ...(Array.isArray(opp.safetyReasons) ? opp.safetyReasons : []),
      ...(risks.length ? risks.map(formatReportRisk) : [t("noMajorRisks")])
    ].map(formatSafetyReason),
    nextSteps: nextSteps.map(formatNextStep),
    matchBadgeClass: badgeClass(opp.matchLabel),
    matchLabel: formatReportMatchLabel(opp.matchLabel),
    qualityBadgeHtml: renderQualityBadge(opp),
    safetyBadgeHtml: renderSafetyBadge(opp),
    extractedBadgeHtml: renderExtractedArticleBadge(opp),
    qualityWarningHtml: renderQualityWarning(opp),
    buyerSummary: formatOpportunityModalValue("buyer", opp.buyer),
    location: formatOpportunityLocation(opp),
    value: opp.estimatedValue ? formatISK(opp.estimatedValue) : t("notListed"),
    sourceUrl: opp.url,
    extractedDetails,
    qualityLabel: formatReportQualityLabel(getOpportunityQualityLabel(opp)),
    safetyStatusLine: opp.safetyStatus ? `<p><strong>${escapeHtml(state.language === "is" ? "Öryggisflokkun" : "Safety status")}:</strong> ${escapeHtml(formatSafetyStatus(opp.safetyStatus))} · ${escapeHtml(formatAlertEligible(opp.alertEligible))}</p>` : "",
    category: formatOpportunityModalValue("category", opp.category),
    type: formatOpportunityModalValue("type", opp.type),
    publishedDate: opp.publishedDate,
    cpvCode: opp.cpvCode,
    labels: {
      description: t("description"),
      noDescription: t("noDescription"),
      requirements: t("requirements"),
      noSpecificRequirements: t("noSpecificRequirements"),
      matchReasons: t("matchReasons"),
      noMatchReasons: t("noMatchReasons"),
      opportunityInfo: t("opportunityInfo"),
      source: t("source"),
      sourceValue: formatOpportunityModalValue("source", opp.source),
      quality: t("quality"),
      category: t("category"),
      type: t("type"),
      deadline: t("deadline"),
      deadlineLabel: formatReportRisk(deadline.label),
      published: t("published"),
      cpv: t("cpv"),
      risksToCheck: t("risksToCheck"),
      recommendedNextSteps: t("recommendedNextSteps"),
      openSourceAndConfirm: t("openSourceAndConfirm"),
      removeFromSaved: t("removeFromSaved"),
      saveOpportunity: t("saveOpportunity"),
      openSource: t("openSource"),
      markNotRelevant: t("markNotRelevant")
    },
    escapeHtml
  });
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
    ["review", "Review Queue"],
    ["trial-requests", "Trial Requests"],
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
  if (state.adminActiveTab === "review") return renderAdminReviewQueue();
  if (state.adminActiveTab === "trial-requests") return renderAdminTrialRequestsSection();
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
    ${renderAdminDailyPipelinePanel({
      escapeHtml,
      isRunning: Boolean(state.adminDailyPipelineLoading),
      result: state.adminDailyPipelineResult || null
    })}
    ${renderAdminAutomaticAiReviewPanel({
      escapeHtml,
      usageSummary: state.adminAiUsageSummary || null,
      lastResult: state.adminAutomaticAiReviewResult || null,
      isRunning: Boolean(state.adminAutomaticAiReviewLoading),
      formatAiUsageCost
    })}
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

function renderAdminReviewQueue() {
  const rows = state.adminReviewMatches || [];
  const labels = getAdminReviewLabels();
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>${escapeHtml(labels.title)}</h2>
          <p>${state.adminReviewLoading ? escapeHtml(labels.loading) : escapeHtml(labels.count(rows.length))}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${state.adminReviewError ? `<div class="admin-message is-error">${escapeHtml(state.adminReviewError)}</div>` : ""}
      ${state.adminReviewLoading && !rows.length ? `<div class="empty-card">${escapeHtml(labels.loading)}</div>` : rows.length ? `
        <div class="admin-review-list">
          ${rows.map(renderAdminReviewCard).join("")}
        </div>
      ` : `<div class="empty-card">${escapeHtml(labels.empty)}</div>`}
    </section>
  `;
}

function renderAdminTrialRequestsSection() {
  const rows = state.adminTrialRequests || [];
  const selected = getSelectedAdminTrialRequest();
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Trial Requests</h2>
          <p>${state.adminTrialRequestsLoading ? "Loading trial requests..." : `${rows.length} request${rows.length === 1 ? "" : "s"} received.`}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${state.adminTrialRequestsError ? `<div class="admin-message is-error">${escapeHtml(state.adminTrialRequestsError)}</div>` : ""}
      ${state.adminTrialRequestsLoading && !rows.length ? `<div class="empty-card">Loading trial requests...</div>` : rows.length ? `
        <div class="ops-table-wrap">
          <table class="ops-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Services</th>
                <th>Locations</th>
                <th>Status</th>
                <th>Created at</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(renderAdminTrialRequestRow).join("")}
            </tbody>
          </table>
        </div>
      ` : `<div class="empty-card">No trial requests yet.</div>`}
    </section>
    ${selected ? renderAdminTrialRequestDetail(selected) : ""}
  `;
}

function renderAdminTrialRequestRow(row) {
  const isSelected = state.selectedAdminTrialRequestId === row.id;
  return `
    <tr class="${isSelected ? "is-selected" : ""}">
      <td><strong>${escapeHtml(row.company_name || "—")}</strong></td>
      <td>${escapeHtml(row.contact_name || "—")}</td>
      <td>${escapeHtml(row.email || "—")}</td>
      <td>${escapeHtml(row.phone || "—")}</td>
      <td>${escapeHtml(row.services || "—")}</td>
      <td>${escapeHtml(row.locations || "—")}</td>
      <td>${renderTrialRequestStatus(row.status)}</td>
      <td>${escapeHtml(row.created_at ? formatDateTime(row.created_at) : "—")}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-trial-request" data-id="${escapeHtml(row.id)}">Opna</button>
      </td>
    </tr>
  `;
}

function renderAdminTrialRequestDetail(row) {
  const busy = state.adminTrialRequestActions?.[row.id];
  const converted = row.status === "converted" || Boolean(row.converted_company_id);
  return `
    <section class="ops-card admin-trial-detail-card">
      <div class="card-header">
        <div>
          <h2>${escapeHtml(row.company_name || "Trial request")}</h2>
          <p>${renderTrialRequestStatus(row.status)} · ${escapeHtml(row.created_at ? formatDateTime(row.created_at) : "—")}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="close-admin-trial-request">Close</button>
      </div>
      ${state.adminTrialCompanyError ? `<div class="admin-message is-error">${escapeHtml(state.adminTrialCompanyError)}</div>` : ""}
      ${state.adminTrialCompanyMessage ? `<div class="admin-message is-success">${escapeHtml(state.adminTrialCompanyMessage)}</div>` : ""}
      <div class="admin-trial-detail-grid">
        ${renderAdminTrialDetailField("Fyrirtæki", row.company_name)}
        ${renderAdminTrialDetailField("Tengiliður", row.contact_name)}
        ${renderAdminTrialDetailField("Netfang", row.email)}
        ${renderAdminTrialDetailField("Sími", row.phone)}
        ${renderAdminTrialDetailField("Þjónusta", row.services, true)}
        ${renderAdminTrialDetailField("Svæði", row.locations, true)}
        ${renderAdminTrialDetailField("Athugasemd", row.message, true)}
        ${renderAdminTrialDetailField("Staða", getTrialRequestStatusLabel(row.status))}
        ${renderAdminTrialDetailField("Tilkynning", getTrialRequestNotificationLabel(row), true)}
        ${renderAdminTrialDetailField("Stofnað", row.created_at ? formatDateTime(row.created_at) : "")}
      </div>
      <div class="admin-trial-actions">
        <button class="btn btn-secondary" type="button" data-action="admin-trial-request-status" data-id="${escapeHtml(row.id)}" data-status="contacted" ${busy || converted ? "disabled" : ""}>${busy === "contacted" ? "Vista..." : "Merkja haft samband"}</button>
        <button class="btn btn-ghost" type="button" data-action="admin-trial-request-status" data-id="${escapeHtml(row.id)}" data-status="rejected" ${busy || converted ? "disabled" : ""}>${busy === "rejected" ? "Vista..." : "Hafna"}</button>
        <button class="btn btn-primary" type="button" data-action="admin-start-trial-company" data-id="${escapeHtml(row.id)}" ${converted ? "disabled" : ""}>Stofna fyrirtæki</button>
        ${row.converted_company_id ? `<button class="btn btn-secondary" type="button" data-action="view-admin-company" data-id="${escapeHtml(row.converted_company_id)}">Opna fyrirtæki</button>` : ""}
      </div>
      ${state.adminTrialCompanyDraft ? renderAdminTrialCompanyForm(row) : ""}
    </section>
  `;
}

function renderAdminTrialCompanyForm(row) {
  return `
    <div class="admin-trial-company-form-wrap">
      <div class="section-heading">
        <p class="eyebrow">Company profile</p>
        <h3>Stofna fyrirtæki úr prufubeiðni</h3>
        <p>Yfirfarðu og kláraðu venjulega fyrirtækjaprófílinn áður en hann er vistaður. Enginn innskráningaraðgangur eða boð er stofnað sjálfkrafa.</p>
      </div>
      ${renderProfileFormPage({
        t,
        escapeHtml,
        capitalize,
        arrayFieldText,
        formatCustomerLocation,
        getFilterOptions,
        getProfileSuggestions,
        renderCustomDropdown,
        renderSuggestionChips,
        formId: "admin-trial-company-form",
        profileDraft: state.adminTrialCompanyDraft || buildCompanyDraftFromTrialRequest(row, () => createEmptyProfile("")),
        accountEmail: "",
        hasProfile: false,
        isSavingProfile: state.adminTrialCompanySaving,
        profileSaved: false,
        profileSaveMessage: null,
        profileSaveError: state.adminTrialCompanyError
      })}
    </div>
  `;
}

function renderAdminTrialDetailField(label, value, wide = false) {
  return `
    <div class="admin-trial-detail-field ${wide ? "is-wide" : ""}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value || "—")}</strong>
    </div>
  `;
}

function renderTrialRequestStatus(status) {
  const normalized = String(status || "new").toLowerCase();
  const className = normalized === "converted" ? "is-success" : normalized === "rejected" ? "is-danger" : normalized === "contacted" ? "is-warning" : "is-running";
  return `<span class="status-pill ${className}">${escapeHtml(getTrialRequestStatusLabel(status))}</span>`;
}

function getTrialRequestNotificationLabel(row) {
  if (row.notification_sent_at) return `Tilkynning send ${formatDateTime(row.notification_sent_at)}`;
  if (row.notification_started_at) return "Tilkynning í vinnslu";
  if (row.notification_error) return `Tilkynning mistókst: ${row.notification_error}`;
  return "Tilkynning ekki send";
}

function getAdminTrialRequestById(requestId) {
  return (state.adminTrialRequests || []).find((row) => row.id === requestId) || null;
}

function getSelectedAdminTrialRequest() {
  return getAdminTrialRequestById(state.selectedAdminTrialRequestId);
}

function getAdminReviewLabels() {
  return {
    title: "Review Queue",
    loading: "Loading review queue...",
    empty: "No uncertain matches need review.",
    count: (count) => `${count} uncertain match${count === 1 ? "" : "es"} need review.`,
    opportunity: "Opportunity",
    company: "Company",
    source: "Source",
    buyer: "Buyer",
    region: "Region",
    deadline: "Deadline",
    score: "Score",
    safety: "Safety",
    alert: "Alert",
    safetyReasons: "Safety reasons",
    matchReasons: "Match reasons",
    aiReview: "AI review",
    aiReviewButton: "AI review",
    aiReviewing: "Reviewing...",
    aiFit: "Fit",
    aiConfidence: "Confidence",
    aiSend: "Send to client",
    aiSummary: "Suggested client summary",
    aiNoReview: "No AI review saved yet.",
    approve: "Approve",
    approving: "Approving...",
    reject: "Reject",
    rejecting: "Rejecting...",
    noSource: "No source URL",
    hidden: "Hidden from reports",
    notHidden: "Not hidden from reports",
    sourceUrl: "Source URL",
  };
}

function formatAdminBuyer(opp) {
  const sourceName = opp?.source || opp?.rawPayload?.source_name || "";
  return getCleanOpportunityBuyer(opp?.buyer, sourceName, opp?.rawPayload || {}) || "Unknown buyer";
}

function formatAdminLocation(opp) {
  const sourceName = opp?.source || opp?.rawPayload?.source_name || "";
  return inferLocationFromSourceName(sourceName) || opp?.location || "Unknown";
}

function formatAdminDeadline(opp) {
  const deadlineAt = String(opp?.deadlineAt || opp?.rawPayload?.deadline_at || "").trim();
  const parsedDeadlineAt = deadlineAt.match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}):(\d{2})/);
  if (parsedDeadlineAt) return `${parsedDeadlineAt[1]} ${parsedDeadlineAt[2]}:${parsedDeadlineAt[3]}`;
  if (opp?.deadline) return formatShortDate(opp.deadline);
  return "Deadline not available in imported data — verify on source page.";
}

function formatAdminSafetyStatus(status) {
  const value = String(status || "").toLowerCase();
  const labels = {
    auto_approved: "Auto-approved",
    needs_review: "Needs review",
    hidden: "Hidden"
  };
  return labels[value] || capitalize(value.replace(/_/g, " "));
}

function formatAdminAlertEligible(value) {
  return value ? "Alert eligible" : "Not alert eligible";
}

function formatAdminReviewRequired(value) {
  return value ? "Review required" : "Review not required";
}

function formatAdminMatchLabel(label) {
  const value = String(label || "").trim();
  const labels = {
    "Strong match": "Strong match",
    "Good match": "Good match",
    "Possible match": "Possible match",
    "Weak match": "Weak match"
  };
  return labels[value] || value || "Possible match";
}

function formatAdminReportReason(reason) {
  return String(reason || "").trim();
}

function formatAdminRisk(risk) {
  return String(risk || "").trim();
}

function renderAdminReviewCard(item) {
  const opp = item.opportunity || {};
  const busy = state.adminReviewActions?.[item.id] || "";
  const aiBusy = Boolean(state.adminAiReviewActions?.[item.id]);
  const sourceUrl = getSafeExternalUrl(opp.url);
  const labels = getAdminReviewLabels();
  const safetyReasons = item.safetyReasons.length ? item.safetyReasons : ["Needs admin review"];
  const matchReasons = item.matchReasons.length ? item.matchReasons : ["Profile match"];
  return `
    <article class="admin-review-card">
      <div class="admin-review-card-top">
        <div class="admin-review-title-block">
          <span class="eyebrow">${escapeHtml(labels.opportunity)}</span>
          <h3>${escapeHtml(opp.title || "Untitled opportunity")}</h3>
          <p>${escapeHtml(labels.company)}: <strong>${escapeHtml(item.companyName)}</strong></p>
          <p>${escapeHtml(labels.source)}: <strong>${escapeHtml(opp.source || "Unknown source")}</strong></p>
          ${sourceUrl ? `<p class="admin-source-url"><span>${escapeHtml(labels.sourceUrl)}:</span> ${escapeHtml(sourceUrl)}</p>` : ""}
        </div>
        <div class="admin-review-source-action">
          ${sourceUrl ? `<a class="btn btn-secondary btn-small" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener">Open source ↗</a>` : `<span class="admin-chip">${escapeHtml(labels.noSource)}</span>`}
        </div>
      </div>

      <div class="admin-review-meta-grid">
        ${renderAdminReviewMeta(labels.buyer, formatAdminBuyer(opp))}
        ${renderAdminReviewMeta(labels.region, formatAdminLocation(opp))}
        ${renderAdminReviewMeta(labels.deadline, formatAdminDeadline(opp))}
        ${renderAdminReviewMeta(labels.score, `${formatAdminMatchLabel(item.matchLabel)} · ${Number(item.matchScore || 0)}`)}
        ${renderAdminReviewMeta(labels.safety, formatAdminSafetyStatus(item.safetyStatus))}
        ${renderAdminReviewMeta(labels.alert, `${formatAdminAlertEligible(item.alertEligible)} · ${formatAdminReviewRequired(item.reviewRequired)}`)}
      </div>

      <div class="admin-review-reasons">
        <section class="admin-review-reason-box is-warning">
          <h4>${escapeHtml(labels.safetyReasons)}</h4>
          <ul>
            ${safetyReasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}
          </ul>
        </section>
        <section class="admin-review-reason-box">
          <h4>${escapeHtml(labels.matchReasons)}</h4>
          <ul>
            ${matchReasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}
          </ul>
        </section>
      </div>

      ${renderAdminAiReviewResult(item, labels)}

      <div class="admin-review-actions">
        <span class="admin-review-hidden-state">${escapeHtml(opp.rawPayload?.hidden_from_reports === true ? labels.hidden : labels.notHidden)}</span>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" data-action="admin-ai-review-match" data-id="${escapeHtml(item.id)}" data-force="${item.aiReview ? "true" : "false"}" ${busy || aiBusy ? "disabled" : ""}>${aiBusy ? escapeHtml(labels.aiReviewing) : escapeHtml(item.aiReview ? "Re-run AI review" : labels.aiReviewButton)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="approve" data-id="${escapeHtml(item.id)}" data-company-id="${escapeHtml(item.companyId)}" ${busy || aiBusy ? "disabled" : ""}>${busy === "approve" ? escapeHtml(labels.approving) : escapeHtml(labels.approve)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="reject" data-id="${escapeHtml(item.id)}" data-company-id="${escapeHtml(item.companyId)}" ${busy || aiBusy ? "disabled" : ""}>${busy === "reject" ? escapeHtml(labels.rejecting) : escapeHtml(labels.reject)}</button>
        </div>
      </div>
    </article>
  `;
}

function renderAdminAiReviewResult(item, labels) {
  const review = item.aiReview;
  if (!review) {
    return `
      <section class="admin-ai-review-box is-empty">
        <div class="admin-ai-review-header">
          <h4>${escapeHtml(labels.aiReview)}</h4>
          <span>${escapeHtml(labels.aiNoReview)}</span>
        </div>
      </section>
    `;
  }
  return `
    <section class="admin-ai-review-box">
      <div class="admin-ai-review-header">
        <h4>${escapeHtml(labels.aiReview)}</h4>
        <span>${escapeHtml(review.model || "model not listed")} · ${review.updatedAt ? escapeHtml(formatDateTime(review.updatedAt)) : ""}</span>
      </div>
      <div class="admin-ai-review-meta">
        <span><strong>${escapeHtml(labels.aiFit)}</strong>${escapeHtml(formatAiFit(review.fit))}</span>
        <span><strong>${escapeHtml(labels.aiConfidence)}</strong>${Math.round(Number(review.confidence || 0) * 100)}%</span>
        <span><strong>${escapeHtml(labels.aiSend)}</strong>${review.sendToClient ? "Yes" : "No"}</span>
      </div>
      <p>${escapeHtml(review.reason || "")}</p>
      ${review.fitReasons.length ? `<p><strong>Fit reasons:</strong> ${review.fitReasons.map((reason) => `<span class="admin-chip">${escapeHtml(reason)}</span>`).join(" ")}</p>` : ""}
      ${review.risksOrQuestions.length ? `<p><strong>Risks/questions:</strong> ${review.risksOrQuestions.map((reason) => `<span class="admin-chip">${escapeHtml(reason)}</span>`).join(" ")}</p>` : ""}
      ${review.suggestedClientSummary ? `<p><strong>${escapeHtml(labels.aiSummary)}:</strong> ${escapeHtml(review.suggestedClientSummary)}</p>` : ""}
    </section>
  `;
}

function formatAiFit(fit) {
  const labels = {
    strong: "Strong",
    possible: "Possible",
    weak: "Weak",
    no_fit: "No fit"
  };
  return labels[String(fit || "")] || "Weak";
}

function renderAdminReviewMeta(label, value) {
  return `
    <div class="admin-review-meta-item">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value || "—")}</strong>
    </div>
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
        ${compact ? "" : `
          <label class="admin-inline-control">
            <span>Report mode</span>
            <select data-admin-report-mode>
              <option value="new_only" ${state.adminReportMode === "new_only" ? "selected" : ""}>New opportunities report</option>
              <option value="all_current" ${state.adminReportMode === "all_current" ? "selected" : ""}>Current active opportunities report</option>
            </select>
          </label>
        `}
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
  const actionState = state.adminCompanyActions?.[company.id] || "";
  const refreshing = actionState === "refresh";
  const generating = actionState === "report";
  const busy = Boolean(actionState);
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
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-company" data-id="${escapeHtml(company.id)}" ${busy ? "disabled" : ""}>View details</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-refresh-company-matches" data-id="${escapeHtml(company.id)}" ${busy ? "disabled" : ""}>${refreshing ? "Refreshing..." : "Refresh matches"}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-generate-company-report" data-id="${escapeHtml(company.id)}" ${busy ? "disabled" : ""}>${generating ? "Generating..." : "Generate report"}</button>
        </div>
      </td>
    </tr>
  `;
}

function renderAdminOpportunitiesSection(opportunities) {
  const draft = {
    ...createEmptyAdminOpportunityDraft(),
    ...(state.adminOpportunityDraft || {})
  };
  return `
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

    <form class="form-card admin-form" id="admin-opportunity-form">
      <div class="form-section">
        <h2>Add opportunity</h2>
        <div class="form-grid">
          <label>Title <input name="title" data-admin-opportunity-field="title" value="${escapeHtml(draft.title)}" required /></label>
          <label>Buyer <input name="buyer" data-admin-opportunity-field="buyer" value="${escapeHtml(draft.buyer)}" /></label>
          <label>Source name <input name="sourceName" data-admin-opportunity-field="sourceName" value="${escapeHtml(draft.sourceName)}" required /></label>
          <label>Category <input name="category" data-admin-opportunity-field="category" value="${escapeHtml(draft.category)}" /></label>
          <label>Type <input name="type" data-admin-opportunity-field="type" value="${escapeHtml(draft.type)}" /></label>
          <label>Deadline <input type="date" name="deadline" data-admin-opportunity-field="deadline" value="${escapeHtml(draft.deadline)}" /></label>
          <label>Published date <input type="date" name="published_date" data-admin-opportunity-field="published_date" value="${escapeHtml(draft.published_date)}" /></label>
          <label>Location <input name="location" data-admin-opportunity-field="location" value="${escapeHtml(draft.location)}" /></label>
          <label>Estimated value <input type="number" min="0" step="1" name="estimated_value" data-admin-opportunity-field="estimated_value" value="${escapeHtml(draft.estimated_value)}" /></label>
          <label>URL <input type="url" name="url" data-admin-opportunity-field="url" value="${escapeHtml(draft.url)}" /></label>
          <label>CPV code <input name="cpv_code" data-admin-opportunity-field="cpv_code" value="${escapeHtml(draft.cpv_code)}" /></label>
          <label>Difficulty <input name="difficulty" data-admin-opportunity-field="difficulty" value="${escapeHtml(draft.difficulty)}" /></label>
          <label>Status <input name="status" data-admin-opportunity-field="status" value="${escapeHtml(draft.status)}" /></label>
        </div>
        <label>Description <textarea name="description" data-admin-opportunity-field="description" rows="4">${escapeHtml(draft.description)}</textarea></label>
        <label>Requirements comma-separated <textarea name="requirements" data-admin-opportunity-field="requirements" rows="3">${escapeHtml(draft.requirements)}</textarea></label>
        <label>Keywords comma-separated <textarea name="keywords" data-admin-opportunity-field="keywords" rows="3">${escapeHtml(draft.keywords)}</textarea></label>
      </div>

      <div class="form-actions">
        <button class="btn btn-primary btn-large" type="submit" ${state.adminSubmitting ? "disabled" : ""}>
          ${state.adminSubmitting ? "Saving..." : "Add opportunity"}
        </button>
      </div>
    </form>

    ${renderMissingDeadlineDebugSection()}
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
              <p><strong>Contact name:</strong> ${escapeHtml(company.contactName || "Not listed")}</p>
              <p><strong>Phone:</strong> ${escapeHtml(company.phone || "Not listed")}</p>
              <p><strong>Kennitala:</strong> ${escapeHtml(company.kennitala || "Not listed")}</p>
              <p><strong>Address:</strong> ${escapeHtml(company.address || "Not listed")}</p>
              <p><strong>Website:</strong> ${safeWebsite ? `<a href="${escapeHtml(safeWebsite)}" target="_blank" rel="noreferrer">${escapeHtml(company.website)}</a>` : escapeHtml(company.website || "Not listed")}</p>
              <p><strong>Industry:</strong> ${escapeHtml(company.industry || "Unknown")}</p>
              <p><strong>Created:</strong> ${escapeHtml(formatDateTime(company.createdAt))}</p>

              <h3>Billing</h3>
              <p><strong>Selected plan:</strong> ${escapeHtml(company.selectedPlan || company.plan || "Not selected")}</p>
              <p><strong>Billing status:</strong> ${escapeHtml(company.billingStatus || "Not set")}</p>
              <p><strong>Billing email:</strong> ${escapeHtml(company.billingEmail || company.contactEmail || "Not listed")}</p>
              <p><strong>Trial started:</strong> ${company.trialStartedAt ? escapeHtml(formatDateTime(company.trialStartedAt)) : "Not set"}</p>
              <p><strong>Trial ends:</strong> ${company.trialEndsAt ? escapeHtml(formatDateTime(company.trialEndsAt)) : "Not set"}</p>

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

            ${renderAdminCompanyAccessPanel(company, {
              escapeHtml,
              formatDateTime,
              inviteEmail: getAdminCompanyInviteEmail(company),
              inviteLink: state.adminCompanyInviteLinks?.[company.id] || "",
              inviteDebug: state.adminCompanyInviteDebug?.[company.id] || null,
              actionState: state.adminCompanyAccessActions?.[company.id] || ""
            })}

            ${renderAdminMatchingProfilePanel(company, {
              escapeHtml,
              actionState: actionState
            })}

            <section class="side-panel">
              <h3>Latest matches</h3>
              ${renderAdminCompanyMatchList(company, { escapeHtml, renderMatchDecisionControls })}
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

            ${renderAdminCompanyAiReviewPanel(company, {
              escapeHtml,
              formatDateTime,
              actionState: state.adminCompanyAiReviewActions?.[company.id] ? "running" : "",
              filter: state.adminCompanyAiReviewFilter,
              lastResult: state.adminCompanyAiReviewResults?.[company.id] || null,
              usageSummary: state.adminAiUsageSummary || null,
              formatAiUsageCost
            })}
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
  const isUpdating = state.adminUpdatingId === opp.id;
  const intent = getOpportunityIntent(opp);
  const deadline = getOpportunityDeadlineDisplay(opp);
  const hiddenFromReports = opp.rawPayload?.hidden_from_reports === true ||
    ["hidden", "noise", "deleted"].includes(String(opp.rawPayload?.admin_report_status || "").toLowerCase());
  const duplicateReason = isSecondaryDuplicateOpportunity(opp)
    ? (opp.rawPayload?.duplicate_reason || `Duplicate of ${opp.rawPayload?.canonical_opportunity_id || opp.rawPayload?.duplicate_of || "canonical opportunity"}`)
    : "";
  const staleInfo = getStaleOpportunityInfo({
    title: opp.title,
    description: opp.description,
    content: `${opp.category || ""} ${opp.source || ""} ${Array.isArray(opp.keywords) ? opp.keywords.join(" ") : ""}`,
    publishedDate: opp.publishedDate,
    deadline: opp.deadline,
    sourceName: opp.source,
    sourceType: opp.sourceType,
    connectorType: opp.rawPayload?.connector_type,
  });
  const staleReason = opp.rawPayload?.stale_reason || (staleInfo.isStale ? staleInfo.reason : "");
  const adminSourceUrl = getSafeExternalUrl(opp.url || opp.rawPayload?.source_url || "");
  return `
    <div class="admin-row">
      <div>
        <h3>${escapeHtml(opp.title)}</h3>
        <div class="admin-opportunity-review-meta">
          ${renderAdminOpportunityChangeBadge(opp)}
          <span><strong>Bætt við:</strong> ${escapeHtml(formatAdminOpportunityDateTime(opp.createdAt))}</span>
          <span><strong>Síðast uppfært:</strong> ${escapeHtml(formatAdminOpportunityDateTime(opp.updatedAt))}</span>
          <span><strong>Source:</strong> ${escapeHtml(opp.source || "Unknown source")}</span>
          <span><strong>Deadline:</strong> ${escapeHtml(deadline.label || "Not listed")}</span>
          <span><strong>External ID:</strong> ${escapeHtml(opp.externalId || "Not listed")}</span>
        </div>
        <p><strong>Source:</strong> ${escapeHtml(opp.source || "Unknown source")} · <strong>Buyer:</strong> ${escapeHtml(formatAdminBuyer(opp))} · <strong>Region:</strong> ${escapeHtml(formatAdminLocation(opp))} · <strong>Status:</strong> ${escapeHtml(opp.status)}</p>
        <p><strong>Source URL:</strong> ${adminSourceUrl ? `<a href="${escapeHtml(adminSourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(adminSourceUrl)}</a>` : "Not listed"} · <strong>External ID:</strong> ${escapeHtml(opp.externalId || "Not listed")}</p>
        <p>Quality: ${escapeHtml(getOpportunityQualityLabel(opp))} · Intent: ${escapeHtml(formatOpportunityIntent(intent))}${hiddenFromReports ? " · Hidden from reports" : ""}${duplicateReason ? ` · Duplicate: ${escapeHtml(duplicateReason)}` : ""}${staleReason ? ` · Stale / expired: ${escapeHtml(staleReason)}` : ""}</p>
        <p>Debug: hidden_from_reports=${opp.rawPayload?.hidden_from_reports === true ? "true" : "false"} · admin_report_status=${escapeHtml(opp.rawPayload?.admin_report_status || "none")} · stale_status=${escapeHtml(opp.rawPayload?.stale_status || "none")}</p>
        ${renderAdminOpportunityMatchDebug(opp)}
      </div>
      <div class="admin-row-actions">
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="confirmed_tender" data-id="${escapeHtml(opp.id)}" ${isUpdating ? "disabled" : ""}>Confirmed tender</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="early_opportunity" data-id="${escapeHtml(opp.id)}" ${isUpdating ? "disabled" : ""}>Early opportunity</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="include" data-id="${escapeHtml(opp.id)}" ${isUpdating ? "disabled" : ""}>Include in reports</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="noise" data-id="${escapeHtml(opp.id)}" ${isUpdating ? "disabled" : ""}>News/noise</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="hide" data-id="${escapeHtml(opp.id)}" ${isUpdating ? "disabled" : ""}>Hide from reports</button>
        <button
          class="btn btn-ghost btn-small"
          data-action="delete-opportunity"
          data-id="${escapeHtml(opp.id)}"
          ${state.adminDeletingId === opp.id ? "disabled" : ""}
        >
          ${state.adminDeletingId === opp.id ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  `;
}

function renderAdminOpportunityChangeBadge(opp) {
  const status = getAdminOpportunityChangeStatus(opp);
  if (!status) return "";
  const className = status === "new" ? "is-success" : "is-warning";
  const label = status === "new" ? "Nýtt" : "Uppfært";
  return `<span class="status-pill ${className}">${escapeHtml(label)}</span>`;
}

function getAdminOpportunityChangeStatus(opp) {
  const created = getDateTimeValue(opp.createdAt);
  const updated = getDateTimeValue(opp.updatedAt);
  if (!Number.isFinite(created)) return "";
  if (!Number.isFinite(updated)) return "new";
  const differenceMs = Math.abs(updated - created);
  if (differenceMs <= 2 * 60 * 1000) return "new";
  if (updated > created) return "updated";
  return "";
}

function formatAdminOpportunityDateTime(value) {
  return value ? formatDateTime(value) : "Not listed";
}

function renderAdminOpportunityMatchDebug(opp) {
  const companyId = state.adminOpportunityFilters?.debugCompanyId || "";
  if (!companyId) return "";
  const company = (state.adminCompanies || []).find((item) => item.id === companyId);
  if (!company) return `<div class="admin-debug-panel">Match debug: selected company not loaded.</div>`;
  const match = calculateMatch(company, opp);
  const excludedReasons = getAdminOpportunityExclusionReasons(opp, match);
  const serviceText = cleanStringArray(company.services).join(", ") || "No services";
  const keywordText = cleanStringArray(company.includeKeywords).join(", ") || "No include keywords";
  const matchedTerms = getAdminDebugMatchedTerms(company, opp);
  const missingTerms = getAdminDebugMissingTerms(company, opp);
  const scoreContributions = getAdminDebugScoreContributions(company, opp, match);
  const safety = classifyMatchSafety(company, match);
  return `
    <div class="admin-debug-panel">
      <p><strong>Match debug for ${escapeHtml(company.companyName)}:</strong> score ${Number(match.matchScore || 0)} · ${escapeHtml(formatAdminMatchLabel(match.matchLabel))}</p>
      <p><strong>Services:</strong> ${escapeHtml(serviceText)}</p>
      <p><strong>Keywords:</strong> ${escapeHtml(keywordText)}</p>
      <p><strong>Matched terms:</strong> ${matchedTerms.length ? matchedTerms.map((term) => `<span class="admin-chip">${escapeHtml(term)}</span>`).join(" ") : "None"}</p>
      <p><strong>Missing profile terms:</strong> ${missingTerms.length ? missingTerms.map((term) => `<span class="admin-chip">${escapeHtml(term)}</span>`).join(" ") : "None"}</p>
      <p><strong>Score contribution:</strong> ${scoreContributions.map((item) => `<span class="admin-chip">${escapeHtml(item)}</span>`).join(" ")}</p>
      <p><strong>Matched terms/reasons:</strong> ${(match.matchReasons || []).map((reason) => `<span class="admin-chip">${escapeHtml(formatAdminReportReason(reason))}</span>`).join(" ") || "None"}</p>
      <p><strong>Risks:</strong> ${(match.risks || []).map((risk) => `<span class="admin-chip">${escapeHtml(formatAdminRisk(risk))}</span>`).join(" ") || "None"}</p>
      <p><strong>Safety:</strong> <span class="admin-chip">${escapeHtml(formatAdminSafetyStatus(safety.safetyStatus))}</span> <span class="admin-chip">${escapeHtml(formatAdminAlertEligible(safety.alertEligible))}</span> ${(safety.safetyReasons || []).map((reason) => `<span class="admin-chip">${escapeHtml(reason)}</span>`).join(" ")}</p>
      <p><strong>Excluded by:</strong> ${excludedReasons.length ? excludedReasons.map((reason) => `<span class="admin-chip">${escapeHtml(reason)}</span>`).join(" ") : "<span class=\"admin-chip\">Not excluded by local dashboard/report filters</span>"}</p>
    </div>
  `;
}

function getAdminDebugMatchedTerms(company, opp) {
  const text = opportunityText(opp);
  return sortMatchTermsBySpecificity(uniqueStrings([
    ...cleanStringArray(company.services).filter((term) => textIncludes(text, term)),
    ...cleanStringArray(company.includeKeywords).filter((term) => textIncludes(text, term)),
    ...getStrongCivilTermsInText(text),
    ...(hasExplicitWinterService(company) ? getOptionalWinterTermsInText(text) : []),
  ]));
}

function getAdminDebugMissingTerms(company, opp) {
  const text = opportunityText(opp);
  return sortMatchTermsBySpecificity(uniqueStrings([
    ...cleanStringArray(company.services),
    ...cleanStringArray(company.includeKeywords),
  ].filter((term) => term && !textIncludes(text, term)))).slice(0, 12);
}

function getAdminDebugScoreContributions(company, opp, match) {
  const items = [];
  const serviceCount = (match.matchReasons || []).filter((reason) => /^Mentions your service:/i.test(reason)).length;
  const keywordCount = (match.matchReasons || []).filter((reason) => /^Contains your keyword:/i.test(reason)).length;
  if (categoryMatches(company, opp)) items.push("+35 industry/category");
  if (serviceCount) items.push(`+${Math.min(35, serviceCount * 10)} services`);
  if (keywordCount) items.push(`+${Math.min(25, keywordCount * 8)} keywords`);
  const locationCategory = getLocationMatchCategory(company, opp);
  if (locationCategory === "local_match") items.push("+22 local");
  else if (locationCategory === "national_match") items.push("+16 national");
  else if (locationCategory === "remote_match") items.push("+14 remote");
  else if (locationCategory === "outside_area_possible") items.push("+4 travel possible");
  else items.push("-8 low-confidence location");
  if (opp.deadline && daysUntilDeadline(opp.deadline) >= 0 && daysUntilDeadline(opp.deadline) <= 30) items.push("+8 closing soon");
  if ((match.risks || []).some((risk) => /broad construction/i.test(risk))) items.push("capped broad fit");
  if ((match.risks || []).some((risk) => /winter|snow/i.test(risk))) items.push("capped winter fit");
  if ((match.risks || []).some((risk) => /indoor|finishing/i.test(risk))) items.push("downgraded indoor mismatch");
  return items.length ? items : ["No positive score contribution"];
}

function getAdminOpportunityExclusionReasons(opp, match) {
  const reasons = [];
  if (Number(match.matchScore || 0) < 50) reasons.push(`score_below_50 (${Number(match.matchScore || 0)})`);
  if (!isCustomerMatchEligibleOpportunity(opp)) reasons.push("customer_match_ineligible");
  if (!isDashboardVisibleOpportunity(opp)) reasons.push("dashboard_not_visible");
  if (getSafetyStatus(opp) === "hidden") reasons.push("safety_status_hidden");
  if (isNeedsReviewWrongTypeForProfile(state.adminCompanies?.find((item) => item.id === state.adminOpportunityFilters?.debugCompanyId) || {}, opp)) reasons.push("needs_review_wrong_type_for_company");
  if (isDesignConsultingOnlyForProfile(state.adminCompanies?.find((item) => item.id === state.adminOpportunityFilters?.debugCompanyId) || {}, opp)) reasons.push("design_consulting_or_supervision_only");
  if (opp.rawPayload?.hidden_from_reports === true) reasons.push("hidden_from_reports");
  if (isSecondaryDuplicateOpportunity(opp)) reasons.push("duplicate_secondary");
  if (isStaleCustomerOpportunity(opp)) reasons.push("stale_or_expired");
  if (isDemoTestOpportunity(opp)) reasons.push("demo_or_test");
  return reasons;
}

function renderReport() {
  if (!state.user) return requireAuthPage();

  if (!state.profile) {
    return requireProfilePage(
      t("setupCompanyFirst"),
      t("reportNeedsProfile")
    );
  }

  const profile = state.profile;
  const matches = getReportMatches();
  const report = buildReportContent(profile, matches);
  const selectedReport = state.reports.find((item) => item.id === state.selectedReportId);
  const archiveStatus = state.reportArchiveLoading
    ? t("loadingSavedReports")
    : state.language === "is" ? `${state.reports.length} vistuð yfirlit.` : `${state.reports.length} saved report${state.reports.length === 1 ? "" : "s"}.`;
  const archiveContent = state.reportArchiveLoading
    ? `<div class="empty-card">${escapeHtml(t("loadingSavedReports"))}</div>`
    : state.reportsLoadError
      ? `<div class="admin-message is-error">Failed to load reports. ${escapeHtml(state.reportsLoadError)}</div>`
      : state.reportsLoaded && state.reports.length === 0
        ? `<div class="empty-card">${escapeHtml(t("noSavedReports"))}</div>`
        : state.reports.map(renderReportArchiveRow).join("");

  return renderShell(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${escapeHtml(t("weeklyReport"))}</p>
        <h1>${escapeHtml(t("reportTitle"))}</h1>
        <p>${escapeHtml(profile.companyName || "Your company")} · ${escapeHtml(formatReportDateRange(report.periodStart, report.periodEnd))}</p>
        <p class="muted-copy">${escapeHtml(state.language === "is" ? "Sýnir öll núverandi viðeigandi tækifæri, ekki aðeins ný frá síðasta vistaða yfirliti." : "Showing all current eligible matches, not only new items since the last saved report.")}</p>
      </div>
      <div class="dashboard-actions">
        <button class="btn btn-primary" data-action="save-report" ${state.reportSaveLoading ? "disabled" : ""}>
          ${state.reportSaveLoading ? escapeHtml(t("savingReport")) : escapeHtml(t("saveReport"))}
        </button>
        <button class="btn btn-secondary" data-action="download-report-pdf">${escapeHtml(t("downloadPdf"))}</button>
        <button class="btn btn-secondary" data-action="copy-report">${escapeHtml(t("copyReport"))}</button>
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
          <p class="eyebrow">${escapeHtml(t("reportArchive"))}</p>
          <h2>${escapeHtml(t("savedReports"))}</h2>
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
  const companyName = state.profile?.companyName || report.companies?.company_name || "Company";
  const created = state.language === "is" ? formatCustomerReportDate(report.created_at) : formatShortDate(report.created_at);
  const itemLabel = state.language === "is"
    ? `${itemCount} ${itemCount === 1 ? "tækifæri" : "tækifæri"}`
    : `${itemCount} item${itemCount === 1 ? "" : "s"}`;
  return renderReportArchiveRowPage({
    report,
    title: getCustomerReportTitle(report, companyName),
    created,
    itemLabel,
    statusLabel: formatReportArchiveStatus(report.status),
    hideLabel: state.language === "is" ? "Fela yfirlit" : "Hide report",
    viewLabel: t("viewReport"),
    escapeHtml
  });
}

function formatReportArchiveStatus(status) {
  const value = String(status || "draft");
  if (state.language === "is") {
    const map = {
      generated_all_current: "Heildaryfirlit",
      generated_new_only: "Ný tækifæri",
      draft: "Vistað yfirlit"
    };
    return map[value] || value;
  }
  const map = {
    generated_all_current: "All current",
    generated_new_only: "New opportunities",
    draft: "Saved report"
  };
  return map[value] || value;
}

function renderReportPreview(report, options = {}) {
  return renderReportPreviewPage({
    report,
    options,
    companyName: options.companyName || state.profile?.companyName || "Company",
    dateRange: formatReportDateRange(report.periodStart, report.periodEnd),
    generatedByLabel: t("generatedBy"),
    reportTitleLabel: t("reportTitle"),
    closeLabel: t("closeReport"),
    escapeHtml
  });
}

function renderSavedReportPreview(savedReport, profile, options = {}) {
  const periodStart = savedReport.period_start || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const periodEnd = savedReport.period_end || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const companyName = profile.companyName || savedReport.companies?.company_name || "Company";
  const detailedMatches = getSavedReportItemMatches(savedReport);
  const htmlContent = detailedMatches.length
    ? buildSavedReportItemsHtml(detailedMatches)
    : normalizeSavedReportHtml(savedReport);
  const textContent = detailedMatches.length
    ? generateSavedReportText(savedReport, companyName, detailedMatches)
    : localizeLegacyReportText(savedReport.text_content || "");
  return renderReportPreview({
    title: getCustomerReportTitle(savedReport, companyName),
    periodStart,
    periodEnd,
    htmlContent,
    textContent
  }, {
    companyName,
    closeButton: options.closeButton !== undefined ? options.closeButton : true,
    includeTextArea: options.includeTextArea !== undefined ? options.includeTextArea : false,
    id: options.id || ""
  });
}

function normalizeSavedReportHtml(savedReport) {
  if (savedReport.html_content && savedReport.html_content.includes("report-cover")) {
    return localizeLegacyReportHtml(sanitizeReportHtml(savedReport.html_content));
  }

  const periodStart = savedReport.period_start || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const periodEnd = savedReport.period_end || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const fallbackContent = savedReport.html_content
    ? localizeLegacyReportHtml(sanitizeReportHtml(savedReport.html_content))
    : `<pre>${escapeHtml(savedReport.text_content || "Ekkert efni var vistað fyrir þetta yfirlit.")}</pre>`;
  return `
    <div class="report-cover">
      <div class="report-kicker">Útbúið af VerkRadar</div>
      <p class="eyebrow">Vistað yfirlit</p>
      <h2>${escapeHtml(savedReport.title || "Vistað yfirlit")}</h2>
      <p>${escapeHtml(formatReportDateRange(periodStart, periodEnd))}</p>
      <p>${escapeHtml(savedReport.summary || "Þetta eldra vistaða yfirlit er birt í nýju skýrslusniði.")}</p>
    </div>
    <div class="report-legacy-content">
      ${fallbackContent}
    </div>
  `;
}

function localizeLegacyReportHtml(html) {
  return localizeLegacyReportContent(html, state.language);
}

function localizeLegacyReportText(text) {
  return localizeLegacyReportContent(text, state.language);
}

function getCustomerReportTitle(report, companyName) {
  const cleanCompany = String(companyName || report?.companies?.company_name || "Company").trim();
  return t("reportForCompany", { company: cleanCompany });
}

function getSavedReportItemMatches(savedReport) {
  const items = Array.isArray(savedReport?.report_items) ? [...savedReport.report_items] : [];
  return items
    .sort((a, b) => Number(a.sort_order || 0) - Number(b.sort_order || 0))
    .map((item) => {
      if (!item.opportunities) return null;
      const opp = mapSupabaseOpportunity(item.opportunities);
      return {
        ...opp,
        matchScore: Number(item.match_score || 0),
        matchLabel: getMatchLabel(Number(item.match_score || 0)),
        matchReasons: sanitizeMatchReasons(opp, Array.isArray(item.match_reasons) ? item.match_reasons : []),
        risks: Array.isArray(item.risks) && item.risks.length
          ? item.risks
          : (Array.isArray(opp.rawPayload?.risks) ? opp.rawPayload.risks : []),
        nextSteps: []
      };
    })
    .filter(Boolean);
}

function buildSavedReportItemsHtml(matches) {
  const sections = getSavedReportSections(matches);
  return `
    ${sections.confirmed.length ? renderReportOpportunitySection(getReportUiLabel("openActiveTitle", state.language), getReportUiLabel("openActiveDescription", state.language), sections.confirmed) : ""}
    ${sections.possible.length ? renderReportOpportunitySection(getReportUiLabel("possibleTitle", state.language), getReportUiLabel("possibleDescription", state.language), sections.possible) : ""}
    ${sections.early.length ? renderReportOpportunitySection(getReportUiLabel("earlyTitle", state.language), getReportUiLabel("earlyDescription", state.language), sections.early) : ""}
    <p class="report-footer-note">${escapeHtml(t("reportFooter"))}</p>
  `;
}

function getSavedReportSections(matches) {
  const sections = {
    confirmed: [],
    possible: [],
    early: [],
    review: []
  };

  matches.forEach((opp) => {
    const placement = getReportOpportunityPlacement(opp);
    if (placement === "confirmed") sections.confirmed.push(opp);
    else if (placement === "possible") sections.possible.push(opp);
    else if (placement === "early") sections.early.push(opp);
    else if (placement !== "excluded") sections.review.push(opp);
  });

  return sections;
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

function getReportMatches(mode = "all_current", previouslyReportedIds = new Set()) {
  return buildCurrentReportMatches({ mode, previouslyReportedIds });
}

function buildCurrentReportMatches({ mode = "all_current", previouslyReportedIds = new Set() } = {}) {
  const matches = getMatchedOpportunities()
    .filter((opp) => opp.matchScore >= 50)
    .filter((opp) => isCustomerReportModeEligible(opp, "all_current"));
  const modeMatches = mode === "new_only"
    ? matches.filter((opp) => !previouslyReportedIds.has(opp.id))
    : matches;
  return sortAiReportMatches(modeMatches).slice(0, 8);
}

function buildReportContent(profile, matches) {
  const now = new Date();
  const periodEnd = now.toISOString().slice(0, 10);
  const start = new Date(now);
  start.setDate(start.getDate() - 7);
  const periodStart = start.toISOString().slice(0, 10);
  const title = t("reportForCompany", { company: profile.companyName });
  const sections = getReportSections(matches);
  const coreCount = sections.confirmed.length + sections.possible.length + sections.early.length;
  const summary = state.language === "is"
    ? `${coreCount} viðeigandi útboðs- eða verðfyrirspurnaratriði fundust fyrir ${profile.companyName}.`
    : `${coreCount} relevant tender/quote-request ${coreCount === 1 ? "item" : "items"} found for ${profile.companyName}.`;
  const textContent = generateWeeklyReport(profile, matches);
  const htmlContent = `
    <div class="report-cover">
      <div class="report-kicker">${escapeHtml(t("generatedBy"))}</div>
      <p class="eyebrow">${escapeHtml(t("reportTitle"))}</p>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(formatReportDateRange(periodStart, periodEnd))}</p>
      <p>${escapeHtml(summary)} ${matches[0] ? escapeHtml(state.language === "is" ? `Sterkasta sýnilega atriðið er ${matches[0].title}.` : `The strongest visible item is ${matches[0].title}.`) : escapeHtml(state.language === "is" ? "Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil." : "No strict report-ready tenders or quote requests were found for this period.")}</p>
    </div>

    <div class="report-summary-grid">
      ${renderReportSummaryCard(getReportUiLabel("openActiveTitle", state.language), sections.confirmed.length)}
      ${renderReportSummaryCard(getReportUiLabel("possibleTitle", state.language), sections.possible.length)}
    </div>

    ${renderReportOpportunitySection(getReportUiLabel("openActiveTitle", state.language), getReportUiLabel("openActiveDescription", state.language), sections.confirmed)}
    ${sections.possible.length ? renderReportOpportunitySection(getReportUiLabel("possibleTitle", state.language), getReportUiLabel("possibleDescription", state.language), sections.possible) : ""}
    ${sections.early.length ? renderReportOpportunitySection(getReportUiLabel("earlyTitle", state.language), getReportUiLabel("earlyDescription", state.language), sections.early) : ""}

    <p class="report-footer-note">${escapeHtml(t("reportFooter"))}</p>
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
  return `${formatCustomerReportDate(start)} – ${formatCustomerReportDate(end)}`;
}

function formatCustomerReportDate(value) {
  if (!value) return "Engin dagsetning";
  const date = new Date(`${String(value).slice(0, 10)}T00:00:00`);
  if (Number.isNaN(date.getTime())) return String(value);
  if (state.language === "en") {
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    }).format(date);
  }
  const months = [
    "janúar",
    "febrúar",
    "mars",
    "apríl",
    "maí",
    "júní",
    "júlí",
    "ágúst",
    "september",
    "október",
    "nóvember",
    "desember"
  ];
  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function getReportSections(matches) {
  const buckets = {
    confirmed: [],
    possible: [],
    early: [],
  };
  const seen = new Set();

  const aiRankedMatches = sortAiReportMatches(matches);
  const orderedMatches = aiRankedMatches.length ? aiRankedMatches : sortCustomerReportMatches(matches);
  orderedMatches.forEach((opp) => {
    const placement = getReportOpportunityPlacement(opp);
    if (placement === "excluded") return;
    if (seen.has(opp.id)) return;
    seen.add(opp.id);

    if (placement === "confirmed") buckets.confirmed.push(opp);
    else if (placement === "possible") buckets.possible.push(opp);
    else if (placement === "early") buckets.early.push(opp);
  });

  const mainBudget = 8;
  let remainingMain = mainBudget;
  for (const key of ["confirmed", "possible", "early"]) {
    const kept = buckets[key].slice(0, remainingMain);
    buckets[key] = kept;
    remainingMain = Math.max(0, remainingMain - kept.length);
  }

  return buckets;
}

function getReportOpportunityPlacement(opp) {
  const aiPlacement = getAiReportPlacement(opp);
  if (aiPlacement !== "excluded" || opp?.aiReviewFit || opp?.ai_review_fit) return aiPlacement;
  if (!isStrictCustomerReportEligible(opp)) return "excluded";
  if (hasFutureDeadline(opp)) return "confirmed";
  const intent = getOpportunityIntent(opp);
  if (intent === "confirmed_tender") return "confirmed";
  if (intent === "early_opportunity") return "early";
  const quality = normalizeOpportunityQualityStatus(opp.qualityStatus, opp);
  if (quality === "confirmed_tender") return "confirmed";
  if (quality === "early_signal") return "early";
  return "excluded";
}

function isReportEligibleOpportunity(opp) {
  return isStrictCustomerReportEligible(opp);
}

function isCustomerReportModeEligible(opp, mode = "all_current") {
  if (!isStrictCustomerReportEligible(opp)) return false;
  if (mode === "new_only") {
    return getSafetyStatus(opp) === "auto_approved" && opp.alertEligible !== false;
  }
  return getSafetyStatus(opp) !== "hidden";
}

function isStrictCustomerReportEligible(opp) {
  if (!opp || isDemoTestOpportunity(opp)) return false;
  if (getSafetyStatus(opp) === "hidden") return false;
  if (!isDashboardVisibleOpportunity(opp)) return false;
  if (isCustomerReportExcludedIntent(opp)) return false;
  if (isAlreadyAwardedOrTenderedReportItem(opp)) return false;
  if (isDesignConsultingOnlyForCurrentProfile(opp)) return false;
  if (isNeedsReviewWrongTypeForCurrentProfile(opp)) return false;
  if (containsTitleNewsIntent(opp.title || "") && !hasOpenTenderOrQuoteIntent(opp)) return false;

  const intent = getOpportunityIntent(opp);
  if (intent === "confirmed_tender") return hasOpenTenderOrQuoteIntent(opp) || isProcurementSource(opp);
  if (intent === "early_opportunity") return hasUpcomingTenderIntent(opp);

  const quality = normalizeOpportunityQualityStatus(opp.qualityStatus, opp);
  if (quality === "confirmed_tender") return hasOpenTenderOrQuoteIntent(opp) || isProcurementSource(opp);
  if (quality === "early_signal") return hasUpcomingTenderIntent(opp);
  return false;
}

function isCustomerReportExcludedIntent(opp) {
  const payload = opp?.rawPayload || {};
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();
  if (adminStatus === "include") return false;
  if (payload.hidden_from_reports === true) return true;
  if (["hidden", "hide", "noise", "deleted"].includes(adminStatus)) return true;
  if (isSecondaryDuplicateOpportunity(opp)) return true;
  if (isStaleCustomerOpportunity(opp)) return true;
  const intent = getOpportunityIntent(opp);
  return intent === "news_context" || intent === "not_opportunity";
}

function isSecondaryDuplicateOpportunity(opp = {}) {
  const payload = opp.rawPayload || {};
  const canonicalId = String(payload.canonical_opportunity_id || "");
  return payload.is_duplicate === true ||
    Boolean(payload.duplicate_of) ||
    (Boolean(canonicalId) && Boolean(opp.id) && canonicalId !== String(opp.id));
}

function sortCustomerReportMatches(matches) {
  return [...matches].sort((a, b) => {
    const placementDiff = getStrictReportRank(a) - getStrictReportRank(b);
    if (placementDiff) return placementDiff;
    const procurementDiff = Number(isProcurementSource(b)) - Number(isProcurementSource(a));
    if (procurementDiff) return procurementDiff;
    const intentDiff = Number(hasOpenTenderOrQuoteIntent(b)) - Number(hasOpenTenderOrQuoteIntent(a));
    if (intentDiff) return intentDiff;
    return b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline);
  });
}

function getStrictReportRank(opp) {
  if (isAlreadyAwardedOrTenderedReportItem(opp)) return 99;
  const intent = getOpportunityIntent(opp);
  if (intent === "confirmed_tender") return 0;
  if (intent === "early_opportunity") return 1;
  return 10;
}

function isAlreadyAwardedOrTenderedReportItem(opp) {
  const tenderState = isVegagerdinExtractedProject(opp) ? getVegagerdinExtractedTenderState(opp) : String(opp?.rawPayload?.tender_state || "").toLowerCase();
  if (["tender_awarded", "awarded", "already_tendered"].includes(tenderState)) return true;
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opp), [
    "lægstbjóðandi",
    "laegstbjodandi",
    "samningur gerður",
    "samningur gerdur",
    "samningur var",
    "samið var",
    "samid var",
    "útboð hefur farið fram",
    "utbod hefur farid fram",
    "útboð var auglýst",
    "utbod var auglyst",
  ]);
}

function hasOpenTenderOrQuoteIntent(opp) {
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opp), [
    "útboð",
    "utbod",
    "útboðsauglýsing",
    "utbodsauglysing",
    "tilboð",
    "tilbod",
    "tilboðum",
    "tilbodum",
    "óskað eftir tilboðum",
    "oskad eftir tilbodum",
    "verðfyrirspurn",
    "verdfyrirspurn",
    "forval",
    "skilafrestur",
    "útboðsgögn",
    "utbodsgogn",
    "quote request",
    "request for quote",
    "tender",
    "procurement",
  ]);
}

function hasUpcomingTenderIntent(opp) {
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opp), [
    "senn í útboð",
    "senn i utbod",
    "áætlað útboð",
    "aaetlad utbod",
    "áætlað er að bjóða út",
    "aaetlad er ad bjoda ut",
    "fyrirhugað útboð",
    "fyrirhugad utbod",
  ]);
}

function isProcurementSource(opp) {
  const source = normalizeLocationText(opp?.source || "");
  return [
    "rikiskaup",
    "ríkiskaup",
    "utbodsvefur",
    "útboðsvefur",
    "ted",
    "tenders electronic daily",
    "procurement",
    "tender portal",
  ].some((trusted) => source.includes(normalizeLocationText(trusted)));
}

function isDesignConsultingOnlyForCurrentProfile(opp) {
  return isDesignConsultingOnlyForProfile(state.profile || {}, opp);
}

function isNeedsReviewWrongTypeForCurrentProfile(opp) {
  return isNeedsReviewWrongTypeForProfile(state.profile || {}, opp);
}

function isNeedsReviewWrongTypeForProfile(profile, opp) {
  if (getSafetyStatus(opp) !== "needs_review") return false;
  const reasonText = [
    ...(Array.isArray(opp?.safetyReasons) ? opp.safetyReasons : []),
    ...(Array.isArray(opp?.risks) ? opp.risks : []),
    ...(Array.isArray(opp?.rawPayload?.safety_reasons) ? opp.rawPayload.safety_reasons : []),
    ...(Array.isArray(opp?.rawPayload?.risks) ? opp.rawPayload.risks : []),
  ].filter(Boolean).join(" ");
  if (!containsReviewOnlyTerms(reasonText)) return false;
  return !profileExplicitlyAllowsReviewOnlyWork(profile);
}

function isDesignConsultingOnlyForProfile(profile, opp) {
  const text = getOpportunityQualityText(opp);
  const hasDesignOnlyTerm = containsAnyNormalizedPhrase(text, [
    "for og verkhönnun",
    "for og verkhonnun",
    "verkhönnun",
    "verkhonnun",
    "forhönnun",
    "forhonnun",
    "verkfræðiráðgjöf",
    "verkfraediradgjof",
    "ráðgjöf",
    "radgjof",
    "umsjón",
    "umsjon",
    "verkefnastjórn",
    "verkefnastjorn",
    "útboðsgögn hönnun",
    "utbodsgogn honnun",
  ]);
  const hasGeneralDesignTerm = containsAnyNormalizedPhrase(text, ["hönnun", "honnun"]);
  const hasPhysicalWorkTerm = containsAnyNormalizedPhrase(text, [
    "lóðarframkvæmdir",
    "lodarframkvaemdir",
    "gatnagerð",
    "gatnagerd",
    "stígagerð",
    "stigagerd",
    "lagnir",
    "regnvatnslagnir",
    "jarðvinna",
    "jardvinna",
    "jarðvegsskipti",
    "jardvegsskipti",
    "fyllingar",
    "grjóthleðsla",
    "grjothledsla",
    "malbikun",
    "hellulögn",
    "hellulogn",
    "kantsteinar",
    "landmótun",
    "landmotun",
    "yfirborðsfrágangur",
    "yfirbordsfragangur",
    "bílastæði",
    "bilastaedi",
  ]);
  const supervisionOnly = containsAnyNormalizedPhrase(text, ["eftirlit", "umsjón", "umsjon", "verkefnastjórn", "verkefnastjorn"]) && !hasPhysicalWorkTerm;

  if (!hasDesignOnlyTerm && !(hasGeneralDesignTerm && !hasPhysicalWorkTerm) && !supervisionOnly) return false;

  return !profileExplicitlyAllowsReviewOnlyWork(profile);
}

function profileExplicitlyAllowsReviewOnlyWork(profile = {}) {
  return containsAnyNormalizedPhrase([
    profile.industry,
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : []),
  ].filter(Boolean).join(" "), [
    "hönnun",
    "honnun",
    "ráðgjöf",
    "radgjof",
    "verkfræðiráðgjöf",
    "verkfraediradgjof",
    "verkfræði",
    "verkfraedi",
    "eftirlit",
    "verkefnastjórnun",
    "verkefnastjornun",
    "útboðsgögn",
    "utbodsgogn",
    "engineering",
    "design",
    "consulting",
    "project management",
    "supervision",
  ]);
}

function containsReviewOnlyTerms(text) {
  return containsAnyNormalizedPhrase(String(text || ""), [
    "hönnun",
    "honnun",
    "ráðgjöf",
    "radgjof",
    "verkfræðiráðgjöf",
    "verkfraediradgjof",
    "eftirlit",
    "umsjón",
    "umsjon",
    "verkefnastjórn",
    "verkefnastjorn",
    "design",
    "consulting",
    "supervision",
    "inspection",
    "project management",
  ]);
}

function isCustomerMatchEligibleOpportunity(opp) {
  if (!opp) return false;
  const payload = opp.rawPayload || {};
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();
  if (adminStatus === "include") return true;
  if (isCustomerReportExcludedIntent(opp)) return false;
  const tenderState = String(payload.tender_state || "").toLowerCase();
  if (["tender_awarded", "awarded", "already_tendered"].includes(tenderState)) return false;
  if (isStaleCustomerOpportunity(opp)) return false;
  if (containsTitleNewsIntent(opp.title || "") && !containsConfirmedTenderIntent(getOpportunityQualityText(opp))) return false;
  return true;
}

function isSavedOrWatchedOpportunity(opp) {
  return state.saved.includes(opp.id) ||
    (state.opportunityActions || []).some((action) =>
      action.opportunity_id === opp.id && ["saved", "watched"].includes(action.action_type)
    );
}

function isReportNoiseWithoutTenderIntent(opp) {
  return isVegagerdinNoiseOpportunity(opp) && !hasStrongTenderIntentForReport(opp);
}

function isVegagerdinNoiseOpportunity(opp) {
  if (!/vegagerðin|vegagerdin/i.test(String(opp?.source || ""))) return false;
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opp), [
    "lokun",
    "lokanir",
    "tafir",
    "umferð",
    "umferd",
    "hámarkshraði",
    "hamarkshradi",
    "myndband",
    "fjölskylduganga",
    "fjolskylduganga",
    "kynningarfundur",
  ]);
}

function hasStrongTenderIntentForReport(opp) {
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opp), [
    "útboð",
    "utbod",
    "boðið út",
    "bodid ut",
    "útboð var auglýst",
    "utbod var auglyst",
    "lægstbjóðandi",
    "laegstbjodandi",
    "samningur var",
    "senn í útboð",
    "senn i utbod",
    "áætlað útboð",
    "aaetlad utbod",
  ]);
}

function hasClearConstructionProjectTerms(opp) {
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opp), [
    "framkvæmdir",
    "framkvaemdir",
    "viðhald",
    "vidhald",
    "jarðvinna",
    "jardvinna",
    "gatnagerð",
    "gatnagerd",
    "malbikun",
    "brú",
    "bru",
    "lagnir",
    "bygging",
    "endurbætur",
    "endurbaetur",
  ]);
}

function isTrustedReportSource(opp) {
  const source = normalizeLocationText(opp?.source || "");
  return [
    "vegagerdin",
    "vegagerðin",
    "rikiskaup",
    "ríkiskaup",
    "utbodsvefur",
    "útboðsvefur",
    "ted iceland/nordic",
    "gardabaer municipality",
    "garðabær municipality",
    "akureyri municipality",
    "hafnarfjordur municipality",
    "múlaþing",
    "mulathing",
    "reykjanesbaer",
    "reykjanesbær",
  ].some((trusted) => source.includes(normalizeLocationText(trusted)));
}

function renderReportSummaryCard(label, value) {
  return renderReportSummaryCardPage({ label, value, escapeHtml });
}

function renderReportOpportunitySection(title, description, opportunities) {
  return renderReportOpportunitySectionPage({
    title,
    description,
    opportunities,
    emptyText: state.language === "is" ? "Engin atriði í þessum hluta." : "No items in this section.",
    renderOpportunityItem: renderReportOpportunityItem,
    escapeHtml
  });
}

function renderReportOpportunityItem(opp) {
  const valueKnown = Boolean(opp.estimatedValue);
  const cleanedOpp = {
    ...opp,
    matchReasons: cleanReportReasons(opp.matchReasons, state.language),
  };
  const risks = getReportRisks(opp).map((risk) => normalizeReportRisk(risk, state.language)).filter(Boolean);
  const deadlineText = opp.deadline ? formatCustomerReportDate(opp.deadline) : t("notFound");
  const valueText = valueKnown ? formatISK(opp.estimatedValue) : t("notListed");
  const sourceUrl = getSafeExternalUrl(opp.url);
  return renderReportOpportunityItemPage({
    opp: cleanedOpp,
    valueText,
    deadlineText,
    sourceUrl,
    risks,
    fallbackReason: state.language === "is" ? "Passar við fyrirtækjaprófílinn." : "Matches your company profile.",
    qualityBadgeHtml: renderReportQualityBadge(cleanedOpp),
    matchBadgeClass: badgeClass(opp.matchLabel),
    matchLabel: getReportScoreLabel(opp, state.language),
    statusText: getReportVerificationSentence(state.language),
    buyerLabel: t("buyer"),
    buyerValue: formatOpportunityBuyer(opp),
    sourceLabel: t("source"),
    sourceValue: formatReportMetadataValue("source", opp.source),
    areaLabel: t("area"),
    areaValue: formatOpportunityLocation(opp),
    deadlineLabel: t("deadline"),
    valueLabel: t("estimatedValue"),
    whyLabel: t("whyThisMatters"),
    risksLabel: t("risksToCheck"),
    openSourceLabel: t("openSource"),
    sourceMissingLabel: t("sourceLinkMissing"),
    formatReason: formatReportReason,
    formatRisk: formatReportRisk,
    escapeHtml
  });
}

function renderReportQualityBadge(opp) {
  return renderReportQualityBadgePage({
    status: "verify",
    label: getReportStatusBadge(opp, state.language),
    escapeHtml
  });
}

function formatReportQualityLabel(label) {
  return formatReportQualityLabelBase(label, t);
}

function formatReportMatchLabel(label) {
  return formatReportMatchLabelBase(label, t);
}

function formatReportMetadataValue(type, value) {
  return formatReportMetadataValueBase(type, value, t);
}

function formatOpportunityBuyer(opp) {
  const sourceName = opp?.source || opp?.rawPayload?.source_name || "";
  return formatReportMetadataValue("buyer", getCleanOpportunityBuyer(opp?.buyer, sourceName, opp?.rawPayload || {}));
}

function formatOpportunityLocation(opp) {
  const sourceName = opp?.source || opp?.rawPayload?.source_name || "";
  const sourceLocation = inferLocationFromSourceName(sourceName);
  if (sourceLocation) return sourceLocation;
  return formatReportMetadataValue("location", opp?.location);
}

function formatOpportunityModalValue(type, value) {
  return formatOpportunityModalValueBase(type, value, { language: state.language, translate: t });
}

function formatCustomerLocation(value) {
  return formatCustomerLocationBase(value, state.language, t);
}

function formatReportReason(reason) {
  return cleanReportReasons([formatReportReasonBase(reason, { language: state.language, translate: t })], state.language)[0] || "";
}

function formatReportRisk(risk) {
  return normalizeReportRisk(formatReportRiskBase(risk, state.language), state.language);
}

function formatNextStep(step) {
  return formatNextStepBase(step, state.language);
}

function getReportRisks(opp) {
  const risks = Array.isArray(opp.risks) && opp.risks.length
    ? [...opp.risks]
    : ["Open the source page and confirm mandatory requirements."];
  if (!opp.deadline) risks.unshift(getOpportunityMissingDeadlineRisk(opp));
  if (!opp.estimatedValue) risks.push("Estimated value is not listed in the imported data.");
  if (normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "needs_review") {
    risks.push(isVegagerdinExtractedProject(opp)
      ? "Extracted project signal — verify tender timing in the source article."
      : "Imported from broad feed — verify that this is a real tender or business opportunity.");
  }
  return [...new Set(risks.map((risk) => String(risk || "").trim()).filter(Boolean))];
}

function generateWeeklyReport(profile, matches) {
  const sections = getReportSections(matches);
  const orderedMatches = [
    ...sections.confirmed,
    ...sections.possible,
    ...sections.early,
  ];
  return `${t("reportForCompany", { company: profile.companyName })}
${state.language === "is" ? "Tímabil" : "Date range"}: ${formatReportDateRange(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10), new Date().toISOString().slice(0, 10))}

${state.language === "is" ? "Samantekt" : "Summary"}:
- ${getReportUiLabel("openActiveTitle", state.language)}: ${sections.confirmed.length}
- ${getReportUiLabel("possibleTitle", state.language)}: ${sections.possible.length}
- ${getReportUiLabel("earlyTitle", state.language)}: ${sections.early.length}

${orderedMatches.length ? orderedMatches.map((opp, i) => `${i + 1}. ${opp.title}
${state.language === "is" ? "Staða" : "Status"}: ${getReportEmailStatus(opp, state.language)}
${t("buyer")}: ${formatOpportunityBuyer(opp)}
${t("source")}: ${formatReportMetadataValue("source", opp.source)}
${t("area")}: ${formatOpportunityLocation(opp)}
${t("deadline")}: ${formatOpportunityDeadlineForReport(opp)}
${t("estimatedValue")}: ${opp.estimatedValue ? formatISK(opp.estimatedValue) : t("notListed")}
${t("whyThisMatters")}:
${(cleanReportReasons(opp.matchReasons.length ? opp.matchReasons : ["Matched to your company profile."], state.language)).map((r) => `- ${r}`).join("\n")}
${t("risksToCheck")}:
${getReportRisks(opp).map((r) => `- ${normalizeReportRisk(formatReportRisk(r), state.language)}`).join("\n")}
${state.language === "is" ? "Næsta skref" : "Next step"}:
${opp.url ? `${t("openSource")}: ${opp.url}` : (state.language === "is" ? "Finnið og staðfestið upprunalega heimild áður en brugðist er við." : "Find and verify the original source page before acting.")}
`).join("\n") : (state.language === "is" ? "Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil." : "No report-ready matches were found for this period.")}

VerkRadar`;
}

function generateSavedReportText(savedReport, companyName, matches) {
  const periodStart = savedReport.period_start || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const periodEnd = savedReport.period_end || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const title = getCustomerReportTitle(savedReport, companyName);
  const sections = getSavedReportSections(matches);
  const orderedMatches = [
    ...sections.confirmed,
    ...sections.possible,
    ...sections.early,
    ...sections.review,
  ];

  return `${title}
${state.language === "is" ? "Tímabil" : "Date range"}: ${formatReportDateRange(periodStart, periodEnd)}

${orderedMatches.length ? orderedMatches.map((opp, i) => `${i + 1}. ${opp.title}
${state.language === "is" ? "Staða" : "Status"}: ${getReportEmailStatus(opp, state.language)}
${t("buyer")}: ${formatOpportunityBuyer(opp)}
${t("source")}: ${formatReportMetadataValue("source", opp.source)}
${t("area")}: ${formatOpportunityLocation(opp)}
${t("deadline")}: ${formatOpportunityDeadlineForReport(opp)}
${t("estimatedValue")}: ${opp.estimatedValue ? formatISK(opp.estimatedValue) : t("notListed")}
${t("whyThisMatters")}:
${(cleanReportReasons(opp.matchReasons.length ? opp.matchReasons : ["Matched to your company profile."], state.language)).map((r) => `- ${r}`).join("\n")}
${t("risksToCheck")}:
${getReportRisks(opp).map((r) => `- ${normalizeReportRisk(formatReportRisk(r), state.language)}`).join("\n")}
${opp.url ? `${t("openSource")}: ${opp.url}` : ""}
`).join("\n") : (state.language === "is" ? "Engin atriði eru vistuð í þessu yfirliti." : "No items are saved in this report.")}

${t("reportFooter")}`;
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

function downloadReportPdf(reportElementId = "report-preview", reportCompanyName = "") {
  const reportNode = document.getElementById(reportElementId);
  if (!reportNode) {
    showToast("No report available to export", "error");
    return;
  }

  const profile = state.profile || getEmptyProfile();
  const reportClone = reportNode.cloneNode(true);
  reportClone.classList.add("pdf-compact-report");
  reportClone.querySelectorAll("textarea, .report-close-btn").forEach((node) => node.remove());
  const metaBar = reportClone.querySelector(".report-meta-bar");
  if (metaBar) {
    const reportTitle = metaBar.querySelector("div:first-child strong")?.textContent?.trim() || t("reportForCompany", { company: reportCompanyName || profile.companyName || "Company" });
    const companyName = metaBar.querySelector("div:last-child span")?.textContent?.trim() || reportCompanyName || profile.companyName || "Company";
    const reportRange = metaBar.querySelector("div:last-child strong")?.textContent?.trim() || "";
    const logoSrc = document.querySelector(".brand-logo")?.src || document.querySelector('link[rel="icon"]')?.href || "";
    metaBar.innerHTML = "";

    const headerText = document.createElement("div");
    headerText.className = "pdf-report-header-text";
    const generated = document.createElement("span");
    generated.textContent = t("generatedBy");
    const title = document.createElement("strong");
    title.textContent = reportTitle || t("reportForCompany", { company: companyName });
    const range = document.createElement("em");
    range.textContent = reportRange;
    headerText.append(generated, title, range);
    metaBar.appendChild(headerText);

    if (logoSrc) {
      const logo = document.createElement("img");
      logo.className = "pdf-report-logo";
      logo.src = logoSrc;
      logo.alt = "VerkRadar";
      metaBar.appendChild(logo);
    }
  }
  const summaryGrid = reportClone.querySelector(".report-summary-grid");
  if (summaryGrid) {
    summaryGrid.remove();
  }
  const dateRange = reportNode.querySelector(".report-meta-bar div:last-child strong")?.textContent || new Date().toISOString().slice(0, 10);
  const fileName = makeReportPdfFileName(reportCompanyName || profile.companyName || "company", dateRange);
  const stylesheetLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
    .map((link) => `<link rel="stylesheet" href="${escapeHtml(link.href)}">`)
    .join("");
  const pdfWindow = window.open("", "_blank", "width=1100,height=900");

  if (!pdfWindow) {
    showToast("Allow popups to download the report PDF", "error");
    return;
  }

  pdfWindow.document.open();
  pdfWindow.document.write(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(fileName)}</title>
  ${stylesheetLinks}
  <style>
    @page { size: A4; margin: 10mm; }
    html, body { background: #ffffff !important; }
    body { margin: 0; color: #111827; font-size: 10px; }
    .pdf-export-shell { max-width: 100%; margin: 0 auto; }
    .report-preview { border: 0 !important; border-radius: 0 !important; box-shadow: none !important; margin: 0 !important; max-width: none !important; }
    .report-meta-bar {
      align-items: flex-start !important;
      background: #ffffff !important;
      border-bottom: 1px solid #d1d5db !important;
      color: #374151 !important;
      display: flex !important;
      justify-content: flex-start !important;
      gap: 12px !important;
      min-height: 39px !important;
      padding: 0 58px 5px 0 !important;
      position: relative !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .pdf-report-header-text {
      display: grid !important;
      gap: 2px !important;
      min-width: 0 !important;
      text-align: left !important;
    }
    .report-meta-bar span { font-size: 8px !important; }
    .report-meta-bar strong { color: #111827 !important; }
    .report-meta-bar strong { font-size: 10px !important; line-height: 1.15 !important; }
    .report-meta-bar em {
      color: #64748b !important;
      font-size: 8px !important;
      font-style: normal !important;
      font-weight: 700 !important;
    }
    .pdf-report-logo {
      display: block !important;
      height: 38px !important;
      max-height: 38px !important;
      object-fit: contain !important;
      opacity: 1 !important;
      position: absolute !important;
      right: 0 !important;
      top: 0 !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      width: auto !important;
    }
    .report-body { padding: 0 !important; }
    .report-cover { display: none !important; }
    .pdf-compact-summary {
      border-bottom: 1px solid #e5e7eb !important;
      color: #334155 !important;
      font-size: 9px !important;
      font-weight: 800 !important;
      margin: 5px 0 7px !important;
      padding: 0 0 5px !important;
    }
    .report-summary-grid { display: none !important; }
    .report-section { margin: 6px 0 0 !important; }
    .report-section-head {
      border-bottom: 0 !important;
      box-shadow: none !important;
      margin-bottom: 3px !important;
      padding-bottom: 2px !important;
    }
    .report-section-head::after { display: none !important; }
    .report-section-head h3 { font-size: 11px !important; margin: 0 !important; }
    .report-section-head p { display: none !important; }
    .report-empty { display: none !important; }
    .report-item {
      break-inside: avoid !important;
      border-radius: 8px !important;
      margin: 0 0 5px !important;
      padding: 7px !important;
    }
    .report-item-top { margin-bottom: 3px !important; }
    .report-quality,
    .report-item .badge {
      font-size: 8px !important;
      padding: 3px 6px !important;
    }
    .report-item h4 {
      font-size: 11px !important;
      line-height: 1.16 !important;
      margin: 0 0 4px !important;
    }
    .report-facts {
      gap: 3px !important;
      grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
      margin: 0 0 4px !important;
    }
    .report-facts span {
      border-radius: 5px !important;
      font-size: 8px !important;
      min-height: auto !important;
      padding: 4px !important;
    }
    .report-facts strong { font-size: 6px !important; margin-bottom: 1px !important; }
    .report-facts em { font-size: 8px !important; }
    .report-detail-grid {
      gap: 5px !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      margin-top: 4px !important;
    }
    .report-detail-grid h5 {
      display: inline !important;
      font-size: 7px !important;
      margin: 0 3px 0 0 !important;
    }
    .report-detail-grid h5::after { content: ":"; }
    .report-detail-grid ul {
      display: inline !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    .report-detail-grid li {
      background: transparent !important;
      border: 0 !important;
      border-radius: 0 !important;
      color: #334155 !important;
      display: inline !important;
      font-size: 8px !important;
      line-height: 1.25 !important;
      padding: 0 !important;
    }
    .report-detail-grid li + li::before { content: "; "; }
    .report-detail-grid > div:last-child li { color: #7c2d12 !important; }
    .report-source-link {
      border-radius: 6px !important;
      break-inside: avoid;
      display: inline-flex !important;
      font-size: 8px !important;
      margin-top: 5px !important;
      padding: 4px 7px !important;
    }
    .report-footer-note {
      border-top: 1px solid #d1d5db !important;
      font-size: 8px !important;
      margin-top: 6px !important;
      padding-top: 4px !important;
    }
    .hidden-textarea, .report-close-btn { display: none !important; }
  </style>
</head>
<body>
  <main class="pdf-export-shell">
    ${reportClone.outerHTML}
  </main>
  <script>
    window.addEventListener("load", () => {
      document.title = ${JSON.stringify(fileName)};
      setTimeout(() => {
        window.focus();
        window.print();
      }, 250);
    });
  <\/script>
</body>
</html>`);
  pdfWindow.document.close();
}

function downloadAdminReportPdf() {
  const report = state.selectedAdminReport?.id === state.selectedAdminReportId
    ? state.selectedAdminReport
    : (state.adminReports || []).find((item) => item.id === state.selectedAdminReportId);
  downloadReportPdf("admin-report-preview", report?.companies?.company_name || "Company");
}

function makeReportPdfFileName(companyName, dateRange) {
  const company = slugifyFilePart(companyName) || "company";
  const range = slugifyFilePart(String(dateRange || "").replace(/\s+to\s+/i, "-")) || new Date().toISOString().slice(0, 10);
  return `VerkRadar-report-${company}-${range}.pdf`;
}

function slugifyFilePart(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function renderPricing() {
  return renderShell(renderPricingPage({
    t,
    escapeHtml,
    trialHref: "/trial"
  }));
}

function renderTrialRequest() {
  return renderShell(renderTrialRequestPage({
    t,
    escapeHtml,
    submitted: state.trialRequestSubmitted,
    error: state.trialRequestError
  }));
}

function renderSettings() {
  if (!state.user) return requireAuthPage();

  if (state.profileLoading && !state.profile && !state.profileDraft) {
    return renderShell(`
      <section class="empty-state">
        <div class="loader-mark" aria-label="${escapeHtml(state.language === "is" ? "Hleð fyrirtækjaprófíl" : "Loading company profile")}"></div>
        <h1>${escapeHtml(state.language === "is" ? "Hleð fyrirtækjaprófíl..." : "Loading company profile...")}</h1>
        <p>${escapeHtml(state.language === "is" ? "Sæki vistaðan fyrirtækjaprófíl." : "Checking your saved company profile.")}</p>
        <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${escapeHtml(state.language === "is" ? "Reyna aftur" : "Retry")}</button>
      </section>
    `);
  }

  if (state.profileLoadError && !state.profile && !state.profileDraft) {
    return renderShell(`
      <section class="empty-state">
        <h1>${escapeHtml(state.language === "is" ? "Gat ekki hlaðið stillingum" : "Could not load Settings")}</h1>
        <p>${escapeHtml(state.profileLoadError)}</p>
        <button class="btn btn-primary" type="button" data-action="retry-settings-profile">${escapeHtml(state.language === "is" ? "Reyna aftur" : "Retry")}</button>
      </section>
    `);
  }

  if (!state.profile && !state.profileDraft) {
    return requireProfilePage(
      t("setupCompanyFirst"),
      state.language === "is" ? "Stillingar eru tiltækar eftir að fyrirtækið hefur verið sett upp." : "Settings are available after you set up your company."
    );
  }

  return renderShell(renderSettingsPage({
    t,
    escapeHtml,
    language: state.language,
    profileDraftDirty: state.profileDraftDirty,
    profileLoadError: state.profileLoadError,
    showDemoReset: canShowDemoReset(),
    profileFormHtml: renderProfileForm()
  }));
}

function canShowDemoReset() {
  return Boolean(state.isAdmin || ["localhost", "127.0.0.1", ""].includes(window.location.hostname));
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
${t("buyer")}: ${formatOpportunityBuyer(opp)}
${t("deadline")}: ${formatOpportunityDeadlineForReport(opp)}
${state.language === "is" ? "Samsvörun" : "Match"}: ${opp.matchScore}/100 (${formatReportMatchLabel(opp.matchLabel)})
${t("whyThisMatters")}:
${opp.matchReasons.map((r) => `- ${formatReportReason(r)}`).join("\n")}
${state.language === "is" ? "Næsta skref" : "Next step"}: ${state.language === "is" ? "Opnið upprunalega heimild og staðfestið kröfur." : "Open source documents and confirm requirements."}`;
}

bootApp();
loadOpportunities();
