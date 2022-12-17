import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/NewsLetter.js').NewsLetter[]} */
  newsLetterSubscription: [],
  /** @type {import('./models/Event.js').Event.js[]} */
events: [],
  /** @type {import('./models/Retreat.js').Retreat} */
  currentRetreat: {},

  /** @type {import('./models/Retreat.js').Retreat[]} */
  archivedRetreats: [],

  uploadedImgs:0,
  newActiveUpload:null,
  formPaginate:0,
  loading: false,
  activeImage:null,
  activeTab: "Home"
});
