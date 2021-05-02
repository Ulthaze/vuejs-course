<template>
  <section>
    <BaseCard>
      <BaseButton @click="setTab('StoredResource')" :mode="storedResButtonMode"
        >Stored Resources</BaseButton
      >
      <BaseButton @click="setTab('AddResource')" :mode="addResButtonMode"
        >Add Resources</BaseButton
      >
    </BaseCard>
    <KeepAlive>
      <component :is="selectedTab"></component>
    </KeepAlive>
  </section>
</template>

<script>
  import StoredResource from './StoredResource.vue';
  import AddResource from './AddResource.vue';

  export default {
    components: { StoredResource, AddResource },
    data() {
      return {
        selectedTab: 'StoredResource',
        storedResources: [
          {
            id: 'official-guide',
            title: 'Official Guide',
            description: 'Boop',
            link: 'https://vuejs.org',
          },
          {
            id: 'google',
            title: 'Google',
            description: 'Beep',
            link: 'https://duckduckgo.co.uk',
          },
        ],
      };
    },
    provide() {
      return {
        resources: this.storedResources,
        addResource: this.addResource,
        deleteResource: this.deleteResource
      };
    },
    computed: {
      storedResButtonMode() {
        return this.selectedTab === 'stored-resources' ? null : 'flat';
      },
      addResButtonMode() {
        return this.selectedTab === 'add-resource' ? null : 'flat';
      },
    },
    methods: {
      setTab(tab) {
        this.selectedTab = tab;
      },
      addResource(title, description, url) {
        const item = {
          id: new Date().toISOString(),
          title: title,
          description: description,
          link: url
        };
        this.storedResources.unshift(item);
        this.selectedTab = 'StoredResource';
      },
      deleteResource(id) {
        const index = this.storedResources.findIndex(res => res.id === id);
        this.storedResources.splice(index, 1);
      }
    },
  };
</script>