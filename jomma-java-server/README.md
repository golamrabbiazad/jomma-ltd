# Jomma Server

## Database Configuration

To run this server database configuration properties followed.

```yaml
spring:
  datasource:
    driver-class-name: oracle.jdbc.driver.OracleDriver
    url: jdbc:oracle:thin:@localhost:1521/XEPDB1
    username: jomma_admin
    password: root6969R
```

### Development

To run the server,

```bash
mvn spring-boot:run

./mvnw spring-boot:run
```

The server is running port <http://localhost:8080>

### API Endpoints

- `/api/v1/products` [GET, POST]

- `/api/v1/transactions` [GET, POST]

the payload for transactions,

```json
[
  {
    "order_amount": 34.5,
    "product_id": { "product_id": 1 }
  }
]
```

- transaction_id will auto-generated.
- user_id is defaulted to 1.
- created_on is generated with LocalDateTime API.

### For Build the project

```bash
mvn clean install

./mvnw clean install
```

Then to run the project,

```bash
java -jar target/jomma-eserver:0.0.1-SNAPSHOT`
```

The production server is running port <http://localhost:8080>

### Docker Compose support

This project contains a Docker Compose file named `compose.yaml`.
In this file, the following services have been defined:

- oracle: [`gvenzl/oracle-xe:latest`](https://hub.docker.com/r/gvenzl/oracle-xe)

Please review the tags of the used images and set them to the same as you're running in production.

## GraalVM Native Support

This project has been configured to let you generate either a lightweight container or a native executable.
It is also possible to run your tests in a native image.

### Lightweight Container with Cloud Native Buildpacks

If you're already familiar with Spring Boot container images support, this is the easiest way to get started.
Docker should be installed and configured on your machine prior to creating the image.

To create the image, run the following goal:

```bash
./mvnw spring-boot:build-image -Pnative
```

Then, you can run the app like any other container:

```
$ docker run --rm -p 8080:8080 jomma-eserver:0.0.1-SNAPSHOT
```

### Executable with Native Build Tools

Use this option if you want to explore more options such as running your tests in a native image.
The GraalVM `native-image` compiler should be installed and configured on your machine.

NOTE: GraalVM 22.3+ is required.

To create the executable, run the following goal:

```
$ ./mvnw native:compile -Pnative
```

Then, you can run the app as follows:

```
$ target/jomma-eserver
```

You can also run your existing tests suite in a native image.
This is an efficient way to validate the compatibility of your application.

To run your existing tests in a native image, run the following goal:

```
$ ./mvnw test -PnativeTest
```
