CREATE DOMAIN EMAIL AS citext CHECK ( value ~ '^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$' );

create table product (
	id UUID PRIMARY KEY,
    image VARCHAR(100),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10,2) CHECK(price > 0) NOT NULL 
);

create table customer (
    id UUID PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    phone_number VARCHAR(20) NOT NULL UNIQUE,
    address VARCHAR(300) NOT NULL,
    email_id EMAIL NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
)

create table cart_item (
    id UUID PRIMARY KEY,
    quantity SMALLINT NOT NULL DEFAULT 1,
    customerid UUID REFERENCES customer(id),
    productid UUID REFERENCES product(id),
    status boolean DEFAULT ACTIVE 
)

CREATE TYPE PAYMENT_TYPE AS ENUM ('UPI', 'NET_BANKING', 'COD', 'DEBIT_CARD');
CREATE TYPE PAYMENT_STATUS AS ENUM ('REJECTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

create table orders (
    id UUID PRIMARY KEY,
    date TIMESTAMP NOT NULL,
    orderPaymentType PAYMENT_TYPE NOT NULL,
    orderPaymentStatus PAYMENT_STATUS DEFAULT 'IN_PROGRESS',
    customerid UUID REFERENCES customer(id)
)

create table order_item (
    id UUID PRIMARY KEY,
    image VARCHAR(100),
    name VARCHAR(100) NOT NULL,
    description text,
    price numeric(10,2) CHECK (price > 0) NOT NULL,
    qty smallint NOT NULL CHECK (qty > 0),
    orderid UUID REFERENCES orders(id)
)

