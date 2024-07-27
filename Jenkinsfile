pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/0APOCALYPSE0/ngrx-task.git'
            }
        }
        stage('Test') {
            steps {
                bat 'npm install'
                bat 'npm run ng test'
            }
        }
        stage('Build') {
          steps {
            bat 'npm run ng build'
          }
        }
        stage('Deploy') {
            steps {
                bat 'move dist\\ngrx-task\\*.* C:\\nginx\\'
            }
        }
    }
}
