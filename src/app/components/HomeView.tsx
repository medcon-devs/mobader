// import React from "react";
// import { Grid } from "@mui/material";
// import { motion } from "framer-motion";
// import DirectorMessage from "./Home/DirectorMessage";
// import ShouldAttend from "./Home/attends";
// import DummySpace from "./Home/dummySpeace";
// import Footer from "../layout/footer";

// export default function HomeView() {
//   return (
//     <Grid container spacing={2}>
//       {/* Director Message */}
//       <Grid item xs={12}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and move slightly up
//           whileInView={{ opacity: 1, y: 0 }} // Fade in and move to normal position
//           viewport={{ once: true }} // Animate only once when in view
//           transition={{ duration: 0.5 }} // Smooth transition
//         >
//           <DirectorMessage />
//         </motion.div>
//       </Grid>

//       {/* Should Attend */}
//       <Grid item xs={12}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }} // Add slight delay for staggered effect
//         >
//           <ShouldAttend />
//         </motion.div>
//       </Grid>

//       {/* Dummy Space */}
//       <Grid item xs={12}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <DummySpace />
//         </motion.div>
//       </Grid>

//       {/* Footer */}
//       <Grid item xs={12}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <Footer />
//         </motion.div>
//       </Grid>
//     </Grid>
//   );
// }


import React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import DirectorMessage from "./Home/DirectorMessage";
import ShouldAttend from "./Home/attends";
import DummySpace from "./Home/dummySpeace";
import Footer from "../layout/footer";
import Sponsors from "./sponsors/sponsors";

export default function HomeView() {
  return (
    <Grid container spacing={2}>
      {/* Director Message */}
      <Grid item xs={12}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and move slightly up
          whileInView={{ opacity: 1, y: 0 }} // Fade in and move to normal position
          viewport={{ amount: 0.5 }} // Trigger when 50% of the element is visible
          transition={{ duration: 0.5 }} // Smooth transition
        >
          <DirectorMessage />
        </motion.div>
      </Grid>

      {/* Should Attend */}
      <Grid item xs={12}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }} // Add slight delay for staggered effect
        >
          <ShouldAttend />
        </motion.div>
      </Grid>

      {/* Dummy Space */}
      <Grid item xs={12}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Sponsors />
        </motion.div>
      </Grid>

      
    </Grid>
  );
}
