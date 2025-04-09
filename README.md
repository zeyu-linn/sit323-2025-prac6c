# SIT323_6.2C – Interacting with Kubernetes

This repository contains the configuration and documentation for SIT323_6.2C. In this task, we interact with our previously deployed Node.js application on a Kubernetes cluster (from SIT323_5.1P) using the Kubernetes dashboard and the `kubectl port-forward` command.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Verifying the Deployment](#verifying-the-deployment)
- [Port-Forwarding](#port-forwarding)
- [Accessing the Application](#accessing-the-application)
- [Troubleshooting](#troubleshooting)
- [GitHub Submission](#github-submission)

## Overview

In this task, you will:
- Verify that your application is running on the Kubernetes cluster.
- Use `kubectl port-forward` to forward a local port to the Kubernetes Service.
- Access the application via your web browser using the forwarded port.

## Prerequisites

- **Docker Desktop** with Kubernetes enabled (check under Settings > Kubernetes).
- **Node.js** (for running your app locally before containerization).
- **Git** and **VSCode** (or other editor) for code management.
- **kubectl** – the Kubernetes command-line tool.

Ensure your cluster is up and running:
```bash
kubectl version --client
kubectl cluster-info
```

## Verifying the Deployment

Before port-forwarding, confirm that your application is successfully deployed:

1. **Check Pods:**
   ```bash
   kubectl get pods
   ```
   You should see output similar to:
   ```
   NAME             READY   STATUS    RESTARTS   AGE
   node-web-app     1/1     Running   0          30s
   ```

2. **Check Services:**
   ```bash
   kubectl get services
   ```
   Ensure that your service (e.g., `node-web-service`) exists and shows the correct port settings.

## Port-Forwarding

Use `kubectl port-forward` to forward a local port to your Kubernetes Service. This allows you to access your application locally even if it isn’t exposed externally via a public IP.

Example command (assuming your Service uses port 3000 internally):
```bash
kubectl port-forward service/node-web-service 8080:3000
```
This command maps your local port **8080** to the service's internal port **3000**. **Keep this terminal session running** to maintain the port-forwarding.

## Accessing the Application

Once port-forwarding is active:
1. Open your web browser.
2. Navigate to `http://localhost:8080`.

You should see your Node.js application’s homepage or API response, confirming the successful interaction with Kubernetes via port forwarding.

## Troubleshooting

- **Port-Forward Command Fails:**
  - Verify that the service or pod is running.
  - Check for typos in the service name.
  - Ensure no local firewall blocks the chosen port (8080).

- **Browser Cannot Connect:**
  - Make sure the port-forward session is running.
  - Confirm that the service’s target port matches the container port defined in your deployment.

## GitHub Submission

Include the following files in your repository:
- `Dockerfile`
- `deployment.yaml`
- `service.yaml`
- Your Node.js source code (e.g., `index.js`, `package.json`)

Push your repository to GitHub. The repository URL should follow the format:
```
https://github.com/your-username/sit323-2025-prac6c
```
To push, use:
```bash
git add .
git commit -m "SIT323_6.2"
git push -u origin main
```
