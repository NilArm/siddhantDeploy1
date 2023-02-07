
function AllProducts() {
    const Ball_Valve = require('../../assets/Ball Valve.png');
  const Dripper = require('../../assets/Dripper.png');
  const Elbow = require('../../assets/Elbow.png');
  const EndCap = require('../../assets/EndCap.png');
  const Filter = require('../../assets/Filter.png');
  const Flush_Valve = require('../../assets/Flush Valve.png');
  const Grommet = require('../../assets/Grommet Take Off.png');
  const HDPE = require('../../assets/HDPE Pipes.png');
  const Lateral_Inline = require('../../assets/LateralInline.png');
  const Lateral_Joiner = require('../../assets/LateralJoiner.png');
  const Lateral_Online = require('../../assets/LateralOnline.png');
  const Lateral_Slim = require('../../assets/LateralSlim.png');
  const PVC_Pipes = require('../../assets/PVC Pipes.png');
  const Tee = require('../../assets/Tee.png');
  const Other_Fitting = require('../../assets/otherFitting.png');
  const Perma_Fix = require('../../assets/PermaFix.jpg');
  const Drip_Irrigation = require('../../assets/Drip_Irrigation.jpg');
  const Pipes = require('../../assets/Pipes_Fitting.png');
  const Pumps_Motors = require('../../assets/Pumps_Motors.webp');
  const Plumbing = require('../../assets/Plumbing.png');
  const Borewell = require('../../assets/borewell_submersible.webp'); 
  const cable = require('../../assets/cable.png');
  const Monoblock = require('../../assets/Monoblock.png');
  const openwell = require('../../assets/openWell_submersible.webp'); 
  const cpvc = require('../../assets/cpvc.png');
  const upvc = require('../../assets/upvc.png');
  const swr = require('../../assets/swr.png');
  const faucets = require('../../assets/Faucets.png');

  const products=[
    {
      productImage:Drip_Irrigation,
      productName:"Drip Irrigation System",
      productInfo:"Drip irrigation is the most efficient water and nutrient delivery system for growing crops. It delivers water and nutrients directly to the plant’s roots zone, in the right amounts, at the right time.",
      subProducts:[
        {
          subProductImage:Dripper,
          subProductName:"Dripper"
        },
        {
          subProductImage:Lateral_Inline,
          subProductName:"Lateral Inline"
        },
        {
          subProductImage:Lateral_Online,
          subProductName:"Lateral Online"
        },
        {
          subProductImage:Lateral_Slim,
          subProductName:"Lateral Slim"
        },
        {
          subProductImage:Filter,
          subProductName:"Water Filter"
        },
        {
          subProductImage:EndCap,
          subProductName:"End-Cap"
        },
        {
          subProductImage:Flush_Valve,
          subProductName:"Flush Valve"
        },
        {
          subProductImage:Lateral_Joiner,
          subProductName:"Joiner"
        },
        {
          subProductImage:Grommet,
          subProductName:"Grommet, Take-Off"
        }
      ],
      subProductSize:9
    },
    {
      productImage:Pipes,
      productName:"PVC Pipes and Fitting",
      productInfo:"Polyvinyl Chloride pipes and fittings.PVC pipes are used in household, commercial, industrial, agricultural, and sewage applications for the transfer of water, chemicals and wastewater.",
      subProducts:[
        {
          subProductImage:PVC_Pipes,
          subProductName:"PVC Pipes"
        },
        {
          subProductImage:Ball_Valve,
          subProductName:"Ball Valve"
        },
        {
          subProductImage:Tee,
          subProductName:"Tee"
        },
        {
          subProductImage:Elbow,
          subProductName:"Elbow"
        },
        {
          subProductImage:Perma_Fix,
          subProductName:"solvent/Solution"
        },
        {
          subProductImage:Other_Fitting,
          subProductName:"Other Fittings"
        }
      ],
      subProductSize:6
    },
    {
      productImage:Pumps_Motors,
      productName:"Pumps and Motors",
      productInfo:"The heart of most irrigation systems is a pump.To make an irrigation system as efficient as possible,the pump must be selected to match the requirements of the water source,the water distribution system and the irrigation equipment",
      subProducts:[
        {
          subProductImage:HDPE,
          subProductName:"HDPE Pipes"
        },
        {
          subProductImage:Borewell,
          subProductName:"Borewell Submersible Pump"
        },
        {
          subProductImage:openwell,
          subProductName:"Open well Submersible Pump"
        },
        {
          subProductImage:Monoblock,
          subProductName:"MonoBlock Pump"
        },
        {
          subProductImage:cable,
          subProductName:"wire/cable"
        }
      ],
      subProductSize:5
    },
    {
      productImage:Plumbing,
      productName:"Plumbing and Sanitation",
      productInfo:"The plumbing and sanitary system is an essential part of every house or building. Proper planning and designing of plumbing system is crucial as it takes care of the hygiene requirements of the occupants.",
      subProducts:[
        {
          subProductImage:upvc,
          subProductName:"UPVC"
        },
        {
          subProductImage:cpvc,
          subProductName:"CPVC"
        },
        {
          subProductImage:swr,
          subProductName:"SWR"
        },
        {
          subProductImage:faucets,
          subProductName:"Plumbing Faucet"
        }
      ],
      subProductSize:4
    }
  ]
  return products
}

export default AllProducts