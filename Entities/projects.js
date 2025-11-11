export const projects = [
  {
    id: 'resilient-infrastructure',
    name: 'Resilient Infrastructure Overhaul',
    description:
      'Modernised CI/CD and infrastructure for a fintech platform by introducing GitOps workflows, Terraform modules, and progressive delivery.',
    impact: 'Decreased recovery time from 35 minutes to 5 minutes and enabled daily deployments.',
    stack: ['Terraform', 'ArgoCD', 'Kubernetes']
  },
  {
    id: 'observability-suite',
    name: 'Unified Observability Platform',
    description:
      'Implemented distributed tracing, log aggregation, and golden signals dashboards for a global media business.',
    impact: 'Reduced mean-time-to-detect by 47% and unlocked proactive incident response.',
    stack: ['OpenTelemetry', 'Grafana', 'Loki', 'Prometheus']
  },
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Accelerator',
    description:
      'Lift-and-improved migration of legacy workloads to AWS with blue/green deployments and automated scaling policies.',
    impact: 'Cut infrastructure spend by 32% while improving availability and compliance posture.',
    stack: ['AWS', 'CloudFormation', 'Terraform']
  }
];
