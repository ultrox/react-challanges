### Install

`yarn install`

Rename env file:

`env.development.example → .env.development`


## Deployment on Netlify with CircleCI:


#### Create Netlify site ID

In project directory:

`npx netlify init`

1. Create & configure a new site
2. Give it a name(this will be your subdomain on netlify). 
3. Chose your team
4. When asked about your Github informations, skip it `Ctrl-C`

If you did all steps correctly, you should have new directory 
`.netlify/state.json` which holds site-id.

If you want to setup production site, you should delete `.netlify` directory,
and do the song & dance again with different site name.

On the last note, you need to create `NETLIFY_ACCESS_TOKEN` [here](https://app.netlify.com/user/applications/personal)


#### CircleCI

To deploy on your own you need to create following env variables in your
CircleCI management panel.


At this point you should have all the env variables.

```
STAGING_NETLIFY_SITE_ID 
NETLIFY_ACCESS_TOKEN
PRODUCTION_NETLIFY_SITE_ID
```

1. Ensure this repository is connected with your github username.
2. You need to go to CircleCI, and add new project.
`https://circleci.com/add-projects/gh/pets`
3. Find the repository name, and add it.
4. Add all env vars there → `https://circleci.com/gh/ultrox/pets/edit#env-vars`

Trigger build manually, or by pushing
