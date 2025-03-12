import { gql } from '@apollo/client'

// queries ----------------------------------------------------

// get rfq list
export const GET_RFQ_LIST_ACTION = gql`
  query SearchRFQ($input: SearchRFQInput!) {
    searchRFQ(input: $input) {
      items {
        id
        openRFQ
        active
        status
        expiryDate
        createdAt
        stage
        reason
        updateType
        productName
        currentBids
        quantity
        unit
        minOrderQuantity
        productUnitPrice
        sellerName
        quoteId
        quote {
          id
          productId
          productName
          productQuotePrice
          HSNCode
          categoryId
          subCategoryId
          category {
            name
          }
          subCategory {
            name
          }
          overallPrice
          sellerName
          estimateTime
          additionalNotes
          quoteStatus
          newQuote
          quoteUpdated
          sellerId
          sellerImage {
            image
          }
          furtherNegotiationPossible
          productImage
          productExtraImage {
            url
            desc
            type
            id
            name
          }
          changeRequest {
            message
            read
          }
        }
        buyerName
        createdFor
        deliveryData {
          PackageDimensions {
            boxCount
            height
            length
            measurementUnit
            unit
            weight
            width
          }
        }
        attachments {
          url
          desc
          type
          id
          name
        }
        additionalNotes
        estimateTime
        ppdRFQId
        ppdPoId
        transportedBy
        poId
        buyerId
      }
      success
      message
      lastKey
    }
  }
`

// get open rfq details before sending quote
export const SEND_QUOTE_PREVIEW_ACTION = gql`
  query SendQuotationPreview($input: RfqSendQuotePreviewInputs!) {
    sendQuotationPreview(input: $input) {
      data {
        rfqData {
          additionalNotes
          buyerName
          estimateTime
          createdFor
          updateType
          status
          createdAt
          attachments {
            name
            id
            type
            url
          }
          exceptedAmount
          buyerId
          currentBids
          deleted
          expiryDate
          updatedAt
          selectedQuoteId
          id
          integrityTracker
          ppdPoId
          deliveryData {
            PackageDimesions {
              unit
              boxCount
              length
              width
              weight
              measurementUnit
              height
            }
            deliveryAddress {
              addressLine1
              country
              zipCode
              addressLine2
              state
              city
              phone
            }
          }
          productName
          isBST
          bstPOId
          subcategoryName
          categoryName
          pickupAddress {
            addressLine1
            country
            zipCode
            addressLine2
            state
            city
            phone
          }
          deliveryAddress {
            addressLine1
            country
            zipCode
            addressLine2
            state
            city
            phone
          }
          PackageDimesions {
            boxCount
            height
            length
            weight
            width
            measurementUnit
            unit
          }
        }
        subOrdersData {
          paymentId
          packageDimensions {
            unit
            boxCount
            length
            width
            weight
            measurementUnit
            height
          }
          buyer {
            fullName
            phone
            email
            businessName
            businessType
            createdAt
          }
          sellerNotes
          currentLocationStatus
          buyerId
          pickupDate
          poType
          changeLog {
            orderStatus
            message
            userId
            timestamp
          }
          subTotal
          sellerId
          notes
          id
          integrityTracker
          rfqType
          seller {
            businessName
            phone
            email
          }
          orderStatus
          trackerData {
            boxesPerPallet
            pallets
            trackerCost
            trackerOrderStatus
            trackerRequired
            trackerPerPallet
            isPayed
          }
          total
          createdAt
          item {
            extraImage {
              name
              id
              type
              url
            }
            image
            unit
            quantity
            price
            name
            id
            farmId
            HSNCode
            categoryName
            subcategoryName
          }
          sellerPo {
            date
            poId
            quoteId
            rfqId
          }
          nftDetails {
            nftHash
            tokenId
            holderId
            nftHolder
          }
          updatedAt
          taxTotal
          deliveryAddress {
            addressLine1
            country
            zipCode
            addressLine2
            state
            city
            phone
          }
          paymentMethod
          pickupAddress {
            addressLine1
            country
            zipCode
            addressLine2
            state
            city
            phone
          }
          estimatePrice
          estimateTime
        }
        BuyerInfo {
          fullName
          address {
            addressLine1
            country
            zipCode
            addressLine2
            state
            city
            phone
          }
          phone
          email
          businessName
          businessType
          createdAt
        }
      }
      success
      message
    }
  }
`

// get ongoing RFQ details
export const GET_ONGOING_RFQ_DETAIL_ACTION = gql`
  query QuotationDetails($input: GetOuotedetailsByIdInput!) {
    QuotationDetails(input: $input) {
      data {
        rfqData {
          additionalNotes
          buyerName
          estimateTime
          createdFor
          updateType
          status
          createdAt
          attachments {
            name
            id
            type
            url
          }
          exceptedAmount
          buyerId
          currentBids
          deleted
          expiryDate
          updatedAt
          selectedQuoteId
          id
          integrityTracker
          ppdPoId
          deliveryData {
            PackageDimesions {
              unit
              boxCount
              length
              width
              weight
              measurementUnit
              height
            }
            deliveryAddress {
            addressLine1
            country
            zipCode
            addressLine2
            state
            city
            phone
          }
          }
          productName
          categoryName
          subcategoryName
          isBST
          deliveryAddress {
            addressLine1
            country
            zipCode
            addressLine2
            state
            city
            phone
          }
          bstPOId
          pickupAddress {
            addressLine1
            country
            zipCode
            addressLine2
            state
            city
            phone
          }
          PackageDimesions {
            boxCount
            height
            length
            weight
            width
            measurementUnit
            unit
          }
        }
        subOrdersData {
          paymentId
          packageDimensions {
            unit
            boxCount
            length
            width
            weight
            measurementUnit
            height
          }
             deliveryAddress {
          addressLine1
          country
          zipCode
          addressLine2
          state
          city
          phone
        }
        pickupAddress {
          addressLine1
          country
          zipCode
          addressLine2
          state
          city
          phone
        }
          buyer {
            fullName
            phone
            email
            businessName
            businessType
            createdAt
          }
          sellerNotes
          currentLocationStatus
          buyerId
          pickupDate
          poType
          changeLog {
            orderStatus
            message
            userId
            timestamp
          }
          subTotal
          sellerId
          notes
          id
          integrityTracker
          rfqType
          seller {
            businessName
            phone
            email
          }
          orderStatus
          trackerData {
            boxesPerPallet
            pallets
            trackerCost
            trackerOrderStatus
            trackerRequired
            trackerPerPallet
            isPayed
          }
          total
          createdAt
          item {
            extraImage {
              name
              id
              type
              url
            }
            image
            unit
            quantity
            price
            name
            id
            farmId
            HSNCode
            categoryName
            subcategoryName
          }
          sellerPo {
            date
            poId
            quoteId
            rfqId
          }
          nftDetails {
            nftHash
            tokenId
            holderId
            nftHolder
          }
          updatedAt
          taxTotal
          paymentMethod
          estimatePrice
          estimateTime
        }
        quotationData {
          additionalNotes
          furtherNegotiationPossible
          totalPrice
          changeRequest {
            message
            read
          }
          estimatedTime
        }
        BuyerInfo {
          fullName
          address {
            addressLine1
            country
            zipCode
            addressLine2
            state
            city
            phone
          }
          phone
          email
          businessName
          businessType
          createdAt
        }
      }
      success
      message
    }
  }
`

// get accepted RFQ details
export const GET_ACCEPTED_RFQ_DETAIL_ACTION = gql`
  query GetPoRFQById($poId: String!) {
    getPoRFQById(poId: $poId) {
      success
      message
      data {
        id
        poType
        rfqType
        createdAt
        item {
          id
          name
          HSNCode
          image
          categoryName
          subCategoryName
          extraImage {
            url
            description
          }
          price
          unit
          quantity
        }
        buyer {
          fullName
          email
          phone
          address {
            addressLine1
            addressLine2
            city
            state
            country
            zipCode
          }
        }

        seller {
          address {
            addressLine1
            addressLine2
            city
            state
            country
            zipCode
          }
          businessName
          email
          phone
        }
        ppd {
          businessName
          email
          phone
          address {
            addressLine1
            addressLine2
            city
            state
            country
            zipCode
          }
        }
        pickupAddress {
          usda
          addressLine1
          addressLine2
          city
          state
          country
          zipCode
          longitude
          latitude
          phone
          pickupDate
        }
        deliveryAddress {
          usda
          addressLine1
          addressLine2
          city
          state
          country
          zipCode
          longitude
          latitude
          phone
        }
        sellerPo {
          rfqId
          quoteId
          date
          poId
        }
        ppdPo {
          rfqId
          quoteId
          date
          poId
        }
        total
        paymentMethod
        integrityTracker
        packageDimensions {
          boxCount
          length
          width
          height
          measurementUnit
          weight
          unit
        }
        notes
        pickupDate
        ppdAttachments {
          url
          description
        }
        sellerNotes
        ppdNotes
        additionalRequiredProduct {
          productId
          quantity
        }
        deliveryData {
          date
          status
        }
        deliveryDataNew {
          deliveryAddress {
            addressLine1
            addressLine2
            city
            country
            latitude
            longitude
            postalCode
            state
            zipCode
            phone
            pincode
            assignedDriverId
            assignedDriverName
            assignedVehicleNumber
            assignedVehicleType
            assignedVehicleId
            assignedHubId
            assignedSubHubId
            assignedHubName
            assignedSubHubName
          }
          PackageDimesions {
            boxCount
            height
            length
            measurementUnit
            unit
            weight
            width
          }
        }
        transXOrderType
        transx {
          id
          fullName
          businessName
          address {
            addressLine1
            country
            zipCode
            addressLine2
            state
            city
            phone
          }
          phone
          email
        }
        transxPo {
          rfqId
          quoteId
          ppdPOId
          transxOrderId
          bstPOId
          isBST
          transXOrderId
        }
        transxNotes
        additionalDetails {
          paymentId
          packageDimensions {
            unit
            boxCount
            length
            width
            weight
            measurementUnit
            height
          }
          buyer {
            fullName
            phone
            email
            businessName
            businessType
            createdAt
          }
          sellerNotes
          currentLocationStatus
          buyerId
          pickupDate
          poType
          changeLog {
            orderStatus
            message
            userId
            timestamp
          }
          subTotal
          sellerId
          notes
          id
          integrityTracker
          rfqType
          seller {
            businessName
            phone
            email
          }
          orderStatus
          trackerData {
            boxesPerPallet
            pallets
            trackerCost
            trackerOrderStatus
            trackerRequired
            trackerPerPallet
            isPayed
          }
          total
          createdAt
          item {
            extraImage {
              name
              id
              type
              url
            }
            image
            unit
            quantity
            price
            name
            id
            farmId
            HSNCode
            categoryName
            subcategoryName
          }
          sellerPo {
            date
            poId
            quoteId
            rfqId
          }
          nftDetails {
            nftHash
            tokenId
            holderId
            nftHolder
          }
          updatedAt
          taxTotal
          deliveryAddress {
            addressLine1
            country
            zipCode
            addressLine2
            state
            city
            phone
          }
          paymentMethod
          pickupAddress {
            addressLine1
            country
            zipCode
            addressLine2
            state
            city
            phone
          }
          estimatePrice
          estimateTime
        }
        shipmentDetails {
          trackingNumber
          trackingLink
          insuranceCost {
            amount
            currency
          }
          shipmentCost
          isInternational
          isReturnLabel
          labelDownload {
            href
            pdf
            png
            zpl
          }
          labelFormat
          labelId
          labelLayout
          packages {
            packageCode
            packageId
            sequence
            trackingNumber
            weight {
              unit
              value
            }
          }
        }
        bstPOId
        isBST
      }
    }
  }
`
// mutations --------------------------------------------------

// send rfq quote open
export const SEND_QUOTE_ACTION = gql`
  mutation SendQuotation($input: RfqSendQuoteInputs!) {
    sendQuotation(input: $input) {
      success
      message
      errors
    }
  }
`

// update ongoing RFQ quote
export const UPDATE_RFQ_QUOTE_ACTION = gql`
  mutation UpdateQuotationById($input: RfqUpdateQuoteInputs!) {
    updateQuotationById(input: $input) {
      success
      message
      errors
    }
  }
`
