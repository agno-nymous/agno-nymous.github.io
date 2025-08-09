import { motion } from 'framer-motion'
import { H } from '../theme'

// A placeholder for the projects data
const projects = [
  {
    name: 'Project 1',
    description: 'A short description of the first project.',
    url: '#',
  },
  {
    name: 'Project 2',
    description: 'A short description of the second project.',
    url: '#',
  },
  {
    name: 'Project 3',
    description: 'A short description of the third project.',
    url: '#',
  },
]

export function Projects() {
  return (
    <section className="container">
      <motion.div initial={H.in} animate={H.show}>
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a key={index} href={project.url} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
