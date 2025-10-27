import Examcontent from '../components/examcancercontent.jsx';
import Elements from '../components/element.jsx';
import Definitionmodel from '../components/definitionmodel.jsx';
import Footer from '../components/footer.jsx';
let selfexamcontent = [
  {
    id:0,
    title:"1) In the Shower ",
    description:"Look at your breasts in the mirror carefully for any changes in size, shape, or symmetry of the breasts.Check for dimpling, puckering, swelling, redness, or skin changes that were not there before.Raise your arms above your head and look again for the same visual changes."
  },
  {
    id:1,
    title:"2)Check for nipple changes or discharge",
    description:"Gently squeeze each nipple to see if any fluid (watery, milky, or bloody) comes out.Observe if there’s inversion (turning inward), peeling, redness, or irritation around the nipple area."
  },
  {
    id:2,
    title:"3)Lying Down",
    description:"Lie down on your back with a pillow under your right shoulder and your right arm behind your head.Use the pads of your three middle fingers of the opposite hand to feel the entire breast.Use small circular motions, covering from the collarbone to the top of your abdomen and from the armpit to the cleavage. Apply light, medium, and firm pressure to feel all layers of the breast tissue. Repeat on the other side"
  }
  
]

export default function SelfExam() {
  return(
    <div>
      <Examcontent
       title={"Breast Self-Exam"}
       description={"A breast self-exam is an early detection tool that uses a combination of physical and visual examinations of the breasts to check for signs and symptoms of breast cancer. The purpose of a breast self-exam is to become familiar with the way your breasts normally look and feel.Knowing how your breasts normally look and feel, also called breast self-awareness, will  help you identify any changes or abnormalities in your breasts, such as a new lump or skin changes. Any changes in your breasts discovered during a breast self-exam should be reported to your healthcare provider right away. While a breast self-exam is a useful tool for the early detection of breast cancer, it should not take the place of regular mammograms and clinical breast exams."}
       />
      <iframe style={{marginLeft:"18%"}} width="60%" height="400" src="https://www.youtube.com/embed/-ygucOBbKJA?si=fDcZDth5HxkWtvWw" title="YouTube video player" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <Examcontent 
      title={"How Should Self-Exam Be?"}
      description={"There are generally 5 main steps to performing a proper breast self-exam,This guide is designed to help women (and men) become more familiar with how their breasts normally look and feel, so they can notice any unusual changes early. NOTE: Self-examination is not a substitute for regular checkups or mammograms, but rather a means of increasing awareness."}
      />

      {selfexamcontent.map((item) => (
        <div key={item.id}>
          <Elements title={item.title} description={item.description} />
        </div>
      ))}

      <Definitionmodel 
      title={'Can I Rely On Breast Self-Exams Alone To Be Sure I Am Breast Cancer Free?'}
      description={'Mammography can usually detect tumors before they can be felt, so screening is key for early detection. But when combined with regular medical care and appropriate guideline-recommended mammography, breast self-exams can help women know what is normal for them so they can report any changes to their healthcare provider.'}
      />
      <Footer/>
    </div>
    
  );
}