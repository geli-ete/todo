<template>
  <div class="home">
    <v-divider></v-divider>

    <v-list flat>
      <v-list-item>
        <template>
          <v-list-item-content>
            <v-list-item-title>Book Lists</v-list-item-title>
            <v-container>
              <v-row> </v-row>
            </v-container>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},
  data() {
    return {
      unitInc: 0,
      book: [
        {
          id: "c1",
          forGrade: "cl5",
          title: "Marigold",
          publishedYear: "November 2017 Agrahayana 1939",
          standard: "NCERT",
          price: 214,
          description: "NCERT, English book for class five",
          details: [
            { chapter1: "Ice-cream Man", chapter2: "Wonderful Waste!" },
            { chapter3: "Teamwork", chapter4: "Flying Together" },
            {
              chapter5: "My Shadow",
              chapter6: "Robinson Crusoe - Discovers a footprint",
            },
            { chapter6: "Crying", chapter8: "My Elder Brother" },
          ],
        },
        {
          id: "c2",
          forGrade: "cl6",
          title: "Mathematics",
          publishedYear: "November 2017 Agrahayana 1939",
          standard: "NCERT",
          price: 214,
          description: "NCERT, English book for class five",
          details: {
            chapter1: "Knowing Our Numbers",
            chapter2: "Whole Numbers",
            chapter3: "Playing with Numbers",
            chapter4: "Basic Geometrical Shapes",
            chapter5: "Understanding Elementary Shapes",
            chapter6: "Integers",
          },
        },
      ],
      unitExist: true,
      first: "",
      last: "",
      dialog: false,
    };
  },
  computed: {
    noUnit() {
      this.unitExist = false;
    },
    addUnit() {
      this.unitExist = true;
      if (Object.keys(this.book).length === 0) {
        let unitNow = "unit" + 1;
        this.book[unitNow] = {
          unitTitle: "",
          chapters: {},
        };
        console.log(this.book);
      } else if (Object.keys(this.book).length > 0) {
        console.log(Object.keys(this.book));
      }
    },
  },
};
</script>
