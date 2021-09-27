# weekly commit

This is a simple npm  package to get the weekly commit from the project. For tracking weekly code change on the project.

# Install and config

Install the package to your project as dev dependencies.

```bash
npm i --save-dev commitweekly
```

### Run the package

To run the package. Run this command in the root folder of your project. Please make sure that you already add git to your project.

```bash

commit-weekly --userMail="<commit_user_email_id>"

```

To make the above commd easy to excute add a script to your package.json file.

```json
{
  "scripts" : {
    "tasklist" : "commit-weekly --userMail="<commit_user_email_id>"
  }
}

```

### config

It is a pain to always add usermail as params to your command. To solve this we can config the weekly commit according to you project and no need to think about it again.  

Create a json file in the root of your project named **weeklycommit.config.json**.
Now add the following json to the file.

```json

{
    "userEmail" : "<commit_user_email_id>"
}

```


## Run

To run the package use

```bash

commit-weekly --userMail="<commit_user_email_id>"

```

Currently this package is only able to get commit of a single user we will be adding all user, and multiuser with config file in the package soon.
