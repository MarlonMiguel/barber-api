const express = require('express');
const { uuid } = require('uuidv4');

const app = express();
app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
    return response.json(projects);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;
    const project = { id: uuid(), title, owner };

    projects.push(project);
    return response.json(project);
});

app.put('/projects/:id', (req, resp) => {
    const { id } = req.params;
    const { title, owner } = req.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return resp.status(400).json({ error: 'project not found' });
    }

    const project = {
        id,
        title,
        owner
    };
    projects[projectIndex] = project;
    return resp.json(projects);
});

app.delete('/projects/:id', (req, resp) => {
    const { id } = req.params;
    const { title, owner } = req.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return resp.status(400).json({ error: 'project not found' });
    }

    projects.splice(projectIndex, 1);
    return resp.status(204).send();
});

app.listen(3333, () => {
    console.log('back-end started!!!');
});