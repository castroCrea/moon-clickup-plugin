export declare const DEFAULT_TEMPLATE = "{{content}}\n{{IF source.url}}\n\n# {{IF source.title}}{{source.title}}{{END_IF source.title}}\n{{IF source.url}}{{source.url}}{{END_IF source.url}}\n{{IF source.image}}![]({{source.image}}){{END_IF source.image}}\n{{IF source.description}}{{source.description}}{{END_IF source.description}}\n{{IF source.type === Tweet }}{{source.text}}{{END_IF source.type}}\n{{IF source.timestamp}}\n## Timestamps\n- [{{source.timestamp.0.timestamp}}]({{source.timestamp.0.url}})\n{{END_IF source.timestamp}}\n{{END_IF source.url}}\n{{IF people.0.name}}\n\n# {{IF people.0.name}}{{people.0.name}}{{END_IF people.0.name}}\n{{IF people.0.job}}{{people.0.job}}{{END_IF people.0.job}}\n{{IF people.0.email}}[{{people.0.email}}](mailto:{{people.0.email}}){{END_IF people.0.email}}\n{{IF people.0.about}}{{people.0.about}}{{END_IF people.0.about}}\n{{IF people.0.linkedin.0}}linkedin : [{{people.0.linkedin.0}}]({{people.0.linkedin.0}}){{END_IF people.0.linkedin.0}}\n{{IF people.0.twitter.0}}twitter : [{{people.0.twitter.0}}]({{people.0.twitter.0}}){{END_IF people.0.twitter.0}}\n{{IF people.0.tiktok.0}}tiktok : [{{people.0.tiktok.0}}]({{people.0.tiktok.0}}){{END_IF people.0.tiktok.0}}\n{{IF people.0.instagram.0}}instagram : [{{people.0.instagram.0}}]({{people.0.instagram.0}}){{END_IF people.0.instagram.0}}\n{{IF people.0.substack.0}}substack : [{{people.0.substack.0}}]({{people.0.substack.0}}){{END_IF people.0.substack.0}}\n{{IF people.0.github.0}}github : [{{people.0.github.0}}]({{people.0.github.0}}){{END_IF people.0.github.0}}\n{{IF people.0.mastodon.0}}mastodon : [{{people.0.mastodon.0}}]({{people.0.mastodon.0}}){{END_IF people.0.mastodon.0}}\n{{IF people.0.youtube.0}}youtube : [{{people.0.youtube.0}}]({{people.0.youtube.0}}){{END_IF people.0.youtube.0}}\n{{IF people.0.website.0}}website : [{{people.0.website.0}}]({{people.0.website.0}}){{END_IF people.0.website.0}}\n{{END_IF people.0}}\n";