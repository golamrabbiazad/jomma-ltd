# Jomma Limited

Jomma is a digital investment marketplace for stocks, bonds and mutual funds. Invest now, secure your future.

## Database

Spining up the database using docker.

```bash
docker compose up -d

# for destroy the container
docker compose down
```

now, for container status

```bash
docker container ls
```

### configuration

to configure the database we have to login the root user.

```bash
docker exec -it oracle-xe sqlplus
```

### Oracle XE credentials

- username: sys as sysdba
- password: password

### User creating

```sql
CREATE USER C##JOMMA_ADMIN identified by "root6969R";
GRANT CONNECT, RESOURCE, DBA TO  connect, resource, dba to C##JOMMA_ADMIN;

COMMIT;
```

Now, we're good to go with database operations.

### Structure of the repo

- `jomma-fontend` which serves the fron-end part
- `jomma-java-server` which uses Spring Boot
- `jomma-node-server` this is for fun & challenging project with the same implemention of java project.

- `docker-compose.yaml` for the spin-up the db.