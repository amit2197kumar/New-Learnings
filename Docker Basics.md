# Docker Basic Concepts
**[See Original Post On Notion For Better Readability](https://cream-forsythia-066.notion.site/Docker-Basic-497b372f0a0849888de3a656116d0c4d)**

# What is docker?

Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers that have everything the software needs to run including libraries, system tools, code, and runtime. Using Docker, you can quickly deploy and scale applications into any environment and know your code will run.

# What is a container?

A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

Container images become containers at runtime and in the case of Docker containers - images become containers when they run on [Docker Engine](https://www.docker.com/products/container-runtime). Available for both Linux and Windows-based applications, containerized software will always run the same, regardless of the infrastructure. Containers isolate software from its environment and ensure that it works uniformly despite differences for instance between development and staging.

# How does docker work?

Docker works by providing a standard way to run your code. Docker is an operating system for containers. Similar to how a virtual machine virtualizes (removes the need to directly manage) server hardware, containers virtualize the operating system of a server. Docker is installed on each server and provides simple commands you can use to build, start, or stop containers.

# Container vs virtual machine (VM)

## What are VMs?

A virtual machine (VM) is an emulation of a computer system. Put simply, it makes it possible to run what appear to be many separate computers on hardware that is actually one computer.

The operating systems (OS) and their applications share hardware resources from a single host server, or from a pool of host servers. Each VM requires its own underlying OS, and the hardware is virtualized. A hypervisor, or a virtual machine monitor, is software, firmware, or hardware that creates and runs VMs. It sits between the hardware and the virtual machine and is necessary to virtualize the server.

Since the advent of affordable virtualization technology and cloud computing services, IT departments large and small have embraced virtual machines (VMs) as a way to lower costs and increase efficiencies.

VMs, however, can take up a lot of system resources. Each VM runs not just a full copy of an operating system, but a virtual copy of all the hardware that the operating system needs to run. This quickly adds up to a lot of RAM and CPU cycles. That’s still economical compared to running separate actual computers, but for some applications it can be overkill, which led to the development of containers.

![](/Images/Docker_01.png)

## What are Containers?

With containers, instead of virtualizing the underlying computer like a virtual machine (VM), just the OS is virtualized.

Containers sit on top of a physical server and its host OS — typically Linux or Windows. Each container shares the host OS kernel and, usually, the binaries and libraries, too. Shared components are read-only. Sharing OS resources such as libraries significantly reduces the need to reproduce the operating system code, and means that a server can run multiple workloads with a single operating system installation. Containers are thus exceptionally light — they are only megabytes in size and take just seconds to start. Compared to containers, VMs take minutes to run and are an order of magnitude larger than an equivalent container.

In contrast to VMs, all that a container requires is enough of an operating system, supporting programs and libraries, and system resources to run a specific program. What this means in practice is you can put two to three times as many as applications on a single server with containers than you can with a VM. In addition, with containers you can create a portable, consistent operating environment for development, testing, and deployment.

![](/Images/Docker_02.png)

Docker works by providing a standard way to run your code. Docker is an operating system for containers. Similar to how a virtual machine virtualizes (removes the need to directly manage) server hardware, containers virtualize the operating system of a server. Docker is installed on each server and provides simple commands you can use to build, start, or stop containers.

![](/Images/Docker_03.png)

## Uses for VMs vs Uses for Containers

Both containers and VMs have benefits and drawbacks, and the ultimate decision will depend on your specific needs, but there are some general rules of thumb.

- VMs are a better choice for running apps that require all of the operating system’s resources and functionality when you need to run multiple applications on servers, or have a wide variety of operating systems to manage.
- Containers are a better choice when your biggest priority is maximizing the number of applications running on a minimal number of servers.

![](/Images/Docker_04.png)

# Docker Architecture Overview

## Docker Engine

Before discussing the different architectural components of Docker, it’s essential to understand the workflow of Docker. Let’s take a look at the Docker Engine and its several parts, which will give us an idea of how the Docker system works. The Docker Engine is primarily a typical client-server application with three principal components.

### Server (Daemon)

The Docker daemon is a continuous process that runs in the background and manages all the Docker objects. It listens to the Docker API requests put forward by the client and processes them continuously.

### Rest API

It is the interface that the Docker clients use to interact with the Docker daemon. The clients can talk to the daemon through the API and can provide instructions to it.

### **Client**

The Docker Client is a Command Line Interface (CLI) that can interact with the daemon. It simplifies the entire process of container management.

![](/Images/Docker_05.png)

The Docker Client (which can be an HTTP client such as a CLI) talks to the daemon, which performs the heavy task of creating, running, and sharing containers. The Client and the daemon can either run on the same machine or connect a client to a remote daemon. The Client and the daemon communicate with each other using a Rest API over sockets or network interface. The Docker Client helps users to manage Docker objects such as containers, images, volumes, etc.

## Architectural Components

As discussed earlier, Docker uses a Client-Server architecture, where the Client talks to the daemon over a Rest API. The Docker architecture consists of several components, as discussed below.

![](/Images/Docker_06.png)

### **Daemon**

A persistent background process that manages Docker images, containers, networks, and storage volumes. The Docker daemon constantly listens for Docker API requests and processes them.

### **Client**

The Docker client enables users to interact with Docker. The Docker client can reside on the same host as the daemon or connect to a daemon on a remote host. A docker client can communicate with more than one daemon. The Docker client provides a command line interface (CLI) that allows you to issue build, run, and stop application commands to a Docker daemon.

The main purpose of the Docker Client is to provide a means to direct the pull of images from a registry and to have it run on a Docker host. Common commands issued by a client are:

```
docker build
docker pull
docker run
```

### DockerHost

The Docker host provides a complete environment to execute and run applications. It comprises of the Docker daemon, Images, Containers, Networks, and Storage. As previously mentioned, the daemon is responsible for all container-related actions and receives commands via the CLI or the REST API. It can also communicate with other daemons to manage its services. The Docker daemon pulls and builds container images as requested by the client. Once it pulls a requested image, it builds a working model for the container by utilizing a set of instructions known as a build file. The build file can also include instructions for the daemon to pre-load other components prior to running the container, or instructions to be sent to the local command line once the container is built.

### **Registries**

Docker registries are services that provide locations from where you can store and download images. In other words, a Docker registry contains [Docker repositories](https://wiki.aquasec.com/display/containers/Docker+Image+Repositories) that host one or more Docker Images. Public Registries include Docker Hub and Docker Cloud and private Registries can also be used. Common commands when working with registries include:

```
docker push
docker pull
docker run
```

## **Docker Objects**

When working with Docker, we interact with several objects such as containers, images, volumes, networks, etc. Some of these objects are:

### **Images**

Images are a read-only binary template used to build containers. Images also contain metadata that describe the container’s capabilities and needs. Images are used to store and ship applications. An image can be used on its own to build a container or customized to add additional elements to extend the current configuration. Container images can be shared across teams within an enterprise using a private container registry, or shared with the world using a public registry like Docker Hub. Images are a core part of the Docker experience as they enable collaboration between developers in a way that was not possible before.

### **Containers**

Containers are encapsulated environments in which you run applications. The container is defined by the image and any additional configuration options provided on starting the container, including and not limited to the network connections and storage options. Containers only have access to resources that are defined in the image, unless additional access is defined when building the image into a container. You can also create a new image based on the current state of a container. Since containers are much smaller than VMs, they can be spun up in a matter of seconds, and result in much better server density.

### **Network**

Docker implements networking in an application-driven manner and provides various options while maintaining enough abstraction for application developers. There are basically two types of networks available – the default Docker network and user-defined networks. By default, you get three different networks on the installation of Docker – none, bridge, and host. The none and host networks are part of the network stack in Docker. The bridge network automatically creates a gateway and IP subnet and all containers that belong to this network can talk to each other via IP addressing. This network is not commonly used as it does not scale well and has constraints in terms of network usability and service discovery.

The other type of networks is user-defined networks. Administrators can configure multiple user-defined networks. There are three types:

- **Bridge network**: Similar to the default bridge network, a user-defined Bridge network differs in that there is no need for port forwarding for containers within the network to communicate with each other. The other difference is that it has full support for automatic network discovery.
- **Overlay network**: An Overlay network is used when you need containers on separate hosts to be able to communicate with each other, as in the case of a distributed network. However, a caveat is that swarm mode must be enabled for a cluster of Docker engines, known as a swarm, to be able to join the same group.
- **Macvlan network**: When using Bridge and Overlay networks a bridge resides between the container and the host. A Macvlan network removes this bridge, providing the benefit of exposing container resources to external networks without dealing with port forwarding. This is realized by using MAC addresses instead of IP addresses.

### **Storage**

You can store data within the writable layer of a container but it requires a storage driver. Being non-persistent, it perishes whenever the container is not running. Moreover, it is not easy to transfer this data. In terms of persistent storage, Docker offers four options:

- **Data Volumes**: Data Volumes provide the ability to create persistent storage, with the ability to rename volumes, list volumes, and also list the container that is associated with the volume. Data Volumes sit on the host file system, outside the containers copy on write mechanism and are fairly efficient.
- **Data Volume Container**: A Data Volume Container is an alternative approach wherein a dedicated container hosts a volume and to mount that volume to other containers. In this case, the volume container is independent of the application container and therefore can be shared across more than one container.
- **Directory Mounts**: Another option is to mount a host’s local directory into a container. In the previously mentioned cases, the volumes would have to be within the Docker volumes folder, whereas when it comes to Directory Mounts any directory on the Host machine can be used as a source for the volume.
- **Storage Plugins**: Storage Plugins provide the ability to connect to external storage platforms. These plugins map storage from the host to an external source like a storage array or an appliance. A list of storage plugins can be found on Docker’s Plugin page.

## Docker Container Lifecycle Management

There are different stages when we create a Docker container which is known as Docker Container Lifecycle. Some of the states are:

- **Created**: A container that has been created but not started
- **Running**: A container running with all its processes
- **Paused**: A container whose processes have been paused
- **Stopped**: A container whose processes have been stopped
- **Deleted**: A container in a dead state

![](/Images/Docker_07.png)

- The first phase is the created state. Further, the container moves into the running state while we use the **Docker run** command.
- We can stop or pause the container, using **Docker stop/pause** command. And, to put a container back from a stopped state to a running state, we use the **Docker run** command.
- We can delete a running or stopped container, using **Docker** **rm** command.

# Docker Commands

```java
//Build docker image
docker build -t hello-docker .

//See all images
docker image ls

//Run docker
docker run hello-docker

//Current running docker container 
docker ps

//Status of docker container
docker ps -a

// it : intractive mode
docker run -it ubuntu
// This will open a shell
// A shell is a program that take our commands and passes them to the operating system for execution 

// Shell promt
root@33f4c73b9945:/#
// root -> Current logged in user
// 33f4c73b9945 -> Name of the machine, created by docker
// / -> where we are currently in root directory 
// # -> I have the highest privileges (root user)

//Package Manager 
//apt -> advanced packaging tool
root@33f4c73b9945:/# apt

//Before installing any package always Update  
root@33f4c73b9945:/# apt update

//Posy update can then install
root@33f4c73b9945:/# apt install nano

//Basic text editor for linux
root@33f4c73b9945:/# nano
```

# More Docker Commands

```java
// Search for APPLICATION on host to run, if not found, tries to find on hub.docker and download
docker run <APPLICATION>

// List all runnning containers with some details
docker ps

// List all running and previously runned containers
docker ps -a

// To stop a container 
docker stop <CONTAINER_NAME> or <CONTAINER_ID>

// Delete/remove a container permanently 
docker rm <CONTAINER_NAME> or <CONTAINER_ID>

// List of images
docker images

// Delete/remove a image permanently
// All container for that IMAGE needs to be removed first!!
docker rmi <IMAGE_NAME>

// Download image
docker pull <IMAGE_NAME>

// Below command run and stops, why????
docker run ubuntu 

docker run ubuntu  sleep 20

// Run in real
docker run kodekloud/simple-webapp

// Run in background 
docker run -d kodekloud/simple-webapp

// From background go back to real terminal of container
docker attach <CONTAINER_ID>

// Rename and run in background 
docker run -d --name webapp nginx:1.14-alpine

// This will pull and run the latest version of APPLICATION
docker run <APPLICATION>

// This will pull and run the desired version of APPLICATION (TAG)
docker run <APPLICATION>:<TAG>
docker run redis:4.0

// Get imformation about a cointainer in JSON
docker inspect <CONTAINER_NAME>

// container Logs in background
docker logs <CONTAINER_NAME>

// to see the history
docker history <APPLICATION>
```

# Docker Run Command

```java
docker run -p 8080:8080 jenkins/jenkins
//Open on brouser: http://localhost:8080/
//That will direct to: http://localhost:8080/login?from=%2F

// This will persist my changes
docker run -p 8080:8080 -v /Users/amitkuma/Desktop/DockerDemoData:/var/jenkins_home  jenkins/jenkins
```

# Docker Images

## **What is a Dockerfile?**

- A Dockerfile is a text configuration file written using a [special syntax](https://docs.docker.com/engine/reference/builder/)
- It describes step-by-step instructions of all the commands you need to run to assemble a Docker Image.
- The `docker build` command processes this file generating a Docker Image in your Local Image Cache, which you can then start-up using the `docker run` command, or push to a permanent Image Repository.

## Example: **Simple Dockerfile for NGINX**

Dockerfile

```yaml
#
# Each instruction in this file generates a new layer that gets pushed to your local image cache
#
 
#
# Lines preceeded by # are regarded as comments and ignored
#
 
#
# The line below states we will base our new image on the Latest Official Ubuntu 
FROM ubuntu:latest
 
#
# Identify the maintainer of an image
LABEL maintainer="myname@somecompany.com"
 
#
# Update the image to the latest packages
RUN apt-get update && apt-get upgrade -y
 
#
# Install NGINX to test.
RUN apt-get install nginx -y
 
#
# Expose port 80
EXPOSE 80
 
#
# Last is the actual command to start up NGINX within our Container
CMD ["nginx", "-g", "daemon off;"]
```

Running the Dockerfile(In currect directory)

```yaml
# Build the new image using the command docker build <path>. 
# Path refers to the directory containing the Dockerfile.
docker build ./

# At the end of the process you should see the message “Successfully built <image ID>”
# Example: Successfully built de23c8aee714

# Start the new image and test connectivity to NGINX. 
# Run the command docker run -p 80:80 <image ID>. 
# The option -p 80:80 exposes the Container port 80 as the Host port 80 to the world
docker run -p 80:80 de23c8aee714

# http://ip172-18-0-25-c5ro437njsv000cj2r2g-80.direct.labs.play-with-docker.com/
```

**[Dockerfile Commands](https://kapeli.com/cheat_sheets/Dockerfile.docset/Contents/Resources/Documents/index)**

## Environment variable

1. [How to Pass Environment Variables to Docker Containers](https://www.cloudsavvyit.com/14081/how-to-pass-environment-variables-to-docker-containers/)
2. [How do I pass environment variables to Docker containers?](https://stackoverflow.com/questions/30494050/how-do-i-pass-environment-variables-to-docker-containers)
3. [Passing Environment Variables to Docker Containers](https://www.baeldung.com/ops/docker-container-environment-variables)

## CMD & Entry points

1. [Docker CMD vs ENTRYPOINT: What’s The Difference & How To Choose](https://www.bmc.com/blogs/docker-cmd-vs-entrypoint/)
2. [Difference Between run, cmd and entrypoint in a Dockerfile](https://www.baeldung.com/ops/dockerfile-run-cmd-entrypoint)
3. [What is the difference between CMD and ENTRYPOINT in a Dockerfile?](https://stackoverflow.com/questions/21553353/what-is-the-difference-between-cmd-and-entrypoint-in-a-dockerfile)

# Docker Compose

## Up and running voting application with docker run

GitHub: [dockersamples/example-voting-app](https://github.com/dockersamples/example-voting-app)

Go through the README of above repo to understand the flow in-between services

```bash
cd workspace/test/example-voting-app/vote
docker build . -t voting-app
docker run -p 8080:80 voting-app
(http://localhost:8080/) - Click any option

docker run -d --name=redis redis
docker run -d -p 8080:80 --link redis:redis voting-app
(http://localhost:8080/) - Click any option

docker run --name db -e POSTGRES_PASSWORD=somePassword -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:9.4

cd workspace/test/example-voting-app/worker
docker build . -t worker-app

docker run -d --link redis:redis --link db:db worker-app

cd workspace/test/example-voting-app/result
docker build . -t result-app

docker run -d -p 8081:80 --link db:db result-app
(http://localhost:8081/)
```

## Up and running voting application with docker Compose

### docker-compose.yml

```yaml
redis:
  image: redis
db:
  image: postgres:9.4
  env_file:
      - database.env
vote:
  image: voting-app
  ports: 
    - 8080:80
  links:
    - redis
worker:
  image: worker-app
  links:
    - db
    - redis
result:
  image: result-app
  ports: 
    - 8081:80
  links:
    - db
```

### database.env

```bash
POSTGRES_PASSWORD=somePassword
POSTGRES_HOST_AUTH_METHOD=trust
```

### Run docker-compose

```bash
docker-compose up

/*
OPEN:
1. http://localhost:8080/
2. http://localhost:8081/
*/
```

# **Container Orchestration**

See these for good brief info:

1. [Container Orchestration Explained](https://youtu.be/kBF6Bvth0zw)
2. [Container Orchestration - Vmware](https://www.vmware.com/topics/glossary/content/container-orchestration)

# Reference

1. [Play with Docker](https://labs.play-with-docker.com/)
2. [Labs - Docker for the Absolute Beginner - Hands On](https://kodekloud.com/topic/labs-docker-images/)
3. [Docker for the Absolute Beginner](https://kodekloud.com/topic/labs-docker-images-3/)
4. [Docker Tutorial for Beginners - Programming with Mosh](https://youtu.be/pTFZFxd4hOI)
5. [Docker Tutorial for Beginners - freecodecamp.org](https://youtu.be/fqMOX6JJhGo)
6. [Containerization Explained - IBM Technology](https://youtu.be/0qotVMX-J5s)
7. [Container Orchestration Explained - IBM Technology](https://youtu.be/kBF6Bvth0zw)
8. [Docker in 100 Seconds](https://youtu.be/Gjnup-PuquQ)
