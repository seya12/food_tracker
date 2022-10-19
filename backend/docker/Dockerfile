#docker build -t tracker .
FROM mysql
ENV MYSQL_ROOT_PASSWORD 123
ENV MYSQL_DATABASE tracker
COPY import.sql /docker-entrypoint-initdb.d/
CMD ["--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"]