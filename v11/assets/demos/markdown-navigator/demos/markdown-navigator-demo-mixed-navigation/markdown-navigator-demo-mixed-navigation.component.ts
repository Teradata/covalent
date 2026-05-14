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
      title: 'Welcome Guide',
      description: 'Getting started with the platform',
      icon: 'home',
      markdownString: `# Welcome Guide

Welcome to our documentation! This guide will help you get started.

## Quick Links

- [User Management](user-management.md) - Learn how to manage users
- [Data Integration](data-integration.md) - Connect your data sources
- [Analytics Dashboard](analytics.md) - View your analytics

## What You'll Learn

This documentation covers all aspects of the platform, from basic setup to advanced features.

Navigate using the menu on the left or click the links above to explore specific topics.`,
    },
    {
      id: 'user-management',
      title: 'User Management',
      description: 'Manage users and permissions',
      icon: 'people',
      markdownString: `# User Management

Comprehensive guide to managing users in your organization.

## Topics

- [Creating Users](create-users.md) - Add new users to your team
- [Roles & Permissions](roles.md) - Configure access control
- [User Groups](user-groups.md) - Organize users into groups

## Overview

User management is a critical part of platform administration. You can:

- Add and remove users
- Assign roles and permissions
- Create custom user groups
- Monitor user activity

For security best practices, see [Security Guide](security.md).`,
      children: [
        {
          id: 'create-users',
          title: 'Creating Users',
          icon: 'person_add',
          markdownString: `# Creating Users

Step-by-step guide to adding users to your organization.

## Steps

1. Navigate to Users section
2. Click "Add User" button
3. Fill in user details
4. Assign initial [roles](roles.md)
5. Send invitation email

## Best Practices

- Always verify email addresses
- Assign appropriate [permissions](roles.md) from the start
- Use [user groups](user-groups.md) for easier management

Need help with permissions? Check out [Roles & Permissions](roles.md).`,
        },
        {
          id: 'roles',
          title: 'Roles & Permissions',
          icon: 'admin_panel_settings',
          markdownString: `# Roles & Permissions

Configure access control for your users.

## Available Roles

- **Admin** - Full system access
- **Editor** - Can create and edit content
- **Viewer** - Read-only access

## Permission Groups

You can also create custom [user groups](user-groups.md) with specific permissions.

For user creation workflow, see [Creating Users](create-users.md).`,
        },
        {
          id: 'user-groups',
          title: 'User Groups',
          icon: 'groups',
          markdownString: `# User Groups

Organize users into groups for easier management.

## Benefits

- Simplify permission management
- Bulk operations on multiple users
- Better organization

## Related Topics

- Back to [User Management](user-management.md)
- Learn about [Roles & Permissions](roles.md)
- See how to [Create Users](create-users.md)`,
        },
      ],
    },
    {
      id: 'data-integration',
      title: 'Data Integration',
      description: 'Connect and sync data sources',
      icon: 'integration_instructions',
      markdownString: `# Data Integration

Connect your data sources to the platform.

## Supported Sources

- Databases (SQL, NoSQL)
- Cloud storage (S3, Azure, GCS)
- APIs and webhooks
- File uploads

## Getting Started

1. Choose your data source
2. Configure [connection settings](connection-settings.md)
3. Map your data fields
4. Test the [connection](test-connection.md)
5. Schedule sync intervals

For visualization, check out [Analytics Dashboard](analytics.md).`,
      children: [
        {
          id: 'connection-settings',
          title: 'Connection Settings',
          icon: 'settings_ethernet',
          markdownString: `# Connection Settings

Configure your data source connections.

## Configuration Steps

- Enter connection credentials
- Set timeout values
- Configure retry logic
- Enable SSL/TLS if needed

After configuration, proceed to [test your connection](test-connection.md).`,
        },
        {
          id: 'test-connection',
          title: 'Test Connection',
          icon: 'cable',
          markdownString: `# Test Connection

Verify your data source is properly connected.

## Testing Process

1. Click "Test Connection" button
2. Wait for validation
3. Review connection logs
4. Fix any errors

Once connected, go back to [Data Integration](data-integration.md) to complete setup.`,
        },
      ],
    },
    {
      id: 'analytics',
      title: 'Analytics Dashboard',
      description: 'Visualize and analyze your data',
      icon: 'analytics',
      markdownString: `# Analytics Dashboard

Powerful analytics and visualization tools.

## Features

- Real-time data visualization
- Custom dashboard creation
- Interactive charts and graphs
- Export reports

## Dashboard Components

- Metrics widgets
- Time-series charts
- Data tables
- Custom filters

Data comes from [Data Integration](data-integration.md) sources.

Need help? Check our [Welcome Guide](welcome.md).`,
    },
    {
      id: 'security',
      title: 'Security Guide',
      description: 'Security best practices',
      icon: 'security',
      markdownString: `# Security Guide

Keep your platform secure with these best practices.

## Security Topics

- Authentication methods
- Password policies  
- Two-factor authentication
- API key management

## User Security

Properly configured [User Management](user-management.md) is essential for security.

Make sure to review [Roles & Permissions](roles.md) regularly.`,
    },
  ];
}
