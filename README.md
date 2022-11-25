Run `bun run bench` and see node is about 65x faster than bun when executing setImmediate

node setImmediate x 1000
15
bun setImmediate x 1000
1002

The timing is very consistent between runs. I see the same speed for nodejs in v14 and v18.
