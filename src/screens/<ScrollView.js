<ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ButtonFunc
            text={'First Button'}
            onButtonPress={() => {
              console.warn('first button pressed');
            }}
          />
          <ButtonFunc
            text={'Second Button'}
            onButtonPress={() => {
              alert('first button pressed');
            }}
          />
          <ButtonFunc onButtonPress={() => {}} />
        </ScrollView>