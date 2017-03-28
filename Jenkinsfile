import groovy.json.JsonSlurperClassic
import groovy.json.JsonBuilder
import java.net.URL

String script_url = 'https://github.com/LeonardoJPerez/NodeHerokuTest.git'
boolean skip_test = false

def envVars = env.getEnvironment()
if (envVars.containsKey("SCRIPT_URL")) {
    script_url = SCRIPT_URL
}

if (envVars.containsKey("SKIP_TEST")) {
    skip_test = SKIP_TEST
}

currentBuild.result = "SUCCESS"

node () {
    git 'https://github.com/LeonardoJPerez/NodeHerokuTest.git'

    try{

        stage('Checkout') {
            checkout scm
        }

        stage('Installing npm') {
            bat 'npm install'
        }

        stage('Test') {
            //env.NODE_ENV = "test"
            //print "Environment will be : ${env.NODE_ENV}"

            bat 'node -v'
            bat 'npm prune'       
            bat 'npm test'
        }
    }
    catch(err) {      
        throw err
    }
    finally{
        stage ('Clean up'){
            print "Cleaning up..."
        }
    }
}