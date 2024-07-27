pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'ngrx-task'
        DOCKER_REGISTRY = 'https://index.docker.io/v1/'
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
    }
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
        //   steps {
        //     bat 'npm run ng build'
        //   }
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${env.BUILD_ID}").inside {

                    }
                }
            }
        }
        // stage('Push') {
        //     steps {
        //         script {
        //             docker.withRegistry("${DOCKER_REGISTRY}", "${DOCKER_CREDENTIALS_ID}") {
        //                 docker.image("${DOCKER_IMAGE}:${env.BUILD_ID}").push()
        //             }
        //         }
        //     }
        // }
        // stage('Deploy') {
        //     // steps {
        //     //     bat 'move dist\\ngrx-task\\*.* C:\\nginx\\'
        //     // }
        //     steps {
        //         script {
        //             bat 'docker run -d -p 80:80 ${DOCKER_IMAGE}:${env.BUILD_ID}'
        //         }
        //     }
        // }
    }
}
