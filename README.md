## Payments Components Recipes

![recipes-logo](recipes-logo.png)

🌟 Welcome to the Payments on Lightning Web Components Recipe Kit! 🛍️

We are seeing an expansion of other internal Salesforce domains wanting to integrate Payments into their applications outside of the context of commerce as well as the need for commerce partners and customer developers to extend the functionality of the out of the box Payments components. In order to support these additional use cases, we aim to develop a library of Payments Components that can be utilized by developers in different Salesforce contexts.

The main objective of this project is to provide reference payments components for partners and customer developers to use if they want to build their own custom payments LWCs. This will help reduce development time, improve the components’ quality and reduce customer implementation costs. 

---

## Installation

1.  Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

    -   Enable Dev Hub in your Org
    -   Install Salesforce CLI
    -   Install Visual Studio Code
    -   Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

2.  If you haven't already done so, authorize your hub org and provide it with an alias (**myhuborg** in the command below):

    ```shell
    sf org login web -d -a myhuborg
    ```

3.  Clone the `payments-components-recipes` repository:

    ```shell
    git clone https://git.soma.salesforce.com/communities/payments-components-recipes.git
    cd payments-components-recipes
    ```

4.  Create a scratch org and provide it with an alias (**payments-components-recipes** in the command below):

    ```shell
    sf org create scratch -f config/project-scratch-def.json -a payments-components-recipes
    ```

5.  Push the app to your scratch org:

    ```shell
    sf project deploy start
    ```

6.  Open the scratch org:

        ```shell
        sf org open
        ```
