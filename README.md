# dol-app-redirect-worker

A template for handling app redirection based on user agent

Install Cloudflare Wrangler using npm
```
npm i @cloudflare/wrangler -g
```

Update `wrangler.toml` with `account_id` and `zone_id` found in the overview sidebar on the domain on Cloudflare.com

Create a token on Cloudflare.com -> Profile -> API Tokens using the template "Edit Cloudflare Workers". Make sure to select the Account Resource Zone Resource for dol-sensors.com.

Add the API key to wrangler using:
```
wrangler config
```

Now publish the working using
```
wrangler publish
```

