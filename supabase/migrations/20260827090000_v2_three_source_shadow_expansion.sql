with seeds(source_name,source_key,display_name,adapter_type,endpoint_url,parser_name,parser_version) as (values
('Ríkiskaup / island.is procurement','rikiskaup-utbod-v2','Ríkiskaup útboð v2','wordpress_rest','https://utbodsvefur.is/wp-json/wp/v2/posts','rikiskaup-wordpress','1.0.0'),
('Vegagerðin','vegagerdin-utbod-v2','Vegagerðin útboð v2','rss','https://www.vegagerdin.is/rss.xml','vegagerdin-rss','1.0.0'),
('Ísafjarðarbær','isafjordur-utbod-v2','Ísafjarðarbær útboð v2','rss','https://www.isafjordur.is/is/feed/7','isafjordur-rss','1.0.0'))
insert into public.v2_source_configs(source_id,source_key,display_name,adapter_type,mode,endpoint_url,parser_name,parser_version) select s.id,se.source_key,se.display_name,se.adapter_type,'fixture_only',se.endpoint_url,se.parser_name,se.parser_version from seeds se join public.sources s on s.name=se.source_name on conflict(source_key) do nothing;
insert into public.v2_source_health(source_config_id) select id from public.v2_source_configs where source_key in ('rikiskaup-utbod-v2','vegagerdin-utbod-v2','isafjordur-utbod-v2') on conflict do nothing;
