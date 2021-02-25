# FHIR Health Checker Project

## Usage
1. Install Docker for Windows.
2. For networking, go to `C:\Windows\System32\drivers\etc\hosts` and add these two lines.
   --- IF YOU SKIP THIS STEP, DNS Resolution will fail. Use localhost:port instead.
```
127.0.0.1    app.thrivefhirhealth.io
127.0.0.1    api.thrivefhirhealth.io
```

3. Navigate to Directory and run `docker-compose up`
4. Navigate to `app.thrivefhirhealth.io`: CLIENT
   1. NGINX Reverse Proxy: Pass --> `localhost:1452` CLIENT
5. Navigate to `api.thrivefhirhealth.io/greeting`: Web API Endpoint
   1. NGINX Reverse Proxy: Pass --> `localhost:4242/greeting` Web API Endpoint

