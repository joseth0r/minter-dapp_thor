require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Elon";
const description = "tbe test";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically


// Layer configuration
const totalSupply=10;

//Skin
const SkinEuropean=44/100; //porcentaje
const SkinWhite=47/100;
const SkinRobot=4/100;
const SkinZombie=4/100;
const SkinGold=1/100;


//Hair + head accesories



const HairBrownOnlyEnteroOnlyNoAccesoriesOjosNormales=20/100 *totalSupply;  //20%

const HairEnteroColoresNoAccesoriesOjosNormales= HairBrownOnlyEnteroOnlyNoAccesoriesOjosNormales + 10/100 *totalSupply;  //10%
console.log(HairEnteroColoresNoAccesoriesOjosNormales)

const HairBrownOnlyEnteroNoAccesoriesOjosEspeciales=  HairEnteroColoresNoAccesoriesOjosNormales + 10/100  * totalSupply; //10%
console.log(HairBrownOnlyEnteroNoAccesoriesOjosEspeciales)


const HairEnteroColoresNoAccesoriesOjosEspeciales= HairBrownOnlyEnteroNoAccesoriesOjosEspeciales + 20/100  * totalSupply; //20%
console.log(HairEnteroColoresNoAccesoriesOjosEspeciales)


// pelo entero: 60 %

const HairBrownOnlyEnteroAccesoriesOjosNormales=HairEnteroColoresNoAccesoriesOjosEspeciales +  15/100  * totalSupply; //20%

const HairEnteroColoresAccesoriesOjosNormales= HairBrownOnlyEnteroAccesoriesOjosNormales + 5/100  * totalSupply; //5%


const HairBrownRecortadoAccesoriesOjosNormales=  HairEnteroColoresAccesoriesOjosNormales +15/100  * totalSupply; //20%
console.log(HairBrownRecortadoAccesoriesOjosNormales)


const HairRecortadoColoresAccesoriesOjosNormales= HairBrownRecortadoAccesoriesOjosNormales + 5/100  * totalSupply; //10%
console.log(HairRecortadoColoresAccesoriesOjosNormales)

//accesorios: 40%







const layerConfigurations = [
  
  {
    growEditionSizeTo: HairBrownOnlyEnteroOnlyNoAccesoriesOjosNormales,  
    layersOrder: [
      { 
        name: "1-Background",
        options:{
          displayName:'Background'
        } 
    },
      { 
      name: "2-Skin",
      options:{
        displayName:'Skin'
      } 
    
    },
    { name: "7-Clothes",
    options:{
      displayName:'Clothes'
    } 
   },

      {
        name:"3.2-BrownHair",
      options:{
        displayName:'Hair'
      } 
    
    },
      { name:"4-Mouth",
      options:{
        displayName:'Mouth'
      } 
    },

      { name: "6-Eyes_normal",
      options:{
        displayName:'Eyes'
      } 

     }
    ],
  },
  
  {
growEditionSizeTo: HairEnteroColoresNoAccesoriesOjosNormales, 
    layersOrder: [
      { 
        name: "1-Background",
        options:{
          displayName:'Background'
        } 
    },
      { 
      name: "2-Skin",
      options:{
        displayName:'Skin'
      } 
    
    },
    { name: "7-Clothes",
    options:{
      displayName:'Clothes'
    } 
   },

      {
        name:"3-Hair",
      options:{
        displayName:'Hair'
      } 
    
    },
      { name:"4-Mouth",
      options:{
        displayName:'Mouth'
      } 
    },

      { name: "6-Eyes_normal",
      options:{
        displayName:'Eyes'
      } 
     }
   
    ],
  },
  {
    growEditionSizeTo: HairBrownOnlyEnteroNoAccesoriesOjosEspeciales, 
    layersOrder: [
      { 
        name: "1-Background",
        options:{
          displayName:'Background'
        } 
    },
      { 
      name: "2-Skin",
      options:{
        displayName:'Skin'
      } 
    
    },
    { name: "7-Clothes",
    options:{
      displayName:'Clothes'
    } 
   },
      {
        name:"3.2-BrownHair",
      options:{
        displayName:'Hair'
      } 
    
    },
    

      { name:"4-Mouth",
      options:{
        displayName:'Mouth'
      } 
    },
      { name: "6.1-Eyes_special",
      options:{
        displayName:'Eyes'
      } 

     }
    
    ],
  },


  {
    growEditionSizeTo: HairEnteroColoresNoAccesoriesOjosEspeciales, 
    layersOrder: [
      { 
        name: "1-Background",
        options:{
          displayName:'Background'
        } 
    },
      { 
      name: "2-Skin",
      options:{
        displayName:'Skin'
      } 
    
    },
    { name: "7-Clothes",
    options:{
      displayName:'Clothes'
    } 
   },

      {
        name:"3-Hair",
      options:{
        displayName:'Hair'
      } 
    
    },
    

      { name:"4-Mouth",
      options:{
        displayName:'Mouth'
      } 
    },

      { name: "6.1-Eyes_special",
      options:{
        displayName:'Eyes'
      } 

     }
    ],
  },
  {
    growEditionSizeTo: HairBrownOnlyEnteroAccesoriesOjosNormales, 
    layersOrder: [
      { 
        name: "1-Background",
        options:{
          displayName:'Background'
        } 
    },
      { 
      name: "2-Skin",
      options:{
        displayName:'Skin'
      } 
    
    },
    { name: "7-Clothes",
    options:{
      displayName:'Clothes'
    } 
   },
      {
        name:"3.2-BrownHair",
      options:{
        displayName:'Hair'
      } 
    
    },
    

      { name:"4-Mouth",
      options:{
        displayName:'Mouth'
      } 
    },
    {
    name:"5-Head_Accesories",
    options:{
      displayName:'Head Accesories'
    } 
  
  },
      { name: "6-Eyes_normal",
      options:{
        displayName:'Eyes'
      } 

     }

    ],
  },

  
  {
    growEditionSizeTo: HairEnteroColoresAccesoriesOjosNormales, 
    layersOrder: [
      { 
        name: "1-Background",
        options:{
          displayName:'Background'
        } 
    },
      { 
      name: "2-Skin",
      options:{
        displayName:'Skin'
      } 
    
    },

    { name: "7-Clothes",
    options:{
      displayName:'Clothes'
    } 
   },

      {
        name:"3-Hair",
      options:{
        displayName:'Hair'
      } 
    
    },
    

      { name:"4-Mouth",
      options:{
        displayName:'Mouth'
      } 
    },
    {
    name:"5-Head_Accesories",
    options:{
      displayName:'Head Accesories'
    } 
  
  },
      { name: "6-Eyes_normal",
      options:{
        displayName:'Eyes'
      } 

     }
    ],
  },


  {
    growEditionSizeTo: HairBrownRecortadoAccesoriesOjosNormales, 
    layersOrder: [
      { 
        name: "1-Background",
        options:{
          displayName:'Background'
        } 
    },
      { 
      name: "2-Skin",
      options:{
        displayName:'Skin'
      } 
    
    },
    { name: "7-Clothes",
    options:{
      displayName:'Clothes'
    } 
   },

      {
        name:"3.3-BrownHairCut",
      options:{
        displayName:'Hair'
      } 
    
    },
    

      { name:"4-Mouth",
      options:{
        displayName:'Mouth'
      } 
    },
    {
    name:"5.1-Head_for_haircut",
    options:{
      displayName:'Head Accesories'
    } 
  
  },
      { name: "6-Eyes_normal",
      options:{
        displayName:'Eyes'
      } 

     }
    ],
  },



  {
    growEditionSizeTo:HairRecortadoColoresAccesoriesOjosNormales   , 
    layersOrder: [
      { 
        name: "1-Background",
        options:{
          displayName:'Background'
        } 
    },
      { 
      name: "2-Skin",
      options:{
        displayName:'Skin'
      } 
    
    },

    { name: "7-Clothes",
    options:{
      displayName:'Clothes'
    } 
   },

      {
        name:"3.1-Hair_cut",
      options:{
        displayName:'Hair'
      } 
    
    },
    

      { name:"4-Mouth",
      options:{
        displayName:'Mouth'
      } 
    },
    {
    name:"5.1-Head_for_haircut",
    options:{
      displayName:'Head Accesories'
    } 
  
  },
      { name: "6-Eyes_normal",
      options:{
        displayName:'Eyes'
      } 

     }
    ],
  },



];


const shuffleLayerConfigurations = true; // IF true, groups will be mixed in final NFT mint

const debugLogs = false;

const format = {
  width: 2048,
  height: 2048,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://theboringelon.com", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 10; // Your API key rate limit
const CHAIN = 'ethereum'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'TBE TEST';
const CONTRACT_SYMBOL = 'TBE2';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x2bf227192ac958C58341Ff1F83E64557c9a45FB9';
const TREASURY_ADDRESS = '0x2bf227192ac958C58341Ff1F83E64557c9a45FB9';
const MAX_SUPPLY = 10; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.0001; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 1; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

const TEAM_RESERVE = 1; // Number of NFTS from the previous collection

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-06-23T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-06-18T14:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%, 1000 bps=10%
const ROYALTY_ADDRESS = "0x2bf227192ac958C58341Ff1F83E64557c9a45FB9"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x2bf227192ac958C58341Ff1F83E64557c9a45FB9"]; // only update if you want to manually set the whitelisted addresses ("0xd32Ca2af8c52a06C61Dfd2C7c09bF10CC2CceF1F", "0xd32Ca2af8c52a06C61Dfd2C7c09bF10CC2CceF1F")

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Description test"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafkreiet6oq7yh4hg3rbaf7kbt7jmviuembega27fqw2fnvtvaqmbw4s4e"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  TEAM_RESERVE,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
