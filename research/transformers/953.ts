import { tags } from "typia";
import type * as IAutoView from "@autoview/interface";
namespace Schema {
    export namespace IApiUserInstallationsRepositories {
        export type GetResponse = {
            total_count: number & tags.Type<"int32">;
            repository_selection?: string;
            repositories: Schema.repository[];
        };
    }
    /**
     * A repository on GitHub.
     *
     * @title Repository
    */
    export type repository = {
        /**
         * Unique identifier of the repository
        */
        id: number & tags.Type<"int32">;
        node_id: string;
        /**
         * The name of the repository.
        */
        name: string;
        full_name: string;
        license: Schema.nullable_license_simple;
        forks: number & tags.Type<"int32">;
        permissions?: {
            admin: boolean;
            pull: boolean;
            triage?: boolean;
            push: boolean;
            maintain?: boolean;
        };
        owner: Schema.simple_user;
        /**
         * Whether the repository is private or public.
        */
        "private": boolean;
        html_url: string & tags.Format<"uri">;
        description: string | null;
        fork: boolean;
        url: string & tags.Format<"uri">;
        archive_url: string;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        contributors_url: string & tags.Format<"uri">;
        deployments_url: string & tags.Format<"uri">;
        downloads_url: string & tags.Format<"uri">;
        events_url: string & tags.Format<"uri">;
        forks_url: string & tags.Format<"uri">;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        git_url: string;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        languages_url: string & tags.Format<"uri">;
        merges_url: string & tags.Format<"uri">;
        milestones_url: string;
        notifications_url: string;
        pulls_url: string;
        releases_url: string;
        ssh_url: string;
        stargazers_url: string & tags.Format<"uri">;
        statuses_url: string;
        subscribers_url: string & tags.Format<"uri">;
        subscription_url: string & tags.Format<"uri">;
        tags_url: string & tags.Format<"uri">;
        teams_url: string & tags.Format<"uri">;
        trees_url: string;
        clone_url: string;
        mirror_url: (string & tags.Format<"uri">) | null;
        hooks_url: string & tags.Format<"uri">;
        svn_url: string & tags.Format<"uri">;
        homepage: (string & tags.Format<"uri">) | null;
        language: string | null;
        forks_count: number & tags.Type<"int32">;
        stargazers_count: number & tags.Type<"int32">;
        watchers_count: number & tags.Type<"int32">;
        /**
         * The size of the repository, in kilobytes. Size is calculated hourly. When a repository is initially created, the size is 0.
        */
        size: number & tags.Type<"int32">;
        /**
         * The default branch of the repository.
        */
        default_branch: string;
        open_issues_count: number & tags.Type<"int32">;
        /**
         * Whether this repository acts as a template that can be used to generate new repositories.
        */
        is_template?: boolean;
        topics?: string[];
        /**
         * Whether issues are enabled.
        */
        has_issues: boolean;
        /**
         * Whether projects are enabled.
        */
        has_projects: boolean;
        /**
         * Whether the wiki is enabled.
        */
        has_wiki: boolean;
        has_pages: boolean;
        /**
         * Whether downloads are enabled.
         *
         * @deprecated
        */
        has_downloads: boolean;
        /**
         * Whether discussions are enabled.
        */
        has_discussions?: boolean;
        /**
         * Whether the repository is archived.
        */
        archived: boolean;
        /**
         * Returns whether or not this repository disabled.
        */
        disabled: boolean;
        /**
         * The repository visibility: public, private, or internal.
        */
        visibility?: string & tags.Default<"public">;
        pushed_at: (string & tags.Format<"date-time">) | null;
        created_at: (string & tags.Format<"date-time">) | null;
        updated_at: (string & tags.Format<"date-time">) | null;
        /**
         * Whether to allow rebase merges for pull requests.
        */
        allow_rebase_merge?: boolean;
        temp_clone_token?: string;
        /**
         * Whether to allow squash merges for pull requests.
        */
        allow_squash_merge?: boolean;
        /**
         * Whether to allow Auto-merge to be used on pull requests.
        */
        allow_auto_merge?: boolean;
        /**
         * Whether to delete head branches when pull requests are merged
        */
        delete_branch_on_merge?: boolean;
        /**
         * Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging.
        */
        allow_update_branch?: boolean;
        /**
         * Whether a squash merge commit can use the pull request title as default. **This property is closing down. Please use `squash_merge_commit_title` instead.
         *
         * @deprecated
        */
        use_squash_pr_title_as_default?: boolean;
        /**
         * The default value for a squash merge commit title:
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
        */
        squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE";
        /**
         * The default value for a squash merge commit message:
         *
         * - `PR_BODY` - default to the pull request's body.
         * - `COMMIT_MESSAGES` - default to the branch's commit messages.
         * - `BLANK` - default to a blank commit message.
        */
        squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK";
        /**
         * The default value for a merge commit title.
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
        */
        merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE";
        /**
         * The default value for a merge commit message.
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `PR_BODY` - default to the pull request's body.
         * - `BLANK` - default to a blank commit message.
        */
        merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK";
        /**
         * Whether to allow merge commits for pull requests.
        */
        allow_merge_commit?: boolean;
        /**
         * Whether to allow forking this repo
        */
        allow_forking?: boolean;
        /**
         * Whether to require contributors to sign off on web-based commits
        */
        web_commit_signoff_required?: boolean;
        open_issues: number & tags.Type<"int32">;
        watchers: number & tags.Type<"int32">;
        master_branch?: string;
        starred_at?: string;
        /**
         * Whether anonymous git access is enabled for this repository
        */
        anonymous_access_enabled?: boolean;
    };
    /**
     * License Simple
     *
     * @title License Simple
    */
    export type nullable_license_simple = {
        key: string;
        name: string;
        url: (string & tags.Format<"uri">) | null;
        spdx_id: string | null;
        node_id: string;
        html_url?: string & tags.Format<"uri">;
    } | null;
    /**
     * A GitHub user.
     *
     * @title Simple User
    */
    export type simple_user = {
        name?: string | null;
        email?: string | null;
        login: string;
        id: number & tags.Type<"int32">;
        node_id: string;
        avatar_url: string & tags.Format<"uri">;
        gravatar_id: string | null;
        url: string & tags.Format<"uri">;
        html_url: string & tags.Format<"uri">;
        followers_url: string & tags.Format<"uri">;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string & tags.Format<"uri">;
        organizations_url: string & tags.Format<"uri">;
        repos_url: string & tags.Format<"uri">;
        events_url: string;
        received_events_url: string & tags.Format<"uri">;
        type: string;
        site_admin: boolean;
        starred_at?: string;
        user_view_type?: string;
    };
}
type IAutoViewTransformerInputType = Schema.IApiUserInstallationsRepositories.GetResponse;
export function transform($input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
    return visualizeData($input);
}



function visualizeData(input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
  // Extract repository list from the input
  const repos = Array.isArray(input.repositories) ? input.repositories : [];

  // If there are no repositories, show a friendly markdown message
  if (repos.length === 0) {
    return {
      type: "Markdown",
      content: "_No repositories available for this installation._",
    };
  }

  // Map each repository to a DataListItemProps for visualization
  const childrenProps: IAutoView.IAutoViewDataListItemProps[] = repos.map((repo) => {
    // Construct a clickable repository name using markdown link syntax
    const repoLinkMarkdown = `### [${repo.full_name}](${repo.html_url})`;

    // Prepare statistic chips for stars, forks, and open issues
    const statChips: IAutoView.IAutoViewChipProps[] = [
      {
        type: "Chip",
        label: repo.stargazers_count.toString(),
        startElement: { type: "Icon", id: "star", color: "yellow", size: 16 },
        color: "yellow",
        variant: "outlined",
        size: "small",
      },
      {
        type: "Chip",
        label: repo.forks_count.toString(),
        startElement: { type: "Icon", id: "code-branch", color: "blue", size: 16 },
        color: "blue",
        variant: "outlined",
        size: "small",
      },
      {
        type: "Chip",
        label: repo.open_issues_count.toString(),
        startElement: { type: "Icon", id: "exclamation-circle", color: "red", size: 16 },
        color: "red",
        variant: "outlined",
        size: "small",
      },
    ];

    // Group the chips horizontally
    const chipGroup: IAutoView.IAutoViewChipGroupProps = {
      type: "ChipGroup",
      childrenProps: statChips,
    };

    // Build the DataListItemProps
    const item: IAutoView.IAutoViewDataListItemProps = {
      type: "DataListItem",
      // Use markdown to render the repository link prominently
      label: { type: "Markdown", content: repoLinkMarkdown },
      // Display the stats as a ChipGroup
      value: chipGroup,
    };

    return item;
  });

  // Return a data list containing all repository items
  const dataList: IAutoView.IAutoViewDataListProps = {
    type: "DataList",
    childrenProps,
  };

  return dataList;
}
