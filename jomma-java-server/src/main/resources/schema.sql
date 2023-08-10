CREATE TABLE products
(
    product_id       NUMBER NOT NULL PRIMARY KEY,
    product_name     VARCHAR2 (200 BYTE),
    product_code     VARCHAR2 (50 BYTE),
    unit_price       NUMBER,
    gain_loss        NUMBER,
    year_to_date     NUMBER,
    active_status    NUMBER (1) DEFAULT 1
);

CREATE TABLE transactions
(
    transaction_id    NUMBER NOT NULL PRIMARY KEY,
    user_id           NUMBER,
    product_id        NUMBER ,
    order_amount      NUMBER,
    created_on        TIMESTAMP (6)
);



ALTER TABLE transactions
    ADD CONSTRAINT PRODUCT_R01 FOREIGN KEY (PRODUCT_ID)
        REFERENCES PRODUCTS (PRODUCT_ID)
        ENABLE VALIDATE;
