import { Component } from '@angular/core';
import { IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

@Component({
  standalone: false,
  selector: 'markdown-navigator-demo-mixed-navigation',
  styleUrls: ['./markdown-navigator-demo-mixed-navigation.component.scss'],
  templateUrl: './markdown-navigator-demo-mixed-navigation.component.html',
})
export class MarkdownNavigatorDemoMixedNavigationComponent {
  items: IMarkdownNavigatorItem[] = [
    {
      id: 'welcome',
      title: 'Welcome',
      markdownString: `# Welcome to the Documentation

This is the main documentation hub. From here you can navigate to different sections.

## Quick Links

- [User Management](user-management.md) - Manage users and permissions
- [Data Integration](data-integration.md) - Connect and integrate data sources
- [Analytics Dashboard](analytics.md) - View analytics and reports

## Getting Started

Follow the links above to explore different areas of the application. You can also use the navigation menu on the left.`,
    },
    {
      id: 'user-management',
      url: 'user-management.md',
      title: 'User Management',
      markdownString: `# User Management

Manage users, roles, and permissions in your organization.

## Related Topics

- [Security Settings](security.md) - Configure security policies
- [Data Integration](data-integration.md) - Set up data access permissions

## User Administration

Create and manage user accounts with different permission levels.`,
      children: [
        {
          id: 'roles',
          title: 'Roles & Permissions',
          markdownString: `# Roles & Permissions

Define roles and assign permissions to users.

## Available Roles

- **Administrator** - Full system access
- **Editor** - Can create and edit content
- **Viewer** - Read-only access

## See Also

- [Security Settings](security.md) - Additional security configurations`,
        },
        {
          id: 'user-profiles',
          title: 'User Profiles',
          markdownString: `# User Profiles

Manage individual user profiles and settings.

## Profile Information

- Personal details
- Contact information
- Preferences

Learn more about [Security Settings](security.md) for profile protection.`,
        },
      ],
    },
    {
      id: 'data-integration',
      url: 'data-integration.md',
      title: 'Data Integration',
      markdownString: `# Data Integration

Connect and integrate multiple data sources into your application.

## Supported Sources

- Databases (SQL, NoSQL)
- Cloud storage
- APIs and web services

## Configuration

See [User Management](user-management.md) to configure data access permissions.

Also check out [Analytics Dashboard](analytics.md) to visualize your integrated data.`,
      children: [
        {
          id: 'connectors',
          title: 'Data Connectors',
          markdownString: `# Data Connectors

Available connectors for different data sources.

## Database Connectors

- PostgreSQL
- MySQL
- MongoDB

Related: [Analytics Dashboard](analytics.md) for data visualization`,
        },
      ],
    },
    {
      id: 'analytics',
      url: 'analytics.md',
      title: 'Analytics Dashboard',
      markdownString: `# Analytics Dashboard

View comprehensive analytics and reports for your data.

## Features

- Real-time dashboards
- Custom reports
- Data visualization

## Data Sources

Configure your data sources in [Data Integration](data-integration.md).

Manage access permissions in [User Management](user-management.md).`,
      children: [
        {
          id: 'reports',
          title: 'Reports',
          markdownString: `# Reports

Create and schedule custom reports.

## Report Types

- Summary reports
- Detailed analysis
- Trend reports

Link your data sources from [Data Integration](data-integration.md).`,
        },
        {
          id: 'dashboards',
          title: 'Custom Dashboards',
          markdownString: `# Custom Dashboards

Build personalized dashboards with drag-and-drop widgets.

## Widget Types

- Charts and graphs
- Tables
- KPI metrics

For data access configuration, see [User Management](user-management.md).`,
        },
      ],
    },
    {
      id: 'security',
      url: 'security.md',
      title: 'Security Settings',
      markdownString: `# Security Settings

Configure security policies and authentication methods.

## Authentication

- Single Sign-On (SSO)
- Two-Factor Authentication (2FA)
- API Keys

## Permissions

Configure user permissions in [User Management](user-management.md).

## Data Security

Secure your data connections in [Data Integration](data-integration.md).`,
    },
  ];

  compareWith(o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem): boolean {
    return o1.id === o2.id;
  }
}
