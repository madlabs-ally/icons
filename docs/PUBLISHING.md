# Publishing Guide

This guide explains how to release new versions of MeloSpot Icons packages using [Changesets](https://github.com/changesets/changesets).

## Prerequisites

- You must have write access to the repository.
- You must be authenticated with npm to publish packages.

## Release Process

The release process consists of three main steps:

1.  **Create a Changeset**: Document your changes.
2.  **Version Packages**: Update package versions and changelogs.
3.  **Publish**: specific packages to the npm registry.

### 1. Create a Changeset

Start by running the changeset wizard:

```sh
pnpm changeset
```

- Select the packages you want to release.
- Choose the release type (major, minor, or patch) for each package.
- Write a clear summary of the changes.

This command will create a new markdown file in the `.changeset` directory. Commit this file.

### 2. Version Packages

Once you are ready to release, run the version command:

```sh
pnpm version-packages
```

This command will:
- Bump the versions of the packages based on the changesets.
- Update the `CHANGELOG.md` files.
- Delete the used changeset files.
- Update `package.json` versions.

Review the changes, then commit and push them to the main branch.

### 3. Publish

Finally, publish the packages to npm:

```sh
pnpm release
```

This command runs the build script for all packages and then publishes them using `changeset publish`.

> [!NOTE]
> Ensure you have built the packages (`pnpm build`) if you are running this locally, although the `release` script in `package.json` includes a build step (`pnpm build:packages`).


## Troubleshooting

### Common Errors

**`E404 Not Found` or `Access token expired`**

If you see an error like `PUT https://registry.npmjs.org/@melospot%2ficons-svg - Not found` or `Access token expired`, it usually means you are not logged in or your token has expired.

To fix this:
1.  Run `npm login` in your terminal.
2.  Follow the prompts to authenticate.
3.  Retry the publish command.

**Permissions**

Ensure you have the necessary permissions (write access) for the `@melospot` organization on npm.
