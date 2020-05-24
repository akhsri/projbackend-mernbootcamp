var braintree = require("braintree");

var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: "v2p2tjgx6zwv5dd3",
    publicKey: "x9pjtbvjj8cxnp4s",
    privateKey: "0a0d577f49444e584e56d84a5e1029d4"
});


exports.getToken = (req, res) => {
    gateway.clientToken.generate({}, function (err, response) {
        if (err) {
            console.log("error: ", err)
            res.status(500).send(err)
        } else {
            res.send(response)
        }
    });
}

exports.processPayment = (req, res) => {

    let nonceFromTheClient = req.body.paymentMethodNonce
    let amountFromTheClient = req.body.amount

    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,

        options: {
            submitForSettlement: true
        }
    }, function (err, result) {
        if (err) {
            res.status(500).send(error)
        } else {
            res.send(result)
        }

    });

}