import { Component } from '@angular/core';
import {
  IMarkdownNavigatorItem,
  IMarkdownNavigatorLabels,
} from '@covalent/markdown-navigator';

@Component({
  standalone: false,
  selector: 'markdown-navigator-demo-multilanguage',
  styleUrls: ['./markdown-navigator-demo-multilanguage.component.scss'],
  templateUrl: './markdown-navigator-demo-multilanguage.component.html',
})
export class MarkdownNavigatorDemoMultilanguageComponent {
  currentLanguage: 'en' | 'es' | 'ja' | 'de' = 'en';

  // English items
  englishItems: IMarkdownNavigatorItem[] = [
    {
      id: 'getting-started',
      title: 'Getting Started Guide',
      description: 'Learn the basics of using the platform',
      icon: 'rocket_launch',
      markdownString: `# Getting Started Guide

Welcome! This guide will help you understand the core concepts and features.

## What You'll Learn
- Platform navigation
- Creating your first project
- Understanding the dashboard`,
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      description: 'Step-by-step learning resources',
      icon: 'school',
      markdownString: `# Tutorials

Hands-on tutorials to build your skills.`,
      children: [
        {
          id: 'beginner',
          title: 'Beginner Tutorial',
          markdownString: `# Beginner Tutorial

Perfect for first-time users. Learn the fundamentals step by step.`,
        },
        {
          id: 'intermediate',
          title: 'Intermediate Techniques',
          markdownString: `# Intermediate Techniques

Ready to level up? Explore advanced features and workflows.`,
        },
      ],
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      description: 'Complete API documentation',
      icon: 'api',
      markdownString: `# API Reference

Comprehensive reference for all available APIs and endpoints.

## Available Endpoints
- Authentication
- Data Management
- Analytics`,
    },
  ];

  // Spanish items
  spanishItems: IMarkdownNavigatorItem[] = [
    {
      id: 'getting-started',
      title: 'Guía de inicio',
      description: 'Aprenda los conceptos básicos de la plataforma',
      icon: 'rocket_launch',
      markdownString: `# Guía de inicio

¡Bienvenido! Esta guía le ayudará a comprender las características principales.

## Lo que aprenderá
- Navegación de la plataforma
- Crear su primer proyecto
- Comprender el panel de control`,
    },
    {
      id: 'tutorials',
      title: 'Tutoriales',
      description: 'Recursos de aprendizaje paso a paso',
      icon: 'school',
      markdownString: `# Tutoriales

Tutoriales prácticos para desarrollar sus habilidades.`,
      children: [
        {
          id: 'beginner',
          title: 'Tutorial para principiantes',
          markdownString: `# Tutorial para principiantes

Perfecto para usuarios nuevos. Aprenda los fundamentos paso a paso.`,
        },
        {
          id: 'intermediate',
          title: 'Técnicas intermedias',
          markdownString: `# Técnicas intermedias

¿Listo para avanzar? Explore características y flujos de trabajo avanzados.`,
        },
      ],
    },
    {
      id: 'api-reference',
      title: 'Referencia de API',
      description: 'Documentación completa de la API',
      icon: 'api',
      markdownString: `# Referencia de API

Referencia completa para todas las API y puntos finales disponibles.

## Puntos finales disponibles
- Autenticación
- Gestión de datos
- Análisis`,
    },
  ];

  // Japanese items
  japaneseItems: IMarkdownNavigatorItem[] = [
    {
      id: 'getting-started',
      title: '初めてのガイド',
      description: 'プラットフォームの基本を学ぶ',
      icon: 'rocket_launch',
      markdownString: `# 初めてのガイド

ようこそ！このガイドは、コア機能の理解を助けます。

## 学習内容
- プラットフォームのナビゲーション
- 最初のプロジェクトの作成
- ダッシュボードの理解`,
    },
    {
      id: 'tutorials',
      title: 'チュートリアル',
      description: 'ステップバイステップの学習リソース',
      icon: 'school',
      markdownString: `# チュートリアル

スキルを構築するための実践的なチュートリアル。`,
      children: [
        {
          id: 'beginner',
          title: '初心者向けチュートリアル',
          markdownString: `# 初心者向けチュートリアル

初めてのユーザーに最適です。基礎をステップバイステップで学びます。`,
        },
        {
          id: 'intermediate',
          title: '中級テクニック',
          markdownString: `# 中級テクニック

レベルアップの準備はできましたか？高度な機能とワークフローを探索します。`,
        },
      ],
    },
    {
      id: 'api-reference',
      title: 'APIリファレンス',
      description: '完全なAPIドキュメント',
      icon: 'api',
      markdownString: `# APIリファレンス

利用可能なすべてのAPIとエンドポイントの包括的なリファレンス。

## 利用可能なエンドポイント
- 認証
- データ管理
- 分析`,
    },
  ];

  // German items
  germanItems: IMarkdownNavigatorItem[] = [
    {
      id: 'getting-started',
      title: 'Erste Schritte',
      description: 'Lernen Sie die Grundlagen der Plattform',
      icon: 'rocket_launch',
      markdownString: `# Erste Schritte

Willkommen! Dieser Leitfaden hilft Ihnen, die Kernfunktionen zu verstehen.

## Was Sie lernen werden
- Plattform-Navigation
- Ihr erstes Projekt erstellen
- Das Dashboard verstehen`,
    },
    {
      id: 'tutorials',
      title: 'Anleitungen',
      description: 'Schritt-für-Schritt-Lernressourcen',
      icon: 'school',
      markdownString: `# Anleitungen

Praktische Anleitungen zum Aufbau Ihrer Fähigkeiten.`,
      children: [
        {
          id: 'beginner',
          title: 'Anfänger-Tutorial',
          markdownString: `# Anfänger-Tutorial

Perfekt für Erstbenutzer. Lernen Sie die Grundlagen Schritt für Schritt.`,
        },
        {
          id: 'intermediate',
          title: 'Fortgeschrittene Techniken',
          markdownString: `# Fortgeschrittene Techniken

Bereit für den nächsten Schritt? Erkunden Sie erweiterte Funktionen und Workflows.`,
        },
      ],
    },
    {
      id: 'api-reference',
      title: 'API-Referenz',
      description: 'Vollständige API-Dokumentation',
      icon: 'api',
      markdownString: `# API-Referenz

Umfassende Referenz für alle verfügbaren APIs und Endpunkte.

## Verfügbare Endpunkte
- Authentifizierung
- Datenverwaltung
- Analytik`,
    },
  ];

  get items(): IMarkdownNavigatorItem[] {
    switch (this.currentLanguage) {
      case 'es':
        return this.spanishItems;
      case 'ja':
        return this.japaneseItems;
      case 'de':
        return this.germanItems;
      default:
        return this.englishItems;
    }
  }

  get labels(): IMarkdownNavigatorLabels {
    switch (this.currentLanguage) {
      case 'es':
        return {
          goHome: 'Inicio',
          goBack: 'Volver',
          emptyState: 'No hay elementos para mostrar',
        };
      case 'ja':
        return {
          goHome: 'ホーム',
          goBack: '戻る',
          emptyState: '表示する項目がありません',
        };
      case 'de':
        return {
          goHome: 'Startseite',
          goBack: 'Zurück',
          emptyState: 'Keine Elemente anzuzeigen',
        };
      default:
        return {
          goHome: 'Home',
          goBack: 'Go back',
          emptyState: 'No item(s) to display',
        };
    }
  }

  changeLanguage(lang: 'en' | 'es' | 'ja' | 'de'): void {
    this.currentLanguage = lang;
  }
}
