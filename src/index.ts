import { db1, db2, db3, db4, db5, db6 } from "./datasources";

const data = (id: number) => ({
  id: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
  [`someData${id}`]: `someData${id}`
});

(async () => {
  await Promise.allSettled([
    db1.$connect(),
    db2.$connect(),
    db3.$connect(),
    db4.$connect(),
    db5.$connect(),
    db6.$connect()
  ]);

  await Promise.allSettled([
    db1.user.create({ data: data(1) }),
    db2.user.create({ data: data(2) }),
    db3.user.create({ data: data(3) }),
    db4.user.create({ data: data(4) }),
    db5.user.create({ data: data(5) }),
    db6.user.create({ data: data(6) })
  ]);

  const users = await Promise.allSettled([
    db1.user.findMany(),
    db2.user.findMany(),
    db3.user.findMany(),
    db4.user.findMany(),
    db5.user.findMany(),
    db6.user.findMany()
  ]).then(res => res.map(r => (r.status === "fulfilled" ? r.value : r.reason)));

  console.log(users);
})();
