import moment from 'moment'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import toast from 'react-hot-toast'

export const isValidImageFileUploaded = (file: any, type: string) => {
  let validExtensions
  const img = [
    'png',
    'jpeg',
    'jpg',
    'heif',
    'PNG',
    'JPEG',
    'JPG',
    'HEIF',
    'WebP',
    'APNG',
    'AVIF'
  ]
  const video = [
    'webm',
    'mp4',
    'mkv',
    'flv',
    'vob',
    'ogv',
    'ogg',
    'drc',
    'gif',
    'wmv',
    'm4p',
    'm4v',
    'mpeg',
    'avi'
  ]
  const docs = ['pdf', 'PDF']

  if (type === '1') {
    validExtensions = img
  } else if (type === '2') {
    validExtensions = img.concat(video)
  } else if (type === '3') {
    validExtensions = img.concat(video, docs)
  } else if (type === '4') {
    validExtensions = docs
  } else {
    validExtensions = video
  }

  const fileExtension = file.type.split('/')[1]
  return validExtensions.includes(fileExtension)
}

export const formatDate = (dateValue: any, format?: any) => {
  const dateFormat = format ? format : 'MM/DD/YYYY, HH:mm'
  return dateValue ? moment(dateValue).format(dateFormat) : 'N/A'
}
export const selectColor = (theme: any) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#ececec',
    primary: 'black'
  }
})

// function to map product attributes
export const getProductAttribute = (attr: string) => {
  const attributes: any = {
    brand: 'Brand',
    cultivationType: 'Cultivation Type',
    customAttributes: 'Custom Attributes',
    expiryDate: 'Expiry Date',
    hsnCode: 'HSN Code',
    manufacturerDate: 'Manufacturer Date',
    packing: 'Packing',
    placeOfOrigin: 'Place Of Origin',
    shelfLife: 'Shelf Life (Days)',
    productType: 'Product Type',
    sku: 'SKU',
    variety: 'Variety',
    storageTypeId: 'Storage Type',
    value: 'Value'
  }
  return attributes[attr]
}

export const validateDate = (date: any) => {
  const sevenDaysFromToday = moment().add(7, 'days') // Calculate 7 days from today
  // Check if the selected date is within 7 days from today
  if (moment(date).isAfter(sevenDaysFromToday)) {
    return false
  } else {
    return true
  }
}

export const clearUserData = async () => {
  try {
    // Clear Realtime Database data
    await signOut(auth)

    console.log('User logout from social firebase')
  } catch (error) {
    console.error('Error clearing user data or storage:', error)
  }
}

// remove empty key value pair from object
export const removeEmptyKeyValues = (obj: any) => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) => value !== '' && value !== null && value !== undefined
    )
  )
}

// split string with , & creates array
export const strToArray = (str: string) => {
  return str.split(',').map(item => item.trim())
}

// capitalize string
export const capitalizeString = (str: string) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const handleRequestKyc = async (kycHandler: any) => {
  try {
    const { data } = await kycHandler()
    if (data?.requestKYC?.success) {
      window.open(data?.requestKYC?.data?.kyc?.verification_url, '_blank')
    } else {
      toast.error(data?.requestKYC?.message)
    }
  } catch (err: any) {
    console.error(err)
    toast.error(err.message || 'An error occurred.')
  }
}
// Handle KYC Status
export const getKycStatus = (kyc: { status?: string } | null): boolean => {
  if (!kyc || !kyc.status) return true // Handle null kyc or null status.
  const invalidStatuses = [
    'request.pending',
    'request.timeout',
    'verification.expired',
    'verification.declined',
    'verification.canceled'
  ]

  return invalidStatuses.includes(kyc.status)
}
export const KycStatus = (status: string): string => {
  if (status === "request.pending") {
    return "Not Verified";
  } else if (status === "verification.canceled") {
    return "Verification Cancelled";
  } else if (status === "verification.expired") {
    return "Verification Expired"; // Handle other cases if needed
  }
  else if (status === "verification.accepted") {
    return "Verified"; // Handle other cases if needed
  }
  else if (status === "verification.pending") {
    return "Verification Pending"; 
  }
  else {
    return "Not Verified"
  }
};
// Function to remove wtx from file name string
export const RemoveWtx = (str:string) =>{
return str?.replace(/^WTX-/, '');
} 