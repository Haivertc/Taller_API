const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Endpoints para gestionar tareas del usuario autenticado
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Obtener todas las tareas del usuario autenticado
 *     tags: [Tasks]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "60d0fe4f5311236168a109ca"
 *                   title:
 *                     type: string
 *                     example: "Estudiar Node.js"
 *                   description:
 *                     type: string
 *                     example: "Completar el tutorial de Express"
 *                   user:
 *                     type: string
 *                     example: "60d0fe4f5311236168a109cb"
 *       500:
 *         description: Error en el servidor
 */
router.get('/', auth, async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error });
    }
});

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     tags: [Tasks]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Estudiar Node.js"
 *               description:
 *                 type: string
 *                 example: "Completar el tutorial de Express"
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "60d0fe4f5311236168a109ca"
 *                 title:
 *                   type: string
 *                   example: "Estudiar Node.js"
 *                 description:
 *                   type: string
 *                   example: "Completar el tutorial de Express"
 *                 user:
 *                   type: string
 *                   example: "60d0fe4f5311236168a109cb"
 *       500:
 *         description: Error en el servidor
 */
router.post('/', auth, async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTask = new Task({ title, description, user: req.user.id });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error });
    }
});

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea por ID
 *     tags: [Tasks]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "60d0fe4f5311236168a109ca"
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.delete('/:id', auth, async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Tarea eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error });
    }
});

module.exports = router;
