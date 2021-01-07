# experiments-with-codeceptjs

## Prerequisite
    - npm i
## How to run
    - dynamic configuration feature (`npx codeceptjs run --grep "@dynamic-configuration"`)
    - codeceptjs with moon:
      - cd playwright-with-moon
      - git clone https://github.com/aerokube/moon-deploy.git
      - cd moon-deploy
      - kubectl apply -f moon.yaml
      - cd ../..
      - npm run test:moon