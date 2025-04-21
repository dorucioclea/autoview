import { tags } from "typia";
import type * as IAutoView from "@autoview/interface";
namespace Schema {
    /**
     * A Dependabot alert.
    */
    export type dependabot_alert = {
        number: Schema.alert_number;
        /**
         * The state of the Dependabot alert.
        */
        state: "auto_dismissed" | "dismissed" | "fixed" | "open";
        /**
         * Details for the vulnerable dependency.
        */
        dependency: {
            "package"?: Schema.dependabot_alert_package;
            /**
             * The full path to the dependency manifest file, relative to the root of the repository.
            */
            manifest_path?: string;
            /**
             * The execution scope of the vulnerable dependency.
            */
            scope?: "development" | "runtime" | null;
            /**
             * The vulnerable dependency's relationship to your project.
             *
             * > [!NOTE]
             * > We are rolling out support for dependency relationship across ecosystems. This value will be "unknown" for all dependencies in unsupported ecosystems.
             *
            */
            relationship?: "unknown" | "direct" | "transitive" | null;
        };
        security_advisory: Schema.dependabot_alert_security_advisory;
        security_vulnerability: Schema.dependabot_alert_security_vulnerability;
        url: Schema.alert_url;
        html_url: Schema.alert_html_url;
        created_at: Schema.alert_created_at;
        updated_at: Schema.alert_updated_at;
        dismissed_at: Schema.alert_dismissed_at;
        dismissed_by: Schema.nullable_simple_user;
        /**
         * The reason that the alert was dismissed.
        */
        dismissed_reason: "fix_started" | "inaccurate" | "no_bandwidth" | "not_used" | "tolerable_risk" | null;
        /**
         * An optional comment associated with the alert's dismissal.
        */
        dismissed_comment: (string & tags.MaxLength<280>) | null;
        fixed_at: Schema.alert_fixed_at;
        auto_dismissed_at?: Schema.alert_auto_dismissed_at;
    };
    /**
     * The security alert number.
    */
    export type alert_number = number & tags.Type<"int32">;
    /**
     * Details for the vulnerable package.
    */
    export type dependabot_alert_package = {
        /**
         * The package's language or package management ecosystem.
        */
        ecosystem: string;
        /**
         * The unique package name within its ecosystem.
        */
        name: string;
    };
    /**
     * Details for the GitHub Security Advisory.
    */
    export type dependabot_alert_security_advisory = {
        /**
         * The unique GitHub Security Advisory ID assigned to the advisory.
        */
        ghsa_id: string;
        /**
         * The unique CVE ID assigned to the advisory.
        */
        cve_id: string | null;
        /**
         * A short, plain text summary of the advisory.
        */
        summary: string;
        /**
         * A long-form Markdown-supported description of the advisory.
        */
        description: string;
        /**
         * Vulnerable version range information for the advisory.
        */
        vulnerabilities: Schema.dependabot_alert_security_vulnerability[];
        /**
         * The severity of the advisory.
        */
        severity: "low" | "medium" | "high" | "critical";
        /**
         * Details for the advisory pertaining to the Common Vulnerability Scoring System.
        */
        cvss: {
            /**
             * The overall CVSS score of the advisory.
            */
            score: number;
            /**
             * The full CVSS vector string for the advisory.
            */
            vector_string: string | null;
        };
        cvss_severities?: Schema.cvss_severities;
        epss?: Schema.security_advisory_epss;
        /**
         * Details for the advisory pertaining to Common Weakness Enumeration.
        */
        cwes: {
            /**
             * The unique CWE ID.
            */
            cwe_id: string;
            /**
             * The short, plain text name of the CWE.
            */
            name: string;
        }[];
        /**
         * Values that identify this advisory among security information sources.
        */
        identifiers: {
            /**
             * The type of advisory identifier.
            */
            type: "CVE" | "GHSA";
            /**
             * The value of the advisory identifer.
            */
            value: string;
        }[];
        /**
         * Links to additional advisory information.
        */
        references: {
            /**
             * The URL of the reference.
            */
            url: string;
        }[];
        /**
         * The time that the advisory was published in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
        */
        published_at: string;
        /**
         * The time that the advisory was last modified in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
        */
        updated_at: string;
        /**
         * The time that the advisory was withdrawn in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
        */
        withdrawn_at: (string & tags.Format<"date-time">) | null;
    };
    /**
     * Details pertaining to one vulnerable version range for the advisory.
    */
    export type dependabot_alert_security_vulnerability = {
        "package": Schema.dependabot_alert_package;
        /**
         * The severity of the vulnerability.
        */
        severity: "low" | "medium" | "high" | "critical";
        /**
         * Conditions that identify vulnerable versions of this vulnerability's package.
        */
        vulnerable_version_range: string;
        /**
         * Details pertaining to the package version that patches this vulnerability.
        */
        first_patched_version: {
            /**
             * The package version that patches this vulnerability.
            */
            identifier: string;
        } | null;
    };
    export type cvss_severities = {
        cvss_v3?: {
            /**
             * The CVSS 3 vector string.
            */
            vector_string: string | null;
            /**
             * The CVSS 3 score.
            */
            score: (number & tags.Minimum<0> & tags.Maximum<10>) | null;
        } | null;
        cvss_v4?: {
            /**
             * The CVSS 4 vector string.
            */
            vector_string: string | null;
            /**
             * The CVSS 4 score.
            */
            score: (number & tags.Minimum<0> & tags.Maximum<10>) | null;
        } | null;
    } | null;
    /**
     * The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss).
    */
    export type security_advisory_epss = {
        percentage?: number & tags.Minimum<0> & tags.Maximum<100>;
        percentile?: number & tags.Minimum<0> & tags.Maximum<100>;
    } | null;
    /**
     * The REST API URL of the alert resource.
    */
    export type alert_url = string;
    /**
     * The GitHub URL of the alert resource.
    */
    export type alert_html_url = string;
    /**
     * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
    */
    export type alert_created_at = string;
    /**
     * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
    */
    export type alert_updated_at = string;
    /**
     * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
    */
    export type alert_dismissed_at = (string & tags.Format<"date-time">) | null;
    /**
     * A GitHub user.
     *
     * @title Simple User
    */
    export type nullable_simple_user = {
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
    } | null;
    /**
     * The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
    */
    export type alert_fixed_at = (string & tags.Format<"date-time">) | null;
    /**
     * The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
    */
    export type alert_auto_dismissed_at = (string & tags.Format<"date-time">) | null;
}
type IAutoViewTransformerInputType = Schema.dependabot_alert[];
export function transform($input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
    return visualizeData($input);
}



function visualizeData(input: IAutoViewTransformerInputType): IAutoView.IAutoViewComponentProps {
  // If there are no alerts, display a simple message
  if (input.length === 0) {
    return {
      type: 'Text',
      variant: 'body1',
      color: 'secondary',
      content: 'No Dependabot alerts found.',
    } as IAutoView.IAutoViewTextProps;
  }

  // Map severity → raw icon color (IconProps accepts only raw palette names)
  const severityIconColorMap: Record<string, IAutoView.IAutoViewIconProps['color']> = {
    low: 'blue',
    medium: 'yellow',
    high: 'orange',
    critical: 'red',
  };

  // Map severity → semantic chip color
  const severityChipColorMap: Record<string, IAutoView.IAutoViewChipProps['color']> = {
    low: 'info',
    medium: 'warning',
    high: 'error',
    critical: 'error',
  };

  // Map alert state → semantic chip color
  const stateChipColorMap: Record<string, IAutoView.IAutoViewChipProps['color']> = {
    open: 'primary',
    fixed: 'success',
    dismissed: 'gray',
    auto_dismissed: 'gray',
  };

  // Build one ListItem per alert for a compact, responsive list
  const listItems: IAutoView.IAutoViewListItemProps[] = input.map((alert) => {
    const sev = alert.security_advisory.severity;
    const st = alert.state;
    // Convert ISO date to a user‐friendly format
    const createdDate = new Date(alert.created_at).toLocaleDateString();
    // Make the state label human‐readable (e.g. "auto_dismissed" → "auto dismissed")
    const stateLabel = st.replace(/_/g, ' ');

    return {
      type: 'ListItem',
      // Main title is the advisory summary
      title: alert.security_advisory.summary,
      // Show package name and creation date in the description
      description: `Package: ${alert.dependency["package"]?.name ?? 'unknown'} • Created: ${createdDate}`,
      // Leading icon to indicate this is a vulnerability
      startElement: {
        type: 'Icon',
        id: 'bug',
        color: severityIconColorMap[sev] ?? 'gray',
        size: 20,
      },
      // Trailing chips for severity and current state
      endElement: [
        {
          type: 'Chip',
          label: sev.toUpperCase(),
          color: severityChipColorMap[sev] ?? 'secondary',
          variant: 'filled',
          size: 'small',
        },
        {
          type: 'Chip',
          label: stateLabel,
          color: stateChipColorMap[st] ?? 'gray',
          variant: 'outlined',
          size: 'small',
        },
      ],
    };
  });

  // Wrap everything in a List for a responsive, scrollable view
  return {
    type: 'List',
    childrenProps: listItems,
  } as IAutoView.IAutoViewListProps;
}
