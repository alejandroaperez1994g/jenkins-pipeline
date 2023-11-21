pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Preparación') {
            steps {

                // Cambia al directorio del repositorio clonado

                    // Verifica que estás en la rama correcta
                sh 'git checkout development'

                    // Trae los últimos cambios del repositorio
                sh 'git pull origin development'

            }
        }
        stage('Instalar dependencias') {
            steps {

                    sh 'npm install'

            }
        }

        stage('Ejecutar tests') {
            steps {

                    sh 'npm test'

            }
        }

        stage('Merge a main') {
            steps {
                script {
                    try {
                        // Cambia a la rama main
                        sh 'git checkout main'
                        // Hace pull para obtener los últimos cambios
                        sh 'git pull'
                        // Hace merge de development a main
                        sh 'git merge development'
                        // Hace push a la rama main
                        sh 'git push origin main'
                    } catch (Exception e) {
                        // Si algo falla, se detiene el pipeline
                        currentBuild.result = 'FAILED'
                        error "El proceso de merge falló: ${e.getMessage()}"
                    }
                }
            }
        }


        stage('Notificar a Slack') {
            steps {
                // Enviar mensaje a Slack
                slackSend(channel: '#jenkins-notifications', message: 'El pipeline ha completado su ejecución.')
            }
        }
        
    }
    post {
        success {
            // Enviar notificación de éxito a Slack
            slackSend(channel: '#jenkins-notifications', message: '¡Éxito! El pipeline se ejecutó correctamente.')
        }
        failure {
            // Enviar notificación de fallo a Slack
            slackSend(channel: '#jenkins-notifications', message: 'Fallo en el pipeline. Revisar Jenkins para más detalles.')
        }
    }
}
