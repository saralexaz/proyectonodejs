module.exports = function (app, db) {
  //Rutas CRUD para tabla persona
  app.get("/api/perfil_personal", async (req, res) => {
    try {
      const result = await db.query("select * from perfil_personal.persona");
      res.json(result.rows);
    } catch (error) {
      console.error("Error al obtener la persona:", error);
      res.status(500).json("Error al obtener la persona");
    }
  });

  //Ruta para consultar una persona por ID
  app.get("/api/perfil_personal/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.query(
        "SELECT * FROM perfil_personal.persona WHERE cod_per = $1",
        [id]
      );
      if (result.rowCount === 0) {
        return res.status(404).send("Persona no encontrada");
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al obtener la persona:", error);
      res.status(500).json("Error al obtener la persona");
    }
  });

  //Para agregar
  app.post("/api/perfil_personal", async (req, res) => {
    const {
      nm1_per,
      nm2_per,
      ap1_per,
      ap2_per,
      sex_per,
      per_per,
      por_per,
      fky_usu,
      est_per,
    } = req.body;
    try {
      const result = await db.query(
        "INSERT INTO perfil_personal.persona (nm1_per, nm2_per, ap1_per, ap2_per, sex_per, per_per, por_per, fky_usu, est_per) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
        [
          nm1_per,
          nm2_per,
          ap1_per,
          ap2_per,
          sex_per,
          per_per,
          por_per,
          fky_usu,
          est_per,
        ]
      );
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al agregar persona", error);
      res.status(500).json("Error al agregar persona");
    }
  });

  //para actualizar
  app.put("/api/perfil_personal/:id", async (req, res) => {
    const { id } = req.params;
    const {
      nm1_per,
      nm2_per,
      ap1_per,
      ap2_per,
      sex_per,
      per_per,
      por_per,
      fky_usu,
      est_per,
    } = req.body;

    try {
      const result = await db.query(
        "update perfil_personal.persona SET nm1_per =$1, nm2_per =$2, ap1_per =$3, ap2_per =$4, sex_per =$5, per_per =$6, por_per =$7, fky_usu =$8, est_per =$9 WHERE cod_per = $10 RETURNING *",
        [
          nm1_per,
          nm2_per,
          ap1_per,
          ap2_per,
          sex_per,
          per_per,
          por_per,
          fky_usu,
          est_per,
          id,
        ]
      );
      if (result.rowCount === 0) {
        return res.status(404).send("Persona no encontrada");
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al actualizar persona: ", error);
      res.status(500).json("Error al actualizar persona");
    }
  });

  //para eliminar
  app.delete("/api/perfil_personal/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.query(
        "DELETE FROM perfil_personal.persona WHERE cod_per = $1 RETURNING *",
        [id]
      );
      if (result.rowCount === 0) {
        return res.status(404).send("Persona no encontrada");
      }
      res.json(result.rows[0]);
    } catch (error) {
      // ¡CAMBIAR AQUÍ!
      console.error("Error al eliminar persona", error);
      res.status(500).json("Error al eliminar persona"); // ¡Y AQUÍ!
    }
  });

  //Rutas CRUD para tabla solicitud
  app.get("/api/solicitud", async (req, res) => {
    try {
      const result = await db.query("select * from perfil_personal.solicitud");
      res.json(result.rows);
    } catch (error) {
      console.error("Error al obtener la solicitud:", error);
      res.status(500).json("Error al obtener la solicitud");
    }
  });

  //Ruta para consultar una solicitud por ID
  app.get("/api/solicitud/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.query(
        "SELECT * FROM perfil_personal.solicitud WHERE cod_sol = $1",
        [id]
      );
      if (result.rowCount === 0) {
        return res.status(404).send("Solicitud no encontrada");
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al obtener la solicitud:", error);
      res.status(500).json("Error al obtener la solicitud");
    }
  });

  //Para agregar
  app.post("/api/solicitud", async (req, res) => {
    const { fk1_per, fk2_per, act_sol, est_sol } = req.body;
    try {
      const result = await db.query(
        "INSERT INTO perfil_personal.solicitud (fk1_per, fk2_per, act_sol, est_sol) VALUES ($1, $2, $3, $4) RETURNING *",
        [fk1_per, fk2_per, act_sol, est_sol]
      );
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al agregar solicitud", error);
      res.status(500).json("Error al agregar solicitud");
    }
  });

  //para actualizar
  app.put("/api/solicitud/:id", async (req, res) => {
    const { id } = req.params;
    const { fk1_per, fk2_per, act_sol, est_sol } = req.body;

    try {
      const result = await db.query(
        "update perfil_personal.solicitud SET fk1_per =$1, fk2_per =$2, act_sol=$3, est_sol =$4 WHERE cod_sol = $5 RETURNING *",
        [fk1_per, fk2_per, act_sol, est_sol, id]
      );
      if (result.rowCount === 0) {
        return res.status(404).send("Solicitud no encontrada");
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al actualizar solicitud: ", error);
      res.status(500).json("Error al actualizar solicitud");
    }
  });

  //Para elimimar
  app.delete("/api/solicitud/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.query(
        "DELETE FROM perfil_personal.solicitud WHERE cod_sol = $1 RETURNING *",
        [id]
      );
      if (result.rowCount === 0) {
        return res.status(404).send("Solicitud no encontrada");
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al eliminar solicitud", error);
      res.status(500).json("Error al eliminar solicitud");
    }
  });

  //Rutas CRUD para tabla publicación
  app.get("/api/publicacion", async (req, res) => {
    try {
      const result = await db.query(
        "select * from perfil_personal.publicacion"
      );
      res.json(result.rows);
    } catch (error) {
      console.error("Error al obtener la publicacion:", error);
      res.status(500).json("Error al obtener la publicacion");
    }
  });

  //Ruta para consultar una solicitud por ID
  app.get("/api/publicacion/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.query(
        "SELECT * FROM perfil_personal.publicacion WHERE cod_pub = $1",
        [id]
      );
      if (result.rowCount === 0) {
        return res.status(404).send("Publicacion no encontrada");
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al obtener la publicacion:", error);
      res.status(500).json("Error al obtener la publicacion");
    }
  });

  //Para agregar
  app.post("/api/publicacion", async (req, res) => {
    const {
      fec_pub,
      tit_pub,
      des_pub,
      fky_ciu,
      fky_per,
      fky_tip_aco,
      fky_tip_pri,
      est_pub,
    } = req.body;
    try {
      const result = await db.query(
        "INSERT INTO perfil_personal.publicacion (fec_pub,tit_pub, des_pub, fky_ciu, fky_per, fky_tip_aco, fky_tip_pri, est_pub) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [
          fec_pub,
          tit_pub,
          des_pub,
          fky_ciu,
          fky_per,
          fky_tip_aco,
          fky_tip_pri,
          est_pub,
        ]
      );
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al agregar publicacion", error);
      res.status(500).json("Error al agregar publicacion");
    }
  });

  //para actualizar
  app.put("/api/publicacion/:id", async (req, res) => {
    const { id } = req.params;
    const {
      fec_pub,
      tit_pub,
      des_pub,
      fky_ciu,
      fky_per,
      fky_tip_aco,
      fky_tip_pri,
      est_pub,
    } = req.body;

    try {
      const result = await db.query(
        "update perfil_personal.publicacion SET fec_pub =$1, tit_pub =$2, des_pub=$3, fky_ciu =$4, fky_per=$5, fky_tip_aco=$6, fky_tip_pri=$7, est_pub=$8  WHERE cod_pub = $9 RETURNING *",
        [
          fec_pub,
          tit_pub,
          des_pub,
          fky_ciu,
          fky_per,
          fky_tip_aco,
          fky_tip_pri,
          est_pub,
          id,
        ]
      );
      if (result.rowCount === 0) {
        return res.status(404).send("Publicacion no encontrada");
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al actualizar publicacion: ", error);
      res.status(500).json("Error al actualizar publicacion");
    }
  });

  //Para elimimar
  app.delete("/api/publicacion/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.query(
        "DELETE FROM perfil_personal.publicacion WHERE cod_pub = $1 RETURNING *",
        [id]
      );
      if (result.rowCount === 0) {
        return res.status(404).send("Publicacion no encontrada");
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al eliminar publicacion", error);
      res.status(500).json("Error al eliminar publicacion");
    }
  });

  //Rutas CRUD para tabla multimedia
  app.get("/api/multimedia", async (req, res) => {
    try {
      const result = await db.query("select * from perfil_personal.multimedia");
      res.json(result.rows);
    } catch (error) {
      console.error("Error al obtener la multimedia:", error);
      res.status(500).json("Error al obtener la multimedia");
    }
  });

  //Ruta para consultar una multimedia por ID
  app.get("/api/multimedia/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.query(
        "SELECT * FROM perfil_personal.multimedia WHERE cod_mul = $1",
        [id]
      );
      if (result.rowCount === 0) {
        return res.status(404).send("Multimedia no encontrada");
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al obtener la multimedia:", error);
      res.status(500).json("Error al obtener la multimedia");
    }
  });

  //Para agregar
  // Ruta corregida: '/api/multimedia' (antes estaba mal escrita '/mulimedia')
  app.post("/api/multimedia", async (req, res) => {
    const { url_mul, fky_pub, est_mul } = req.body;
    try {
      const result = await db.query(
        "INSERT INTO perfil_personal.multimedia (url_mul, fky_pub, est_mul) VALUES ($1, $2, $3) RETURNING *",
        [url_mul, fky_pub, est_mul]
      );
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al agregar multimedia", error);
      res.status(500).json("Error al agregar multimedia");
    }
  });

  //para actualizar
  app.put("/api/multimedia/:id", async (req, res) => {
    const { id } = req.params;
    const { url_mul, fky_pub, est_mul } = req.body;

    try {
      const result = await db.query(
        "update perfil_personal.multimedia SET url_mul =$1, fky_pub =$2, est_mul=$3 WHERE cod_mul = $4 RETURNING *",
        [url_mul, fky_pub, est_mul, id]
      );
      if (result.rowCount === 0) {
        return res.status(404).send("Multimedia no encontrada");
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al actualizar multimedia: ", error);
      res.status(500).json("Error al actualizar multimedia");
    }
  });

  //Para elimimar
  app.delete("/api/multimedia/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.query(
        "DELETE FROM perfil_personal.multimedia WHERE cod_mul = $1 RETURNING *",
        [id]
      );
      if (result.rowCount === 0) {
        return res.status(404).send("Multimedia no encontrada");
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al eliminar multimedia", error);
      res.status(500).json("Error al eliminar multimedia");
    }
  });

  //Rutas CRUD para tabla contacto
  app.get("/api/contacto", async (req, res) => {
    try {
      const result = await db.query("select * from perfil_personal.contacto");
      res.json(result.rows);
    } catch (error) {
      console.error("Error al obtener el contacto:", error);
      res.status(500).json({ error: "Error al obtener el contacto" });
    }
  });

  //Ruta para consultar una contacto por ID
  app.get("/api/contacto/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.query(
        "SELECT * FROM perfil_personal.contacto WHERE cod_con = $1",
        [id]
      );
      if (result.rowCount === 0) {
        return res.status(404).json({ error: "Contacto no encontrado" });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al obtener el contacto:", error);
      res.status(500).json({ error: "Error al obtener el contacto" });
    }
  });

  //Para agregar
  app.post("/api/contacto", async (req, res) => {
    const { des_con, act_con, fky_per, fky_tip_con, fky_tip_pri, est_con } =
      req.body;
    try {
      const result = await db.query(
        "INSERT INTO perfil_personal.contacto (des_con, act_con, fky_per, fky_tip_con, fky_tip_pri, est_con) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [des_con, act_con, fky_per, fky_tip_con, fky_tip_pri, est_con]
      );
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al agregar contacto", error);
      res.status(500).json({ error: "Error al agregar contacto" });
    }
  });

  //para actualizar
  app.put("/api/contacto/:id", async (req, res) => {
    const { id } = req.params;
    const { des_con, act_con, fky_per, fky_tip_con, fky_tip_pri, est_con } =
      req.body;

    try {
      const result = await db.query(
        "update perfil_personal.contacto SET des_con =$1, act_con =$2, fky_per=$3, fky_tip_con =$4, fky_tip_pri = $5, est_con =$6 WHERE cod_con = $7 RETURNING *",
        [des_con, act_con, fky_per, fky_tip_con, fky_tip_pri, est_con, id]
      );
      if (result.rowCount === 0) {
        return res.status(404).json({ error: "Contacto no encontrado" });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al actualizar contacto: ", error);
      res.status(500).json({ error: "Error al actualizar contacto" });
    }
  });

  //Para eliminar
  app.delete("/api/contacto/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.query(
        "DELETE FROM perfil_personal.contacto WHERE cod_con = $1 RETURNING *",
        [id]
      );
      if (result.rowCount === 0) {
        return res.status(404).json({ error: "Contacto no encontrado" });
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error al eliminar contacto", error);
      res.status(500).json({ error: "Error al eliminar contacto" });
    }
  });
};
