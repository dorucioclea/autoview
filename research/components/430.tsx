import { tags } from "typia";
import React from "react";
export namespace AutoViewInputSubTypes {
    export namespace IApiOrgsCodeSecurityConfigurationsDefaults {
        export type PutResponse = {
            /**
             * Specifies which types of repository this security configuration is applied to by default.
            */
            default_for_new_repos?: "all" | "none" | "private_and_internal" | "public";
            configuration?: AutoViewInputSubTypes.code_security_configuration;
        };
    }
    /**
     * A code security configuration
    */
    export type code_security_configuration = {
        /**
         * The ID of the code security configuration
        */
        id?: number & tags.Type<"int32">;
        /**
         * The name of the code security configuration. Must be unique within the organization.
        */
        name?: string;
        /**
         * The type of the code security configuration.
        */
        target_type?: "global" | "organization" | "enterprise";
        /**
         * A description of the code security configuration
        */
        description?: string;
        /**
         * The enablement status of GitHub Advanced Security
        */
        advanced_security?: "enabled" | "disabled";
        /**
         * The enablement status of Dependency Graph
        */
        dependency_graph?: "enabled" | "disabled" | "not_set";
        /**
         * The enablement status of Automatic dependency submission
        */
        dependency_graph_autosubmit_action?: "enabled" | "disabled" | "not_set";
        /**
         * Feature options for Automatic dependency submission
        */
        dependency_graph_autosubmit_action_options?: {
            /**
             * Whether to use runners labeled with 'dependency-submission' or standard GitHub runners.
            */
            labeled_runners?: boolean;
        };
        /**
         * The enablement status of Dependabot alerts
        */
        dependabot_alerts?: "enabled" | "disabled" | "not_set";
        /**
         * The enablement status of Dependabot security updates
        */
        dependabot_security_updates?: "enabled" | "disabled" | "not_set";
        /**
         * The enablement status of code scanning default setup
        */
        code_scanning_default_setup?: "enabled" | "disabled" | "not_set";
        /**
         * Feature options for code scanning default setup
        */
        code_scanning_default_setup_options?: {
            /**
             * Whether to use labeled runners or standard GitHub runners.
            */
            runner_type?: "standard" | "labeled" | "not_set" | null;
            /**
             * The label of the runner to use for code scanning when runner_type is 'labeled'.
            */
            runner_label?: string | null;
        } | null;
        /**
         * The enablement status of code scanning delegated alert dismissal
        */
        code_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set";
        /**
         * The enablement status of secret scanning
        */
        secret_scanning?: "enabled" | "disabled" | "not_set";
        /**
         * The enablement status of secret scanning push protection
        */
        secret_scanning_push_protection?: "enabled" | "disabled" | "not_set";
        /**
         * The enablement status of secret scanning delegated bypass
        */
        secret_scanning_delegated_bypass?: "enabled" | "disabled" | "not_set";
        /**
         * Feature options for secret scanning delegated bypass
        */
        secret_scanning_delegated_bypass_options?: {
            /**
             * The bypass reviewers for secret scanning delegated bypass
            */
            reviewers?: {
                /**
                 * The ID of the team or role selected as a bypass reviewer
                */
                reviewer_id: number & tags.Type<"int32">;
                /**
                 * The type of the bypass reviewer
                */
                reviewer_type: "TEAM" | "ROLE";
            }[];
        };
        /**
         * The enablement status of secret scanning validity checks
        */
        secret_scanning_validity_checks?: "enabled" | "disabled" | "not_set";
        /**
         * The enablement status of secret scanning non-provider patterns
        */
        secret_scanning_non_provider_patterns?: "enabled" | "disabled" | "not_set";
        /**
         * The enablement status of Copilot secret scanning
        */
        secret_scanning_generic_secrets?: "enabled" | "disabled" | "not_set";
        /**
         * The enablement status of secret scanning delegated alert dismissal
        */
        secret_scanning_delegated_alert_dismissal?: "enabled" | "disabled" | "not_set";
        /**
         * The enablement status of private vulnerability reporting
        */
        private_vulnerability_reporting?: "enabled" | "disabled" | "not_set";
        /**
         * The enforcement status for a security configuration
        */
        enforcement?: "enforced" | "unenforced";
        /**
         * The URL of the configuration
        */
        url?: string;
        /**
         * The URL of the configuration
        */
        html_url?: string;
        created_at?: string & tags.Format<"date-time">;
        updated_at?: string & tags.Format<"date-time">;
    };
}
export type AutoViewInput = AutoViewInputSubTypes.IApiOrgsCodeSecurityConfigurationsDefaults.PutResponse;



// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const config = value.configuration;
  const defaultFor = value.default_for_new_repos ? 
    value.default_for_new_repos.replace(/_/g, ' ') : 'Not specified';

  const formatDate = (iso?: string) =>
    iso
      ? new Date(iso).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : '—';

  type Status = 'enabled' | 'disabled' | 'not_set';
  const getBadgeClasses = (status?: Status) => {
    switch (status) {
      case 'enabled':
        return 'bg-green-100 text-green-800';
      case 'disabled':
        return 'bg-red-100 text-red-800';
      case 'not_set':
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const Badge = ({
    label,
    status,
  }: {
    label: string;
    status?: Status;
  }) => (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${getBadgeClasses(
        status,
      )}`}
    >
      {label}
    </span>
  );

  // Prepare feature-status list
  const features: { label: string; status?: Status }[] = config
    ? [
        { label: 'Advanced Security', status: config.advanced_security },
        { label: 'Dependency Graph', status: config.dependency_graph },
        {
          label: 'Auto Dependency Submit',
          status: config.dependency_graph_autosubmit_action,
        },
        { label: 'Dependabot Alerts', status: config.dependabot_alerts },
        {
          label: 'Dependabot Security Updates',
          status: config.dependabot_security_updates,
        },
        {
          label: 'Code Scanning Setup',
          status: config.code_scanning_default_setup,
        },
        {
          label: 'Delegated Alert Dismissal',
          status: config.code_scanning_delegated_alert_dismissal,
        },
        { label: 'Secret Scanning', status: config.secret_scanning },
        {
          label: 'Push Protection',
          status: config.secret_scanning_push_protection,
        },
        {
          label: 'Delegated Bypass',
          status: config.secret_scanning_delegated_bypass,
        },
        {
          label: 'Validity Checks',
          status: config.secret_scanning_validity_checks,
        },
        {
          label: 'Non-Provider Patterns',
          status: config.secret_scanning_non_provider_patterns,
        },
        {
          label: 'Generic Secrets',
          status: config.secret_scanning_generic_secrets,
        },
        {
          label: 'Delegated Alert Dismissal',
          status: config.secret_scanning_delegated_alert_dismissal,
        },
        {
          label: 'Vulnerability Reporting',
          status: config.private_vulnerability_reporting,
        },
      ]
    : [];

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {config?.name ?? 'Unnamed Configuration'}
          </h2>
          <p className="text-sm text-gray-500 capitalize">
            {config?.target_type ?? 'Type not set'}
          </p>
        </div>
        <span
          className={`mt-2 sm:mt-0 inline-block px-2 py-1 text-xs font-semibold rounded ${
            config?.enforcement === 'enforced'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {config?.enforcement === 'enforced'
            ? 'Enforced'
            : 'Unenforced'}
        </span>
      </div>

      {/* Description */}
      {config?.description && (
        <p className="mt-3 text-gray-600 text-sm line-clamp-3">
          {config.description}
        </p>
      )}

      {/* Default-for section */}
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-700 mb-1">
          Default for New Repos
        </h3>
        <p className="text-sm text-gray-800 capitalize">{defaultFor}</p>
      </div>

      {/* Feature badges */}
      {features.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Security Features
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {features.map((f, idx) => (
              <Badge key={idx} label={f.label} status={f.status} />
            ))}
          </div>
        </div>
      )}

      {/* Extra details */}
      <div className="mt-4 space-y-2 text-sm text-gray-600">
        {config?.dependency_graph_autosubmit_action_options && (
          <p>
            <span className="font-medium">Labeled Runners:</span>{' '}
            {config.dependency_graph_autosubmit_action_options.labeled_runners
              ? 'Yes'
              : 'No'}
          </p>
        )}
        {config?.code_scanning_default_setup_options && (
          <p>
            <span className="font-medium">Scan Runner:</span>{' '}
            {config.code_scanning_default_setup_options.runner_type ?? '—'}
            {config.code_scanning_default_setup_options.runner_label
              ? ` (${config.code_scanning_default_setup_options.runner_label})`
              : ''}
          </p>
        )}
        {config?.secret_scanning_delegated_bypass_options?.reviewers && (
          <p>
            <span className="font-medium">Bypass Reviewers:</span>{' '}
            {config.secret_scanning_delegated_bypass_options.reviewers.length}
          </p>
        )}
        <p>
          <span className="font-medium">Created:</span>{' '}
          {formatDate(config?.created_at)}
        </p>
        <p>
          <span className="font-medium">Updated:</span>{' '}
          {formatDate(config?.updated_at)}
        </p>
      </div>
    </div>
  );
}
