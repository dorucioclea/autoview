import { tags } from "typia";
import React, { JSX } from "react";
import * as LucideReact from "lucide-react";
export namespace AutoViewInputSubTypes {
    export namespace IApiReposActionsRuns {
        export interface GetResponse {
            total_count: number & tags.Type<"int32">;
            workflow_runs: AutoViewInputSubTypes.workflow_run[];
        }
    }
    /**
     * An invocation of a workflow
     *
     * @title Workflow Run
    */
    export interface workflow_run {
        /**
         * The ID of the workflow run.
        */
        id: number & tags.Type<"int32">;
        /**
         * The name of the workflow run.
        */
        name?: string | null;
        node_id: string;
        /**
         * The ID of the associated check suite.
        */
        check_suite_id?: number & tags.Type<"int32">;
        /**
         * The node ID of the associated check suite.
        */
        check_suite_node_id?: string;
        head_branch: string | null;
        /**
         * The SHA of the head commit that points to the version of the workflow being run.
        */
        head_sha: string;
        /**
         * The full path of the workflow
        */
        path: string;
        /**
         * The auto incrementing run number for the workflow run.
        */
        run_number: number & tags.Type<"int32">;
        /**
         * Attempt number of the run, 1 for first attempt and higher if the workflow was re-run.
        */
        run_attempt?: number & tags.Type<"int32">;
        referenced_workflows?: AutoViewInputSubTypes.referenced_workflow[] | null;
        event: string;
        status: string | null;
        conclusion: string | null;
        /**
         * The ID of the parent workflow.
        */
        workflow_id: number & tags.Type<"int32">;
        /**
         * The URL to the workflow run.
        */
        url: string;
        html_url: string;
        /**
         * Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. The returned pull requests do not necessarily indicate pull requests that triggered the run.
        */
        pull_requests: AutoViewInputSubTypes.pull_request_minimal[] | null;
        created_at: string & tags.Format<"date-time">;
        updated_at: string & tags.Format<"date-time">;
        actor?: AutoViewInputSubTypes.simple_user;
        triggering_actor?: AutoViewInputSubTypes.simple_user;
        /**
         * The start time of the latest run. Resets on re-run.
        */
        run_started_at?: string;
        /**
         * The URL to the jobs for the workflow run.
        */
        jobs_url: string;
        /**
         * The URL to download the logs for the workflow run.
        */
        logs_url: string;
        /**
         * The URL to the associated check suite.
        */
        check_suite_url: string;
        /**
         * The URL to the artifacts for the workflow run.
        */
        artifacts_url: string;
        /**
         * The URL to cancel the workflow run.
        */
        cancel_url: string;
        /**
         * The URL to rerun the workflow run.
        */
        rerun_url: string;
        /**
         * The URL to the previous attempted run of this workflow, if one exists.
        */
        previous_attempt_url?: string | null;
        /**
         * The URL to the workflow.
        */
        workflow_url: string;
        head_commit: AutoViewInputSubTypes.nullable_simple_commit;
        repository: AutoViewInputSubTypes.minimal_repository;
        head_repository: AutoViewInputSubTypes.minimal_repository;
        head_repository_id?: number & tags.Type<"int32">;
        /**
         * The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow.
        */
        display_title: string;
    }
    /**
     * A workflow referenced/reused by the initial caller workflow
     *
     * @title Referenced workflow
    */
    export interface referenced_workflow {
        path: string;
        sha: string;
        ref?: string;
    }
    /**
     * @title Pull Request Minimal
    */
    export interface pull_request_minimal {
        id: number & tags.Type<"int32">;
        number: number & tags.Type<"int32">;
        url: string;
        head: {
            ref: string;
            sha: string;
            repo: {
                id: number & tags.Type<"int32">;
                url: string;
                name: string;
            };
        };
        base: {
            ref: string;
            sha: string;
            repo: {
                id: number & tags.Type<"int32">;
                url: string;
                name: string;
            };
        };
    }
    /**
     * A GitHub user.
     *
     * @title Simple User
    */
    export interface simple_user {
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
    }
    /**
     * A commit.
     *
     * @title Simple Commit
    */
    export type nullable_simple_commit = {
        /**
         * SHA for the commit
        */
        id: string;
        /**
         * SHA for the commit's tree
        */
        tree_id: string;
        /**
         * Message describing the purpose of the commit
        */
        message: string;
        /**
         * Timestamp of the commit
        */
        timestamp: string;
        /**
         * Information about the Git author
        */
        author: {
            /**
             * Name of the commit's author
            */
            name: string;
            /**
             * Git email address of the commit's author
            */
            email: string;
        } | null;
        /**
         * Information about the Git committer
        */
        committer: {
            /**
             * Name of the commit's committer
            */
            name: string;
            /**
             * Git email address of the commit's committer
            */
            email: string;
        } | null;
    } | null;
    /**
     * Minimal Repository
     *
     * @title Minimal Repository
    */
    export interface minimal_repository {
        id: number & tags.Type<"int32">;
        node_id: string;
        name: string;
        full_name: string;
        owner: AutoViewInputSubTypes.simple_user;
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
        git_url?: string;
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
        ssh_url?: string;
        stargazers_url: string & tags.Format<"uri">;
        statuses_url: string;
        subscribers_url: string & tags.Format<"uri">;
        subscription_url: string & tags.Format<"uri">;
        tags_url: string & tags.Format<"uri">;
        teams_url: string & tags.Format<"uri">;
        trees_url: string;
        clone_url?: string;
        mirror_url?: string | null;
        hooks_url: string & tags.Format<"uri">;
        svn_url?: string;
        homepage?: string | null;
        language?: string | null;
        forks_count?: number & tags.Type<"int32">;
        stargazers_count?: number & tags.Type<"int32">;
        watchers_count?: number & tags.Type<"int32">;
        /**
         * The size of the repository, in kilobytes. Size is calculated hourly. When a repository is initially created, the size is 0.
        */
        size?: number & tags.Type<"int32">;
        default_branch?: string;
        open_issues_count?: number & tags.Type<"int32">;
        is_template?: boolean;
        topics?: string[];
        has_issues?: boolean;
        has_projects?: boolean;
        has_wiki?: boolean;
        has_pages?: boolean;
        has_downloads?: boolean;
        has_discussions?: boolean;
        archived?: boolean;
        disabled?: boolean;
        visibility?: string;
        pushed_at?: (string & tags.Format<"date-time">) | null;
        created_at?: (string & tags.Format<"date-time">) | null;
        updated_at?: (string & tags.Format<"date-time">) | null;
        permissions?: {
            admin?: boolean;
            maintain?: boolean;
            push?: boolean;
            triage?: boolean;
            pull?: boolean;
        };
        role_name?: string;
        temp_clone_token?: string;
        delete_branch_on_merge?: boolean;
        subscribers_count?: number & tags.Type<"int32">;
        network_count?: number & tags.Type<"int32">;
        code_of_conduct?: AutoViewInputSubTypes.code_of_conduct;
        license?: {
            key?: string;
            name?: string;
            spdx_id?: string;
            url?: string;
            node_id?: string;
        } | null;
        forks?: number & tags.Type<"int32">;
        open_issues?: number & tags.Type<"int32">;
        watchers?: number & tags.Type<"int32">;
        allow_forking?: boolean;
        web_commit_signoff_required?: boolean;
        security_and_analysis?: AutoViewInputSubTypes.security_and_analysis;
    }
    /**
     * Code Of Conduct
     *
     * @title Code Of Conduct
    */
    export interface code_of_conduct {
        key: string;
        name: string;
        url: string & tags.Format<"uri">;
        body?: string;
        html_url: (string & tags.Format<"uri">) | null;
    }
    export type security_and_analysis = {
        advanced_security?: {
            status?: "enabled" | "disabled";
        };
        code_security?: {
            status?: "enabled" | "disabled";
        };
        /**
         * Enable or disable Dependabot security updates for the repository.
        */
        dependabot_security_updates?: {
            /**
             * The enablement status of Dependabot security updates for the repository.
            */
            status?: "enabled" | "disabled";
        };
        secret_scanning?: {
            status?: "enabled" | "disabled";
        };
        secret_scanning_push_protection?: {
            status?: "enabled" | "disabled";
        };
        secret_scanning_non_provider_patterns?: {
            status?: "enabled" | "disabled";
        };
        secret_scanning_ai_detection?: {
            status?: "enabled" | "disabled";
        };
    } | null;
}
export type AutoViewInput = AutoViewInputSubTypes.IApiReposActionsRuns.GetResponse;



// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const formattedTotal = value.total_count.toLocaleString();

  const formatDate = (dateStr?: string | null): string => {
    if (!dateStr) return '—';
    const date = new Date(dateStr);
    return date.toLocaleString('default', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusIcon = (status: string, conclusion: string | null): React.ReactNode => {
    if (status === 'completed') {
      switch (conclusion) {
        case 'success':
          return (
            <LucideReact.CheckCircle
              className="text-green-500"
              size={16}
              aria-label="Success"
              role="img"
            />
          );
        case 'failure':
          return (
            <LucideReact.AlertTriangle
              className="text-red-500"
              size={16}
              aria-label="Failure"
              role="img"
            />
          );
        case 'cancelled':
          return (
            <LucideReact.XCircle
              className="text-yellow-500"
              size={16}
              aria-label="Cancelled"
              role="img"
            />
          );
        default:
          return (
            <LucideReact.AlertCircle
              className="text-gray-400"
              size={16}
              aria-label={conclusion || 'Completed'}
              role="img"
            />
          );
      }
    } else if (status === 'in_progress') {
      return (
        <LucideReact.Loader
          className="animate-spin text-blue-500"
          size={16}
          aria-label="In Progress"
          role="img"
        />
      );
    } else if (status === 'queued') {
      return (
        <LucideReact.Clock
          className="text-amber-500"
          size={16}
          aria-label="Queued"
          role="img"
        />
      );
    }
    return (
      <LucideReact.HelpCircle
        className="text-gray-400"
        size={16}
        aria-label={status}
        role="img"
      />
    );
  };

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center text-lg font-semibold text-gray-700">
        <LucideReact.ListChecks className="mr-2" size={20} />
        <span>{formattedTotal} Workflow Runs</span>
      </div>

      {value.workflow_runs.length === 0 ? (
        <div className="flex items-center justify-center py-8 text-gray-400">
          <LucideReact.AlertCircle size={24} />
          <span className="ml-2">No workflow runs available</span>
        </div>
      ) : (
        <ul className="mt-4 space-y-3">
          {value.workflow_runs.map((run) => (
            <li
              key={run.id}
              className="flex flex-col sm:flex-row sm:justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-start sm:items-center space-x-3">
                {getStatusIcon(run.status ?? '', run.conclusion ?? null)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1">
                    <span className="font-medium text-gray-800 truncate">
                      {run.display_title || run.name || `Run #${run.run_number}`}
                    </span>
                    <a href={run.html_url} target="_blank" rel="noopener noreferrer">
                      <LucideReact.Link
                        size={16}
                        className="text-gray-400 hover:text-blue-500"
                        aria-label="Open Run"
                        role="img"
                      />
                    </a>
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-500 space-x-2">
                    {run.actor?.avatar_url && (
                      <img
                        src={run.actor.avatar_url}
                        alt={run.actor.login}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            run.actor!.login,
                          )}&background=random`;
                        }}
                        className="w-4 h-4 rounded-full object-cover"
                      />
                    )}
                    {run.actor?.login && <span>{run.actor.login}</span>}
                    <LucideReact.Calendar className="text-gray-400" size={14} />
                    <span>{formatDate(run.created_at)}</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 sm:mt-0 flex items-center space-x-2">
                <LucideReact.Tag className="text-gray-400" size={16} />
                <span className="text-sm text-gray-600 capitalize truncate">{run.event}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
