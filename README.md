# Jomma Limited

Jomma is a digital investment marketplace for stocks, bonds, and mutual funds. Invest now, and secure your future.

## Database

We are spinning up the database using docker.

```bash
docker compose up -d

# for destroying the container
docker compose down
```

now, for container status if it is running or health checks, etc.

```bash
docker container ls
```

at least, 5 seconds we have to wait for the database to become healthy.

### DB operations

to work with the database we have to login

```bash
docker exec -it oracle-xe sqlplus jomma_admin/root6969R@XEPDB1
```

Now, we are connected to the user. Next, we have to create tables for the user.

**OR, Run the `jomma-java-server / jomma-node-server` application to create the table for us, and also seed data for us.**

### Structure of the repo

- `jomma-fontend` which serves the front-end part
- `jomma-java-server` which uses Spring Boot to serve APIs
- `jomma-node-server` this is challenging & for fun

- `docker-compose.yaml` for the DB spin-up and User creation.
