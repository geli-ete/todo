<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768" app>
      <v-img
        height="170"
        class="pa-4 pt-7"
        src="flowers.png"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
        <v-avatar size="70" class="mb-2">
          <img src="geli-avatar.png" alt="Geli Ete" />
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">Geli Ete</div>
        <div class="white--text text-subtitle-2">Geli__Ete</div>
      </v-img>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      src="flowers.png"
      prominent
      :height="$route.path === '/todo' ? '238' : '170'"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.9), rgba(128,208,199,.9)"
        >
        </v-img>
      </template>

      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search></search>
        </v-row>
        <v-row>
          <v-app-bar-title class="text-h4 ml-4">{{
            $store.state.appTitle
          }}</v-app-bar-title>
        </v-row>
        <v-row>
          <live-date-time></live-date-time>
        </v-row>
        <v-row>
          <field-add-task v-if="$route.path === '/todo'"></field-add-task>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->

    <v-main>
      <router-view></router-view>
      <snack-bar></snack-bar>
    </v-main>
  </v-app>
</template>

<script>
import SnackBar from "./components/Shared/SnackBar.vue";
import Search from "./components/Tools/Search.vue";
import LiveDateTime from "./components/Tools/LiveDateTime.vue";
import FieldAddTask from "./components/Todo/FieldAddTask.vue";
export default {
  components: {
    SnackBar,
    Search,
    LiveDateTime,
    FieldAddTask,
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Digital Library", icon: "mdi-library-shelves", to: "/" },
      { title: "Todo", icon: "mdi-format-list-checks", to: "/todo" },
      { title: "Add Book", icon: "mdi-library", to: "/digilib/addbook" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
    right: true,
  }),
  mounted() {
    this.$store.dispatch("getTasks");
  },
};
</script>

<style lang="sass">
.header-container
 max-width: none !important
</style>
