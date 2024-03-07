<script>
import store from "../store";
import axios from "axios";
export default {
  name: "AppRestaurantSingle",
  data() {
    return {
      store,
    };
  },
  methods: {
    // getRestaurants() {
    //   axios
    //     .get(this.store.api.baseUrl + this.store.api.apiUrls.restaurants)
    //     .then((response) => {
    //       this.store.restaurants = response.data.results;
    //     });
    // },
  },

  created() {

  },
};
</script>