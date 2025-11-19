# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAqWGgKg3h7oZNAuqaTvY3
+t5OsAxv1e3/yziggC/URVHcq2Y2IOBpIAhYVnHtmKYNYX/Kgiq00EEhduiqg6NB
LUmz5uiz/cxGQyVT6I+8Nf6EEI5TuurP13Uqh1eOf4ZnwTe1zKvAPqHKRMuxNl8d
uZLpZaj9qCPlgKTyg5qthBSK+33cXhtwRt/m3f9VzymXMmEkaK9fd0DJYRWbs683
I5+XQ7oHKyB5c6HG3omGVjGaaG41XBZRS4FvjAiFL7kIBRf678Jq9iChNsfyr/TP
7xpLLu1IBa/xCgpNfmptPqt03ctBsMPQOEGA0zidVwGOQOdfbUyp+WJLzsaJkvFJ
sooNa7LR+ofki9q5KuZFJ0q2/Smdm8I3dssm/Cg0SGG+bLVzYCHSLkjlddhQz7WI
ZfF04bUg9zGxMHGCcNBYRVEHj2TL9Joc5QU/4IvIt7ZNq/M3k8vbdxQs1lC4aSPi
yDLNXtrhUyAQL1u93uOpQQjBbMFakUm0tG27tNXmCylrAgMBAAE=

My Partner's Key:MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEArN/32gx9dj/xeVLCYwdNHmkOwXkft6N2XpqlM/kZ4zzvHPVfL2TBcFfohvTKYBUAnbEpyhvgtWMTzoGTsgbv
BRDwEzQ0Kv0zCaKwgk6v5P+Zx/x24EmSZmEJKr4qjwl7jYIoHna0DwxTqNbeu1r9
SKjGZfd3my45EwTDWBPS/y3VnWHy28e7leMCzlZBOQAQ+agk+39efEssZdSqBckS
YEQcz4QRpA7cUnxwhXTL3mtnBbKcbUkmdxbmpQVlDRse06r3wR4CNexJ+orJCb6H
YVruzasV7qo/JcDpoMlBeI1mKIafSfn+C0Tp93tItzdjo/euncbPYVL2AJPVdcIi
gGdXdjQIwsZmJuVgLuxrzqfyYpMas2MzJjDAJEPDdoMYJJf/lT3fhtXyCwGiA1Hc
RskWy9U1w8ZBUSJfPTvZg6Wzy6WpoCppQYD+f1uUqBrHm476qn1go4CfD/pKSMJM
keORu+LdFOoLq49UT2mF8Yq3BvrjNOv+yBm2ocELHfj/AgMBAAE=

Our initial shared key:7

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| VBIXK?          |Ciper?           |  7  |
|Vjcvu pqv jqy aqw urgnn earjgt. |Thats not how you spell cypher|  2  |
|VG’F PVCURE      |IT'S CIPHER      |  13 |
|Nbunm qbun C mucx|Thats what I said|  20 |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:
P3DTP7

Using the ASCII table, convert these five(think it should be six) characters to binary (if necessary,include leading zeroes so that each character is 8 bits): 
01010000 00110011 01000100 01010100 01010000 00110111

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Graham]
    Destination: [Madeline]  
    Sequence: 1/3
    Data: [01010000] [00110011]
    =========
    Packet 2:

    Source: [Graham]
    Destination: [Madeline]
    Sequence: 2/3 
    Data: [01000100] [01010100]
    =========
    Packet 3:

    Source: [Graham]
    Destination: [Madeline]
    Sequence: 3/3
    Data: [01010000] [001101116]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
 Symmetric encryption uses a shared key/secret while asymmetric encryption uses a public key and a private key. Asymmetric encryption was used when we used each other's public keys to encrypt messages, and symmetric encryption was used when we were using Caesar's cipher.
- Why is it important that this protocol uses a new key for each message?
 To try and prevent someone from cracking the code and allowing them to view the messages.
- Why is it important that you never share your secret key? 
Because someone could read your messages.
- In the transport layer, do these messages use TCP or UDP? Why?
TCP because you are sending messages which are not live and not on something like a call.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
The packets are told where to go and will bounce around using other computers' maps of the internet to find their way to the desired destination.
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see? The decrypted message, where it is sent from, where it is sent to and if you are using a public key they can obtain that too.

