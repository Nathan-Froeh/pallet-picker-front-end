import React, { Component } from 'react';
import { postProject } from '../../ApiCalls';
import { Project } from '../Project/Project';
import './Projects.scss'

export class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newProjectName: ''
    }
  }

  handleProjectName = (e) => {
    this.setState({newProjectName: e.target.value})
  }

  handleSubmitProject = (e) => {
    e.preventDefault()
    const name = {name: this.state.newProjectName}
    postProject(name)
  }

  render() {
    const addProjects = this.props.projects.map((project, key) => {
      const palettes = this.props.palettes.filter(palette => {
        return project.id === palette.project_id
      })
      return <Project 
        name={project.name} 
        id={project.id} 
        palettes={palettes} 
        deleteProject={this.props.deleteProject}
        deletePalette={this.props.deletePalette}
        key={key}
      />
    })
    return (
      <div className='Projects'>
        <form onSubmit={this.handleSubmitProject}>
          <input 
            type="text" 
            placeholder="New project name" 
            onChange={this.handleProjectName}
          />
          <input type="submit"/>
        </form>
        <section className="project-container">
          {addProjects}
        </section>
      </div>
    )
  }
}

export default Projects
