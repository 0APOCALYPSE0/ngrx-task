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
                sh 'npm install'
                sh 'ng build test'
            }
        }
        stage('Build') {
          steps {
            sh 'npm build'
          }
        }
        stage('Deploy') {
            steps {
                bat 'move dist\\ngrx-task\\*.* C:\\nginx\\'
            }
        }
    }
}
