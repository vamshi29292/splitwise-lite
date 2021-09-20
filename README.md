# splitwise-lite

## add user
`POST /users`
```{ name: string, email: string } ```

## create transaction
`POST /transaction`
```
{
    description: string,
    amount: number,
    splitType: equal | exact | percentage,
    users: [{
      id: number,
      amountPaid: number,
      userSplit: number | null,
    }]
}
```

## get transaction
`GET /transaction/:id`

## get transactions by user id
`GET /users/:id/transactions`

## get balances
`GET /users/:id/balances`
